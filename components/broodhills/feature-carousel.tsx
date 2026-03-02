"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    TrendingUp,
    Handshake,
    Globe,
    GitBranch,
    Landmark,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --------------- Brand colours from site palette ---------------
const LIME_BRIGHT = "#C8DC0A";
const OLIVE = "#6B8C14";
const BLACK = "#0D0D0D";

// --------------- Carousel data (only oil-sector relevant entries) ---------------
const FEATURES = [
    {
        id: "sustainable",
        label: "West Africa Oil Investment Growth",
        icon: TrendingUp,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772436537/Gemini_Generated_Image_5veob55veob55veo_a9o52e.png",
        headline: "Scalable Energy Investment",
        description:
            "Unlock scalable energy investment opportunities anchored in proven offshore assets. Structured capital deployment aligned with measurable ROI. Built for long-term institutional growth.",
    },
    {
        id: "negotiation",
        label: "Executive Oil Deal Negotiation",
        icon: Handshake,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772436983/Gemini_Generated_Image_iviq3yiviq3yiviq_dobbmd.png",
        headline: "Professional Deal Governance",
        description:
            "Where verified buyers and mandates execute serious transactions. Professional deal governance backed by compliance protocols. Confidence-driven negotiation at the executive level.",
    },
    {
        id: "global",
        label: "Global Energy Trade Hub",
        icon: Globe,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772436842/Gemini_Generated_Image_b3ewwnb3ewwnb3ew_boxlz9.png",
        headline: "West Africa's Export Gateway",
        description:
            "West Africa positioned as a central crude export gateway. Global trade routes connecting buyers and investors worldwide. Energy markets executed with institutional precision.",
    },
    {
        id: "pipeline",
        label: "Pipeline Infrastructure & Supply Chain",
        icon: GitBranch,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772436863/Gemini_Generated_Image_bt5lotbt5lotbt5l_pnbrsa.png",
        headline: "Reliable Logistics at Scale",
        description:
            "Strategic infrastructure enabling uninterrupted energy flow. Integrated logistics reducing transaction risk exposure. Built for reliability and long-horizon scale.",
    },
    {
        id: "bank-backed",
        label: "Structured Trade Financial Instruments",
        icon: Landmark,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772439351/e12daafd-1fbc-44fe-bed8-1e7eb24d0582_mow6gn.png",
        headline: "Bank-Backed Capital Protection",
        description:
            "SBLC, LC, and BG-supported frameworks for capital protection. Structured finance engineered for credibility and trust. Powering secure oil transactions worldwide.",
    },
];

