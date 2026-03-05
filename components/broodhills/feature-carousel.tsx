"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Pizza04Icon,
    CommandFreeIcons,
    GlobalSearchIcon,
    AiCloudIcon,
    SmartPhone01Icon,
    CheckmarkCircle01Icon,
    DashboardSquare01Icon,
    MagicWandIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { useResponsive } from "@/hooks/use-responsive";

// Change Here
const FEATURES = [
    {
        id: "sustainable",
        label: "West Africa Oil Investment Growth",
        icon: Pizza04Icon,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772436537/Gemini_Generated_Image_5veob55veob55veo_a9o52e.png",
        description: "Unlock scalable energy investment opportunities anchored in proven offshore assets. Structured capital deployment aligned with measurable ROI performance. Built for long-term institutional growth.",
    },
    {
        id: "Negotiation",
        label: "Executive Oil Deal Negotiation",
        icon: CommandFreeIcons,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772436983/Gemini_Generated_Image_iviq3yiviq3yiviq_dobbmd.png",
        description: "Where verified buyers and mandates execute serious transactions. Professional deal governance backed by compliance protocols. Confidence-driven negotiation at executive level..",
    },
    {
        id: "global",
        label: "Global Energy Trade Hub",
        icon: GlobalSearchIcon,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772436842/Gemini_Generated_Image_b3ewwnb3ewwnb3ew_boxlz9.png",
        description: "West Africa positioned as a central crude export gateway. Global trade routes connecting buyers and investors worldwide. Energy markets executed with institutional precision..",
    },
    {
        id: "pipeline",
        label: "Pipeline Infrastructure & Supply Chain",
        icon: CheckmarkCircle01Icon,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772436863/Gemini_Generated_Image_bt5lotbt5lotbt5l_pnbrsa.png",
        description: "Strategic infrastructure enabling uninterrupted energy flow. Integrated logistics reducing transaction risk exposure. Built for reliability and scale.",
    },
    {
        id: "Bank-backed",
        label: "Structured Trade Financial Instruments",
        icon: AiCloudIcon,
        image:
            "https://res.cloudinary.com/dycc51iwn/image/upload/v1772439351/e12daafd-1fbc-44fe-bed8-1e7eb24d0582_mow6gn.png",
        description: "Bank-backed instruments powering secure oil transactions. SBLC, LC, and BG-supported frameworks for capital protection. Structured finance engineered for credibility and trust.",
    },
    {
        id: "mobile",
        label: "Mobile First",
        icon: SmartPhone01Icon,
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
        description: "A world-class experience on every single device.",
    },
    {
        id: "analytics",
        label: "Real-time Analytics",
        icon: DashboardSquare01Icon,
        image:
            "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
        description: "Insights at your fingertips, updated in real-time.",
    },
    {
        id: "security",
        label: "Enterprise Security",
        icon: CheckmarkCircle01Icon,
        image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
        description: "Bank-grade security protocols for your data.",
    },
    {
        id: "trade",
        label: "Trade Automations",
        icon: MagicWandIcon,
        image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
        description: "Let AI handle the repetitive tasks for you.",
    },
    {
        id: "local",
        label: "Locally Owned",
        icon: CheckmarkCircle01Icon,
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
        description: "Supporting local businesses and creators.",
    },
];

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function FeatureCarousel() {
    const [step, setStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { isMobile } = useResponsive();

    const currentIndex =
        ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

    const nextStep = useCallback(() => {
        setStep((prev) => prev + 1);
    }, []);

    const handleChipClick = (index: number) => {
        const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
        if (diff > 0) setStep((s) => s + diff);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
        return () => clearInterval(interval);
    }, [nextStep, isPaused]);

    const getCardStatus = (index: number) => {
        const diff = index - currentIndex;
        const len = FEATURES.length;

        let normalizedDiff = diff;
        if (diff > len / 2) normalizedDiff -= len;
        if (diff < -len / 2) normalizedDiff += len;

        if (normalizedDiff === 0) return "active";
        if (normalizedDiff === -1) return "prev";
        if (normalizedDiff === 1) return "next";
        return "hidden";
    };

    return (
        <div className="w-full max-w-7xl mx-auto md:p-8">
            <div className={cn("relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col border border-border/40", isMobile ? "min-h-auto" : "min-h-[400px]")}>
                {!isMobile ? (
                    <div className="w-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:px-24 py-16 bg-[#62B2FE] ">
                        <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40" />
                        <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40" />
                        <div className="relative w-full h-full flex items-center justify-center z-20" style={{ minHeight: ITEM_HEIGHT * 5 }}>
                            {FEATURES.map((feature, index) => {
                                const isActive = index === currentIndex;
                                const distance = index - currentIndex;
                                const wrappedDistance = wrap(
                                    -(FEATURES.length / 2),
                                    FEATURES.length / 2,
                                    distance
                                );

                                return (
                                    <motion.div
                                        key={feature.id}
                                        style={{
                                            height: ITEM_HEIGHT,
                                            width: "fit-content",
                                        }}
                                        animate={{
                                            y: wrappedDistance * ITEM_HEIGHT,
                                            opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 90,
                                            damping: 22,
                                            mass: 1,
                                        }}
                                        className="absolute flex items-center justify-center w-full"
                                    >
                                        <button
                                            onClick={() => handleChipClick(index)}
                                            onMouseEnter={() => setIsPaused(true)}
                                            onMouseLeave={() => setIsPaused(false)}
                                            className={cn(
                                                "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border",
                                                isActive
                                                    ? "bg-white text-[#62B2FE] border-white z-10"
                                                    : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    "flex items-center justify-center transition-colors duration-500",
                                                    isActive ? "text-[#62B2FE]" : "text-white/40"
                                                )}
                                            >
                                                <HugeiconsIcon
                                                    icon={feature.icon}
                                                    size={18}
                                                    strokeWidth={2}
                                                />
                                            </div>

                                            <span className="font-normal text-sm md:text-[15px] tracking-tight whitespace-nowrap uppercase">
                                                {feature.label}
                                            </span>
                                        </button>

                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="absolute left-[calc(100%+24px)] hidden lg:block w-80 text-white/90 text-sm leading-relaxed"
                                            >
                                                {feature.description}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div style={{ background: "#62B2FE", display: "flex", flexDirection: "column" }}>
                        <div style={{ padding: "16px", overflowX: "auto", display: "flex", gap: 10, WebkitOverflowScrolling: "touch", alignItems: "center" } as React.CSSProperties}>
                            {FEATURES.map((feature, index) => {
                                const isActive = index === currentIndex;
                                return (
                                    <button
                                        key={feature.id}
                                        onClick={() => handleChipClick(index)}
                                        style={{
                                            flexShrink: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            padding: "10px 16px",
                                            borderRadius: 999,
                                            border: isActive ? `1px solid #ffffff` : "1px solid rgba(255,255,255,0.2)",
                                            background: isActive ? `#ffffff` : "transparent",
                                            color: isActive ? "#62B2FE" : "rgba(255,255,255,0.7)",
                                            fontFamily: "DM Sans, sans-serif",
                                            fontSize: 13,
                                            fontWeight: 500,
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                            transition: "all 0.3s",
                                        }}
                                    >
                                        <HugeiconsIcon icon={feature.icon} size={16} strokeWidth={2} />
                                        <span>{feature.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                        <div style={{ padding: "0 24px 24px", textAlign: "center", color: "white" }}>
                            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, opacity: 0.9 }}>
                                {FEATURES[currentIndex]?.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
