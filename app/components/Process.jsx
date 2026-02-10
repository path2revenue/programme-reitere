"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";

export default function Process() {
    const { process: data } = siteConfig;
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                {/* LEFT-ALIGNED HEADER with accent bar */}
                <div className="mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">{data.eyebrow}</span>
                    <div className="flex items-start gap-4 mt-3">
                        <div className="w-1 h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent rounded-full shrink-0 mt-1" />
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold">
                                {data.headline}{" "}
                                <span className="bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] bg-clip-text text-transparent">{data.highlightedText}</span>
                            </h2>
                            {data.subtitle && <p className="text-[var(--color-text-secondary)] max-w-[600px] mt-3">{data.subtitle}</p>}
                        </div>
                    </div>
                </div>

                {/* HORIZONTAL TIMELINE */}
                <div className="relative">
                    {/* Connecting horizontal line — desktop only */}
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-[var(--color-accent)]/60 via-[var(--color-accent)]/30 to-transparent" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {data.steps.map((step, i) => (
                            <div
                                key={i}
                                className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                    }`}
                                style={{ transitionDelay: `${i * 200}ms` }}
                            >
                                {/* Step number circle */}
                                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-sm font-bold text-white mb-5 relative z-10">
                                    {step.number}
                                </div>

                                {/* Step content */}
                                <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{step.title}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
