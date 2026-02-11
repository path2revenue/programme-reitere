"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";

export default function Testimonials() {
    const { testimonials: data } = siteConfig;
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(false);
    const [autoplay, setAutoplay] = useState(true);
    const ref = useRef(null);
    const items = data.items;
    const total = items.length;

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(() => setCurrent((p) => (p + 1) % total), 6000);
        return () => clearInterval(interval);
    }, [autoplay, total]);

    const goTo = (i) => { setCurrent(i); setAutoplay(false); setTimeout(() => setAutoplay(true), 15000); };

    return (
        <section id="temoignages" ref={ref} className="py-24 px-6 bg-[var(--color-bg-surface)]/30">
            <div className={`max-w-[900px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {/* LEFT-ALIGNED HEADER with accent bar */}
                <div className="mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">{data.eyebrow}</span>
                    <div className="flex items-start gap-4 mt-3">
                        <div className="w-1 h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent rounded-full shrink-0 mt-1" />
                        <h2 className="text-3xl md:text-5xl font-bold">
                            {data.headline}{" "}
                            <span className="bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] bg-clip-text text-transparent">{data.highlightedText}</span>{" "}
                            {data.headlineEnd}
                        </h2>
                    </div>
                </div>

                {/* LARGE SINGLE QUOTE CARD */}
                <div className="relative bg-[var(--color-bg-card)] border border-[var(--color-border-default)] rounded-xl p-10 md:p-14 min-h-[280px] overflow-hidden shadow-sm">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ background: items[current].color }} />

                    {/* Big decorative quote mark */}
                    <div className="absolute -top-2 left-8 text-[120px] text-[var(--color-accent)]/10 font-serif leading-none select-none pointer-events-none">&ldquo;</div>

                    <div className="relative z-10">
                        <div className="text-lg text-[var(--color-cta)] mb-4">{"★".repeat(items[current].stars)}</div>
                        <p className="text-xl md:text-2xl text-[var(--color-text-primary)] italic leading-relaxed mb-8">
                            &ldquo;{items[current].quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                            {items[current].image ? (
                                <img
                                    src={items[current].image}
                                    alt={items[current].name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-accent)]/30"
                                />
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-sm font-bold text-[var(--color-accent)]">
                                    {items[current].name.charAt(0)}
                                </div>
                            )}
                            <div>
                                <div className="text-sm font-semibold text-[var(--color-text-primary)]">{items[current].name}</div>
                                <div className="text-xs text-[var(--color-text-muted)]">{items[current].role}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DOTS ONLY — no arrows for cleaner editorial look */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`transition-all duration-300 rounded-full ${i === current
                                ? "w-8 h-2.5 bg-[var(--color-accent)]"
                                : "w-2.5 h-2.5 bg-[var(--color-border-hover)] hover:bg-[var(--color-accent)]/50"
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
