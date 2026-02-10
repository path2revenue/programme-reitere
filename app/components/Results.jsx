"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";
import LucideIcon from "./LucideIcon";

export default function Results() {
    const { results: data } = siteConfig;
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="resultats" ref={sectionRef} className="py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                {/* LEFT-ALIGNED HEADER with accent bar */}
                <div className="mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">{data.eyebrow}</span>
                    <div className="flex items-start gap-4 mt-3">
                        <div className="w-1 h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent rounded-full shrink-0 mt-1" />
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-3">
                                {data.headline}{" "}
                                <span className="bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] bg-clip-text text-transparent">
                                    {data.highlightedText}
                                </span>
                            </h2>
                            {data.subtitle && <p className="text-[var(--color-text-secondary)] max-w-[600px]">{data.subtitle}</p>}
                        </div>
                    </div>
                </div>

                {/* 2-COLUMN CARDS */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {data.items.map((item, i) => (
                        <div
                            key={i}
                            className={`bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-7 shadow-sm hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all duration-300 cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                                    <LucideIcon name={item.metric} size={24} className="text-[var(--color-accent)]" />
                                </div>
                                <div>
                                    <div className="text-base font-semibold text-[var(--color-text-primary)] mb-1">{item.label}</div>
                                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                                    {item.badge && (
                                        <span className="inline-block mt-3 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border border-[var(--color-accent)]/20 text-[var(--color-accent-light)]">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
