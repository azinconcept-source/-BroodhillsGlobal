"use client";

import { useState, useEffect } from "react";
import { BLACK, DARK, GOLD, GOLD_DARK, GRAY, WHITE, BORDER, LIGHTGRAY } from "./constants";
import { Nav } from "./nav";
import { BroodFooter } from "./footer";

const OLIVE = "#6B8C14";
const LIME = "#C8DC0A";

const stats = [
    { value: "$8.4B+", label: "Global Deal Flow Facilitated" },
    { value: "120+", label: "Institutional Partners" },
    { value: "18", label: "Countries Across Africa & Beyond" },
    { value: "97%", label: "Client Retention Rate" },
];

const milestones = [
    { year: "2014", title: "Foundation", desc: "Brood Hills Global was established with a singular mission: to provide institutional-grade energy market infrastructure for sub-Saharan Africa's growing trade economy." },
    { year: "2016", title: "First Major Deal", desc: "Successfully structured our first $200M cross-border energy deal, setting the benchmark for structured trade finance in the West African corridor." },
    { year: "2018", title: "Regulatory Milestone", desc: "Achieved full SEC and CBN compliance certifications, establishing us as the most regulated energy marketplace on the continent." },
    { year: "2020", title: "Platform Launch", desc: "Launched BroodHUB — a proprietary digital platform enabling real-time deal origination, instrument tracking, and compliance reporting for all participants." },
    { year: "2022", title: "Pan-African Expansion", desc: "Expanded operations into East and Southern Africa, onboarding 60+ new institutional clients and raising our deal flow to $5B annually." },
    { year: "2024", title: "Global Recognition", desc: "Recognized by the African Development Bank as a top-tier structured trade facilitator, with $8.4B+ total deal facilitation and operations in 18 countries." },
];

const values = [
    {
        icon: "⚖️",
        title: "Regulatory Integrity",
        desc: "Every instrument, every deal, every transaction rests on a foundation of full regulatory compliance. We operate within the framework of law without exception.",
    },
    {
        icon: "🔭",
        title: "Transparency at Scale",
        desc: "Our clients are never in the dark. From term sheets to settlement, every step is documented, trackable, and auditable in real time.",
    },
    {
        icon: "🛡️",
        title: "Institutional-Grade Security",
        desc: "We employ bank-level security protocols, multi-party verification systems, and ISO-certified data practices to protect every participant.",
    },
    {
        icon: "🌍",
        title: "African-First Mandate",
        desc: "Our mission is rooted in economic transformation for Africa. We build wealth locally, partner globally, and never lose sight of our community impact.",
    },
    {
        icon: "🤝",
        title: "Long-Term Partnership",
        desc: "We don't close deals — we build lasting relationships. Our team is present through origination, execution, and post-settlement support.",
    },
    {
        icon: "⚡",
        title: "Operational Excellence",
        desc: "Speed matters in commodities. Our streamlined processes, experienced specialists, and proprietary technology ensure lean, precise execution every time.",
    },
];