const AUTO_PLAY_INTERVAL = 3800;
const ITEM_HEIGHT = 68;

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function FeatureCarousel() {
    const [step, setStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const total = FEATURES.length;
    const currentIndex = ((step % total) + total) % total;

    const nextStep = useCallback(() => {
        setStep((prev) => prev + 1);
    }, []);

    const handleChipClick = (index: number) => {
        const diff = (index - currentIndex + total) % total;
        if (diff > 0) setStep((s) => s + diff);
        else if (diff === 0) return; // already active
        else setStep((s) => s + diff + total);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
        return () => clearInterval(interval);
    }, [nextStep, isPaused]);

    const getCardStatus = (index: number) => {
        const diff = index - currentIndex;
        let normalizedDiff = diff;
        if (diff > total / 2) normalizedDiff -= total;
        if (diff < -total / 2) normalizedDiff += total;

        if (normalizedDiff === 0) return "active";
        if (normalizedDiff === -1) return "prev";
        if (normalizedDiff === 1) return "next";
        return "hidden";
    };

    const current = FEATURES[currentIndex];

    return (
        <section
            style={{
                padding: "80px 6%",
                background: "#F8F8F6",
                overflow: "hidden",
            }}
        >
            {/* Section header */}
            <div style={{ maxWidth: 1200, margin: "0 auto 52px", textAlign: "center" }}>
                <span
                    style={{
                        display: "inline-block",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: OLIVE,
                        marginBottom: 12,
                        fontFamily: "DM Sans, sans-serif",
                    }}
                >
                    Our Capabilities
                </span>
                <h2
                    style={{
                        fontFamily: "Fraunces, serif",
                        fontSize: "clamp(28px, 3.2vw, 44px)",
                        fontWeight: 700,
                        color: BLACK,
                        margin: "0 0 14px",
                        lineHeight: 1.15,
                    }}
                >
                    End-to-End Energy Market
                    <br />
                    <span style={{ color: OLIVE }}>Solutions</span>
                </h2>
                <p
                    style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: 14,
                        color: "#6B7280",
                        maxWidth: 520,
                        margin: "0 auto",
                        lineHeight: 1.7,
                    }}
                >
                    From capital structuring to deal execution — integrated services built
                    for institutional oil trade.
                </p>
            </div>

            {/* Carousel shell */}
            <div
                className="relative overflow-hidden mx-auto"
                style={{
                    maxWidth: 1200,
                    borderRadius: 32,
                    border: "1px solid #E5E7EB",
                    background: "#ffffff",
                    boxShadow: "0 8px 60px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "row",
                    minHeight: 560,
                }}
            >
                {/* ---- LEFT PANEL: scrolling selector ---- */}
                <div
                    className="relative overflow-hidden flex flex-col items-start justify-center"
                    style={{
                        width: "42%",
                        minWidth: 280,
                        padding: "32px 0",
                        background: BLACK,
                        flexShrink: 0,
                    }}
                >
                    {/* top / bottom fade */}
                    <div
                        className="absolute inset-x-0 top-0 z-40 pointer-events-none"
                        style={{
                            height: 80,
                            background: `linear-gradient(to bottom, ${BLACK}, transparent)`,
                        }}
                    />
                    <div
                        className="absolute inset-x-0 bottom-0 z-40 pointer-events-none"
                        style={{
                            height: 80,
                            background: `linear-gradient(to top, ${BLACK}, transparent)`,
                        }}
                    />

                    {/* Scrolling labels */}
                    <div className="relative w-full flex items-center justify-start" style={{ height: ITEM_HEIGHT * 3 }}>
                        {FEATURES.map((feature, index) => {
                            const isActive = index === currentIndex;
                            const distance = index - currentIndex;
                            const wrappedDistance = wrap(
                                -(total / 2),
                                total / 2,
                                distance
                            );

                            return (
                                <motion.div
                                    key={feature.id}
                                    style={{ height: ITEM_HEIGHT, width: "100%", position: "absolute", left: 0 }}
                                    animate={{
                                        y: wrappedDistance * ITEM_HEIGHT,
                                        opacity: Math.max(0, 1 - Math.abs(wrappedDistance) * 0.28),
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 85,
                                        damping: 22,
                                        mass: 1,
                                    }}
                                    className="flex items-center px-8 md:px-12"
                                >
                                    <button
                                        onClick={() => handleChipClick(index)}
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                        className={cn(
                                            "relative flex items-center gap-4 px-6 py-3.5 rounded-full transition-all duration-500 text-left w-full border",
                                            isActive
                                                ? "border-[#C8DC0A] bg-[#C8DC0A]/10 text-[#C8DC0A]"
                                                : "border-white/10 bg-transparent text-white/40 hover:text-white/70 hover:border-white/30"
                                        )}
                                    >
                                        <div className={cn("flex-shrink-0", isActive ? "text-[#C8DC0A]" : "text-white/30")}>
                                            {React.createElement(feature.icon, { size: 17, strokeWidth: 2 })}
                                        </div>
                                        <span className="font-normal text-[13px] tracking-wide whitespace-nowrap">
                                            {feature.label}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-dot"
                                                className="ml-auto w-1.5 h-1.5 rounded-full"
                                                style={{ background: LIME_BRIGHT }}
                                            />
                                        )}
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Progress dots */}
                    <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-1.5 z-50">
                        {FEATURES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleChipClick(i)}
                                style={{
                                    width: i === currentIndex ? 20 : 6,
                                    height: 6,
                                    borderRadius: 3,
                                    background: i === currentIndex ? LIME_BRIGHT : "rgba(255,255,255,0.2)",
                                    transition: "all 0.35s ease",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* ---- RIGHT PANEL: image + text ---- */}
                <div
                    className="relative flex-1 flex flex-col overflow-hidden"
                    style={{ minHeight: 420 }}
                >
                    {/* Stacked image cards */}
                    <div className="relative flex-1 flex items-center justify-center py-10 px-8 overflow-hidden">
                        <div className="relative w-full max-w-md" style={{ aspectRatio: "4/3" }}>
                            {FEATURES.map((feature, index) => {
                                const status = getCardStatus(index);
                                const isActive = status === "active";
                                const isPrev = status === "prev";
                                const isNext = status === "next";

                                return (
                                    <motion.div
                                        key={feature.id}
                                        initial={false}
                                        animate={{
                                            x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                                            scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.72,
                                            opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                                            rotate: isPrev ? -2.5 : isNext ? 2.5 : 0,
                                            zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                                        }}
                                        transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.7 }}
                                        className="absolute inset-0 rounded-2xl overflow-hidden"
                                        style={{
                                            border: "3px solid #ffffff",
                                            boxShadow: isActive ? "0 24px 80px rgba(0,0,0,0.18)" : "none",
                                            pointerEvents: isActive ? "auto" : "none",
                                        }}
                                    >
                                        <img
                                            src={feature.image}
                                            alt={feature.label}
                                            className="w-full h-full object-cover"
                                            style={{
                                                filter: isActive ? "none" : "grayscale(80%) brightness(0.7)",
                                                transition: "filter 0.6s ease",
                                            }}
                                        />

                                        {/* Dark gradient overlay */}
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background:
                                                    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)",
                                            }}
                                        />

                                        {/* Live badge */}
                                        {isActive && (
                                            <div className="absolute top-5 left-5 flex items-center gap-2">
                                                <span
                                                    className="w-2 h-2 rounded-full"
                                                    style={{
                                                        background: LIME_BRIGHT,
                                                        boxShadow: `0 0 8px ${LIME_BRIGHT}`,
                                                    }}
                                                />
                                                <span className="text-white/70 text-[10px] font-mono uppercase tracking-widest">
                                                    Live
                                                </span>
                                            </div>
                                        )}

                                        {/* Caption overlay */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 18 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.38, ease: "easeOut" }}
                                                    className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2 pointer-events-none"
                                                >
                                                    <span
                                                        className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest w-fit"
                                                        style={{ background: LIME_BRIGHT, color: BLACK }}
                                                    >
                                                        {index + 1} of {total} · {feature.label}
                                                    </span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Text description area */}
                    <div
                        className="relative z-10 px-8 md:px-12 pb-10"
                        style={{ borderTop: "1px solid #F0F0F0" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="pt-7"
                            >
                                <h3
                                    style={{
                                        fontFamily: "Fraunces, serif",
                                        fontSize: "clamp(18px, 2.2vw, 26px)",
                                        fontWeight: 700,
                                        color: BLACK,
                                        marginBottom: 10,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {current.headline}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: 14,
                                        color: "#6B7280",
                                        lineHeight: 1.75,
                                        maxWidth: 460,
                                    }}
                                >
                                    {current.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
