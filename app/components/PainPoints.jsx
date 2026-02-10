"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/site.config";
import LucideIcon from "./LucideIcon";

export default function PainPoints() {
    const { painPoints: data } = siteConfig;
    const [visibleCards, setVisibleCards] = useState([]);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = refs.current.indexOf(entry.target);
                        if (idx !== -1) setVisibleCards((prev) => [...new Set([...prev, idx])]);
                    }
                });
            },
            { threshold: 0.3 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                {/* LEFT-ALIGNED HEADER with accent bar */}
                <div className="mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-danger)] font-semibold">
                        {data.eyebrow}
                    </span>
                    <div className="flex items-start gap-4 mt-3">
                        <div className="w-1 h-16 bg-gradient-to-b from-[var(--color-danger)] to-transparent rounded-full shrink-0 mt-1" />
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-3">
                                {data.headline}{" "}
                                <span className="text-[var(--color-danger)]">{data.highlightedText}</span> ?
                            </h2>
                            <p className="text-[var(--color-text-secondary)] max-w-[600px]">{data.subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* 2-COLUMN pain cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {data.items.map((pain, i) => (
                        <div
                            key={i}
                            ref={(el) => (refs.current[i] = el)}
                            className={`relative bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-7 hover:border-[var(--color-danger)]/30 transition-all duration-300 cursor-pointer group ${visibleCards.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[var(--color-danger)]/10 flex items-center justify-center shrink-0">
                                    <LucideIcon name={pain.icon} size={20} className="text-[var(--color-danger)]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 leading-snug">{pain.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{pain.description}</p>
                                    <div className="inline-block px-3 py-1 bg-[var(--color-danger)]/10 border border-[var(--color-danger)]/20 rounded-md text-xs text-[var(--color-danger)] font-medium">
                                        {pain.stat}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
