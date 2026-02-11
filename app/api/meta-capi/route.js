/**
 * Meta Conversions API – Server-side event relay
 * POST /api/meta-capi
 *
 * Expects JSON body: { event_name, event_time, event_source_url, user_data, custom_data }
 * user_data should include hashed fields (client_ip_address and client_user_agent are added server-side)
 */

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;
const API_VERSION = "v21.0";
const ENDPOINT = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`;

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            event_name = "PageView",
            event_time = Math.floor(Date.now() / 1000),
            event_source_url,
            event_id,
            user_data = {},
            custom_data = {},
        } = body;

        // Enrich user_data with server-side info
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            request.headers.get("x-real-ip") ||
            "unknown";
        const ua = request.headers.get("user-agent") || "";

        const enrichedUserData = {
            ...user_data,
            client_ip_address: ip,
            client_user_agent: ua,
        };

        const payload = {
            data: [
                {
                    event_name,
                    event_time,
                    event_id,
                    event_source_url,
                    action_source: "website",
                    user_data: enrichedUserData,
                    custom_data,
                },
            ],
            // Enable test mode if META_TEST_CODE env var is set
            ...(process.env.META_TEST_CODE && { test_event_code: process.env.META_TEST_CODE }),
        };

        const res = await fetch(`${ENDPOINT}?access_token=${ACCESS_TOKEN}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const result = await res.json();

        if (!res.ok) {
            console.error("[Meta CAPI] Error:", JSON.stringify(result));
            return Response.json({ success: false, error: result }, { status: res.status });
        }

        return Response.json({ success: true, ...result });
    } catch (err) {
        console.error("[Meta CAPI] Exception:", err.message);
        return Response.json({ success: false, error: err.message }, { status: 500 });
    }
}
