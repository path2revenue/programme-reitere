"use client";

import { useEffect } from "react";
import { metaEvents } from "@/lib/meta-events";

/**
 * Fires a server-side PageView event on mount (complements the client pixel).
 * Drop this once in the layout alongside the pixel <Script>.
 */
export default function MetaCapiPageView() {
    useEffect(() => {
        // Small delay to let the pixel initialize first
        const timer = setTimeout(() => {
            metaEvents.pageView();
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return null;
}
