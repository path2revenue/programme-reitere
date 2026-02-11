/**
 * Meta Dual Tracking — Client Pixel + Server CAPI
 *
 * Sends every event through BOTH channels for maximum match quality.
 * Uses a shared event_id for deduplication on Meta's side.
 */

function generateEventId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function getFbp() {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(/(?:^|;\s*)_fbp=([^;]*)/);
    return match ? match[1] : null;
}

function getFbc() {
    if (typeof document === "undefined") return null;
    // Check URL for fbclid first
    const url = new URL(window.location.href);
    const fbclid = url.searchParams.get("fbclid");
    if (fbclid) return `fb.1.${Date.now()}.${fbclid}`;
    // Fallback to cookie
    const match = document.cookie.match(/(?:^|;\s*)_fbc=([^;]*)/);
    return match ? match[1] : null;
}

/**
 * Track a Meta event (dual: pixel + CAPI)
 * @param {string} eventName - e.g. "PageView", "Lead", "Schedule", "Contact"
 * @param {object} customData - optional custom data (value, currency, content_name, etc.)
 */
export function trackMetaEvent(eventName = "PageView", customData = {}) {
    const eventId = generateEventId();

    // 1. Client-side pixel
    if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", eventName, customData, { eventID: eventId });
    }

    // 2. Server-side CAPI
    const payload = {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: typeof window !== "undefined" ? window.location.href : "",
        user_data: {
            fbp: getFbp(),
            fbc: getFbc(),
        },
        custom_data: customData,
    };

    fetch("/api/meta-capi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
    }).catch((err) => console.warn("[Meta CAPI]", err.message));
}

/**
 * Pre-built event helpers
 */
export const metaEvents = {
    pageView: () => trackMetaEvent("PageView"),
    lead: (data = {}) => trackMetaEvent("Lead", data),
    schedule: (data = {}) => trackMetaEvent("Schedule", data),
    contact: (data = {}) => trackMetaEvent("Contact", data),
    completeRegistration: (data = {}) => trackMetaEvent("CompleteRegistration", data),
    viewContent: (contentName) => trackMetaEvent("ViewContent", { content_name: contentName }),
};