export default function AboutUsPage() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap";
        document.head.appendChild(link);
    }, []);

    return (
        <div style={{ fontFamily: "DM Sans, sans-serif", background: WHITE }}>
            <Nav onEnter={() => alert("Platform access: complete KYC onboarding to proceed.")} onOpenServices={() => { }} />
            <div style={{ height: 68 }} />

            {/* Hero */}
            <section style={{ background: DARK, padding: "100px 6% 80px", position: "relative", overflow: "hidden" }}>
                {/* Decorative */}
                <div style={{ position: "absolute", top: -80, right: -80, width: 420, height: 420, borderRadius: "50%", background: LIME, opacity: 0.04, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", border: `1px solid ${LIME}`, opacity: 0.08, pointerEvents: "none" }} />
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,220,10,0.12)", border: `1px solid rgba(200,220,10,0.25)`, borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: LIME }} />
                        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: LIME, letterSpacing: 1.5, textTransform: "uppercase" }}>Our Story</span>
                    </div>
                    <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: "clamp(40px, 5vw, 68px)", color: WHITE, lineHeight: 1.05, margin: "0 0 24px", maxWidth: 780 }}>
                        Built to Power Africa's{" "}
                        <span style={{ color: LIME }}>Energy Economy</span>
                    </h1>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "#aaa", lineHeight: 1.8, maxWidth: 640, margin: "0 0 48px" }}>
                        Brood Hills Global is a structured energy marketplace and trade facilitation firm operating at the intersection of commodity markets, financial instruments, and institutional compliance. We exist to make large-scale African energy trade safe, transparent, and institutionally credible.
                    </p>
                    {/* Stats Row */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                        {stats.map((s, i) => (
                            <div key={i} style={{ borderLeft: `2px solid rgba(200,220,10,0.3)`, paddingLeft: 20 }}>
                                <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 34, color: LIME, lineHeight: 1 }}>{s.value}</div>
                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#777", marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section style={{ padding: "96px 6%", background: WHITE }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                    <div>
                        <div style={{ display: "inline-block", background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 20 }}>Our Mission</div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 46px)", color: BLACK, lineHeight: 1.15, margin: "0 0 20px" }}>
                            Creating the Infrastructure for Trustworthy African Trade
                        </h2>
                        <p style={{ fontSize: 15, color: GRAY, lineHeight: 1.85, margin: "0 0 24px" }}>
                            Our mission is to empower legitimate, large-scale energy trade in Africa by providing the institutional infrastructure — compliance frameworks, deal structures, instrument management, and operational support — that global counterparties demand and local players deserve.
                        </p>
                        <p style={{ fontSize: 15, color: GRAY, lineHeight: 1.85 }}>
                            We operate as a bridge between Africa's abundant energy resources and the global capital markets that have historically viewed the continent with skepticism. Through rigorous due diligence, transparent processes, and seasoned expertise, we eliminate the friction that has blocked billions in legitimate commerce.
                        </p>
                    </div>
                    <div style={{ position: "relative" }}>
                        {/* Visual card stack */}
                        <div style={{ position: "relative", paddingTop: 24, paddingLeft: 24 }}>
                            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: LIME, borderRadius: 16, opacity: 0.12 }} />
                            <div style={{ background: DARK, borderRadius: 14, padding: 36, position: "relative", zIndex: 1 }}>
                                <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 20, color: LIME, marginBottom: 16 }}>Our Vision</div>
                                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: "#aaa", lineHeight: 1.8, margin: "0 0 24px" }}>
                                    To become the most trusted energy trade facilitation platform in Africa — where institutional buyers, sellers, and financiers conduct business with full confidence in compliance, settlement, and counterparty integrity.
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                    {["Zero-tolerance for instrument fraud", "Full settlement transparency", "Sovereign-grade compliance stack"].map((v, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <div style={{ width: 20, height: 20, borderRadius: "50%", background: LIME, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                                <span style={{ fontSize: 11, color: BLACK, fontWeight: 700 }}>✓</span>
                                            </div>
                                            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: WHITE }}>{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section style={{ padding: "96px 6%", background: LIGHTGRAY }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <div style={{ display: "inline-block", background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 18 }}>Our Journey</div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 46px)", color: BLACK, lineHeight: 1.15, margin: 0 }}>
                            A Decade of Structured Excellence
                        </h2>
                    </div>
                    <div style={{ position: "relative" }}>
                        {/* Center line */}
                        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${LIME}, ${OLIVE})`, transform: "translateX(-50%)", opacity: 0.3 }} />
                        {milestones.map((m, i) => (
                            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 56px 1fr", gap: 0, marginBottom: 48, alignItems: "start" }}>
                                {i % 2 === 0 ? (
                                    <>
                                        <div style={{ paddingRight: 40, textAlign: "right" }}>
                                            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 22, color: BLACK, marginBottom: 6 }}>{m.title}</div>
                                            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <div style={{ width: 40, height: 40, borderRadius: "50%", background: LIME, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                                                <span style={{ fontFamily: "Fraunces, serif", fontSize: 11, fontWeight: 800, color: BLACK }}>{m.year.slice(-2)}</span>
                                            </div>
                                            <div style={{ fontFamily: "Fraunces, serif", fontSize: 13, color: GRAY, marginTop: 5 }}>{m.year}</div>
                                        </div>
                                        <div style={{ paddingLeft: 40 }} />
                                    </>
                                ) : (
                                    <>
                                        <div style={{ paddingRight: 40 }} />
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <div style={{ width: 40, height: 40, borderRadius: "50%", background: DARK, border: `2px solid ${LIME}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                                                <span style={{ fontFamily: "Fraunces, serif", fontSize: 11, fontWeight: 800, color: LIME }}>{m.year.slice(-2)}</span>
                                            </div>
                                            <div style={{ fontFamily: "Fraunces, serif", fontSize: 13, color: GRAY, marginTop: 5 }}>{m.year}</div>
                                        </div>
                                        <div style={{ paddingLeft: 40 }}>
                                            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 22, color: BLACK, marginBottom: 6 }}>{m.title}</div>
                                            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section style={{ padding: "96px 6%", background: WHITE }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <div style={{ display: "inline-block", background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 18 }}>What We Stand For</div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 46px)", color: BLACK, lineHeight: 1.15, margin: 0 }}>Our Core Values</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
                        {values.map((v, i) => (
                            <div key={i} style={{ background: LIGHTGRAY, borderRadius: 14, padding: "32px 28px", border: `1px solid ${BORDER}`, transition: "all 0.3s" }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLDivElement).style.background = DARK;
                                    (e.currentTarget as HTMLDivElement).style.borderColor = LIME;
                                    (e.currentTarget as HTMLDivElement).querySelectorAll("[data-val-title]").forEach((el) => { (el as HTMLElement).style.color = LIME; });
                                    (e.currentTarget as HTMLDivElement).querySelectorAll("[data-val-desc]").forEach((el) => { (el as HTMLElement).style.color = "#aaa"; });
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLDivElement).style.background = LIGHTGRAY;
                                    (e.currentTarget as HTMLDivElement).style.borderColor = BORDER;
                                    (e.currentTarget as HTMLDivElement).querySelectorAll("[data-val-title]").forEach((el) => { (el as HTMLElement).style.color = BLACK; });
                                    (e.currentTarget as HTMLDivElement).querySelectorAll("[data-val-desc]").forEach((el) => { (el as HTMLElement).style.color = GRAY; });
                                }}
                            >
                                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                                <div data-val-title style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 20, color: BLACK, marginBottom: 12, transition: "color 0.3s" }}>{v.title}</div>
                                <p data-val-desc style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.75, margin: 0, transition: "color 0.3s" }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BroodFooter openService={() => { }} />
        </div>
    );
}
