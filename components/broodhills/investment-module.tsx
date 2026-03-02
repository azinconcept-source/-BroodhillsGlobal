"use client";

import { useEffect, useState } from "react";
import { BLACK, DARK, GRAY, WHITE, BORDER, LIGHTGRAY } from "./constants";
import { Nav } from "./nav";
import { BroodFooter } from "./footer";

const LIME = "#C8DC0A";
const OLIVE = "#6B8C14";

const tiers = [
    {
        id: "seed",
        name: "Seed Capital",
        subtitle: "Entry-Level Participation",
        min: "$100K",
        max: "$999K",
        color: "#aaa",
        features: [
            "Access to diversified commodity trade pools",
            "Monthly performance reports",
            "Standard compliance onboarding",
            "Email support (48hr response)",
            "Quarterly investor webinars",
        ],
        highlight: false,
    },
    {
        id: "institutional",
        name: "Institutional",
        subtitle: "Most Popular",
        min: "$1M",
        max: "$9.9M",
        color: LIME,
        features: [
            "Dedicated deal allocation across 3+ mandates",
            "Real-time BroodHUB dashboard access",
            "Priority KYC & onboarding (72hr completion)",
            "Bi-weekly performance reports & analytics",
            "Direct line to trade structuring team",
            "Instrument-backed trade participation eligible",
            "Quarterly in-person review meetings",
        ],
        highlight: true,
    },
    {
        id: "sovereign",
        name: "Sovereign",
        subtitle: "Maximum Access",
        min: "$10M",
        max: "Unlimited",
        color: "#B47FFF",
        features: [
            "Exclusive single-mandate deal allocation",
            "Bespoke deal structuring & risk management",
            "24/7 dedicated relationship manager",
            "White-glove compliance & legal support",
            "Co-investment access with institutional banking partners",
            "First-look on all premium deal flow",
            "Board-level reporting & ESG disclosures",
            "Custom instrument management programs",
        ],
        highlight: false,
    },
];

const assetClasses = [
    { name: "Crude Oil & Petroleum Products", allocation: "35%", icon: "🛢️", desc: "West African and Gulf crude blends, refined products, and long-term offtake agreements." },
    { name: "Natural Gas & LNG", allocation: "20%", icon: "💨", desc: "Spot and term liquefied natural gas trade finance with certified downstream delivery." },
    { name: "Bank-Instrument Backed Trade Finance", allocation: "25%", icon: "🏦", desc: "SBLC-backed commodity transactions with bilateral bank verification and escrow settlement." },
    { name: "Coal & Energy Feedstocks", allocation: "10%", icon: "⚫", desc: "Thermal and coking coal trade across East and Southern African corridors." },
    { name: "Energy Infrastructure Debt", allocation: "10%", icon: "🏗️", desc: "Short-duration project finance facilities for critical energy infrastructure in frontier markets." },
];

const steps = [
    { num: "01", title: "Submit Expression of Interest", desc: "Complete our secure investor intake form. Provide basic entity details, source of funds declaration, and investment objectives." },
    { num: "02", title: "KYC & Accreditation Review", desc: "Our compliance team conducts a thorough accredited investor verification, AML/CFT screening, and beneficial ownership confirmation." },
    { num: "03", title: "Investor Profiling Session", desc: "A one-on-one session with your dedicated BroodHUB relationship manager to assess risk tolerance, mandate preference, and allocation strategy." },
    { num: "04", title: "Investment Agreement Execution", desc: "Review and execute the Investment Participation Agreement — a legally-governed document specifying terms, return structure, and exit conditions." },
    { num: "05", title: "Capital Deployment & Deal Allocation", desc: "Your capital is deployed into matched trade mandates. You receive real-time visibility via the BroodHUB Investor Dashboard." },
    { num: "06", title: "Reporting & Returns", desc: "Receive regular performance reports, settlement confirmations, and return distributions per the agreed payment schedule." },
];

const metrics = [
    { label: "Total Capital Under Management", value: "$1.2B" },
    { label: "Average Annualized Return", value: "14–22%" },
    { label: "Investor Count (Active)", value: "340+" },
    { label: "Deals Funded in 2024", value: "178" },
    { label: "Settlement Success Rate", value: "99.3%" },
    { label: "Average Deal Duration", value: "45 Days" },
];

export default function InvestmentModulePage() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap";
        document.head.appendChild(link);
    }, []);

    const [activeAlloc, setActiveAlloc] = useState(0);

    return (
        <div style={{ fontFamily: "DM Sans, sans-serif", background: WHITE }}>
            <Nav onEnter={() => alert("Platform access: complete KYC onboarding to proceed.")} onOpenServices={() => { }} />
            <div style={{ height: 68 }} />

            {/* Hero */}
            <section style={{ background: DARK, padding: "100px 6% 80px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse at 80% 20%, rgba(200,220,10,0.09) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(180,127,255,0.06) 0%, transparent 50%)`, pointerEvents: "none" }} />
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,220,10,0.12)", border: "1px solid rgba(200,220,10,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: LIME }} />
                        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: LIME, letterSpacing: 1.5, textTransform: "uppercase" }}>Investment Module</span>
                    </div>
                    <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: "clamp(40px, 5vw, 68px)", color: WHITE, lineHeight: 1.05, margin: "0 0 24px", maxWidth: 800 }}>
                        Invest in <span style={{ color: LIME }}>Africa's Energy Trade</span> with Institutional Confidence
                    </h1>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "#aaa", lineHeight: 1.8, maxWidth: 640, margin: "0 0 40px" }}>
                        The BroodHUB Investment Module provides accredited investors with structured access to high-yield commodity trade finance opportunities across West, East, and Southern Africa — backed by bank instruments, verified counterparties, and institutional compliance.
                    </p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        <button
                            onClick={() => alert("Platform access: complete KYC onboarding to proceed.")}
                            style={{ background: LIME, color: BLACK, border: "none", borderRadius: 8, padding: "14px 32px", fontFamily: "DM Sans, sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
                            onMouseEnter={e => (e.currentTarget.style.background = OLIVE)}
                            onMouseLeave={e => (e.currentTarget.style.background = LIME)}
                        >
                            Apply to Invest
                        </button>
                        <button
                            onClick={() => alert("Investor Deck download will be available soon.")}
                            style={{ background: "transparent", color: WHITE, border: "1px solid rgba(255,255,255,0.25)", borderRadius: 8, padding: "14px 32px", fontFamily: "DM Sans, sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer" }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = LIME)}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
                        >
                            Download Investor Deck
                        </button>
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section style={{ padding: "56px 6%", background: LIME }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0 }}>
                    {metrics.map((m, i) => (
                        <div key={i} style={{ padding: "0 20px", borderRight: i < metrics.length - 1 ? "1px solid rgba(0,0,0,0.15)" : "none", textAlign: "center" }}>
                            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 28, color: BLACK, lineHeight: 1, marginBottom: 6 }}>{m.value}</div>
                            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: OLIVE, lineHeight: 1.4 }}>{m.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Asset Classes */}
            <section style={{ padding: "96px 6%", background: WHITE }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                        <div>
                            <div style={{ display: "inline-block", background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 18 }}>Portfolio</div>
                            <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 44px)", color: BLACK, lineHeight: 1.15, margin: "0 0 32px" }}>Asset Classes & Allocation</h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {assetClasses.map((a, i) => (
                                    <div key={i}
                                        onClick={() => setActiveAlloc(i)}
                                        style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: 12, cursor: "pointer", background: activeAlloc === i ? DARK : LIGHTGRAY, border: `1px solid ${activeAlloc === i ? LIME : BORDER}`, transition: "all 0.2s" }}
                                    >
                                        <span style={{ fontSize: 24 }}>{a.icon}</span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 15, color: activeAlloc === i ? WHITE : BLACK }}>{a.name}</div>
                                            {activeAlloc === i && <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12.5, color: "#aaa", margin: "6px 0 0", lineHeight: 1.6 }}>{a.desc}</p>}
                                        </div>
                                        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 20, color: LIME, flexShrink: 0 }}>{a.allocation}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Visual Allocation Chart */}
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ position: "relative", width: 280, height: 280 }}>
                                <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                                    {(() => {
                                        const data = [35, 20, 25, 10, 10];
                                        const colors = [LIME, "#59C1FF", "#FF9F45", "#555", "#B47FFF"];
                                        let offset = 0;
                                        return data.map((d, i) => {
                                            const circle = 2 * Math.PI * 40;
                                            const dashArray = (d / 100) * circle;
                                            const el = (
                                                <circle key={i} cx="50" cy="50" r="40"
                                                    fill="none"
                                                    stroke={colors[i]}
                                                    strokeWidth={i === activeAlloc ? "14" : "10"}
                                                    strokeDasharray={`${dashArray} ${circle - dashArray}`}
                                                    strokeDashoffset={-offset * circle / 100}
                                                    style={{ transition: "stroke-width 0.3s" }}
                                                />
                                            );
                                            offset += d;
                                            return el;
                                        });
                                    })()}
                                </svg>
                                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 36, color: BLACK, lineHeight: 1 }}>{assetClasses[activeAlloc].allocation}</div>
                                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: GRAY, textAlign: "center", maxWidth: 80, lineHeight: 1.4, marginTop: 6 }}>{assetClasses[activeAlloc].name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Tiers */}
            <section style={{ padding: "96px 6%", background: LIGHTGRAY }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <div style={{ display: "inline-block", background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 18 }}>Participation Tiers</div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 46px)", color: BLACK, margin: 0 }}>Choose Your Investment Level</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {tiers.map((tier, i) => (
                            <div key={i} style={{
                                background: tier.highlight ? DARK : WHITE,
                                borderRadius: 16, padding: "36px 28px",
                                border: `2px solid ${tier.highlight ? LIME : BORDER}`,
                                position: "relative", overflow: "hidden",
                            }}>
                                {tier.highlight && (
                                    <div style={{ position: "absolute", top: 16, right: 16, background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", padding: "4px 10px", borderRadius: 100 }}>Most Popular</div>
                                )}
                                <div style={{ marginBottom: 24 }}>
                                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: tier.color, marginBottom: 8 }}>{tier.subtitle}</div>
                                    <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 26, color: tier.highlight ? WHITE : BLACK, marginBottom: 4 }}>{tier.name}</div>
                                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: tier.highlight ? "#aaa" : GRAY }}>
                                        {tier.min} – {tier.max}
                                    </div>
                                </div>
                                <div style={{ height: 1, background: tier.highlight ? "rgba(255,255,255,0.1)" : BORDER, marginBottom: 24 }} />
                                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                                    {tier.features.map((f, fi) => (
                                        <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                                            <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${tier.color}25`, border: `1px solid ${tier.color}60`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                                                <span style={{ fontSize: 10, color: OLIVE }}>✓</span>
                                            </div>
                                            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13.5, color: tier.highlight ? "#ccc" : GRAY, lineHeight: 1.5 }}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => alert("Platform access: complete KYC onboarding to proceed.")}
                                    style={{
                                        width: "100%", background: tier.highlight ? LIME : "transparent",
                                        color: tier.highlight ? BLACK : BLACK,
                                        border: tier.highlight ? "none" : `2px solid ${BORDER}`,
                                        borderRadius: 8, padding: "13px 0",
                                        fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = tier.highlight ? OLIVE : DARK; e.currentTarget.style.color = tier.highlight ? BLACK : WHITE; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = tier.highlight ? LIME : "transparent"; e.currentTarget.style.color = BLACK; }}
                                >
                                    Apply for {tier.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Invest */}
            <section style={{ padding: "96px 6%", background: WHITE }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <div style={{ display: "inline-block", background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 18 }}>Getting Started</div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 46px)", color: BLACK, margin: 0 }}>How to Become an Investor</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {steps.map((step, i) => (
                            <div key={i} style={{ position: "relative" }}>
                                {i < steps.length - 1 && i !== 2 && (
                                    <div style={{ position: "absolute", top: 28, left: "calc(100% - 12px)", width: 24, height: 2, background: `${LIME}50`, zIndex: 0 }} />
                                )}
                                <div style={{ background: LIGHTGRAY, borderRadius: 14, padding: "28px 24px", border: `1px solid ${BORDER}`, height: "100%" }}>
                                    <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 40, color: `${LIME}40`, lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                                    <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 18, color: BLACK, marginBottom: 12 }}>{step.title}</div>
                                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13.5, color: GRAY, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section style={{ padding: "40px 6%", background: LIGHTGRAY }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#999", lineHeight: 1.7, margin: 0, textAlign: "center" }}>
                        <strong style={{ color: "#aaa" }}>Investment Disclaimer:</strong> All investment activities on BroodHUB are subject to accredited investor verification, applicable securities laws, and AML/CFT compliance requirements. Past performance metrics cited are indicative only and do not constitute a guarantee of future returns. Investment in commodity trade finance carries inherent market, credit, and geopolitical risks. Brood Hills Global Limited is not a licensed investment advisor. Please consult qualified legal and financial counsel before participating.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "80px 6%", background: DARK, textAlign: "center" }}>
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: "clamp(30px, 4vw, 48px)", color: WHITE, margin: "0 0 16px" }}>
                        Ready to Put Your Capital to Work?
                    </h2>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: "#aaa", margin: "0 0 36px", lineHeight: 1.7 }}>
                        Join 340+ accredited investors participating in Africa's most structured energy trade marketplace.
                    </p>
                    <button
                        onClick={() => alert("Platform access: complete KYC onboarding to proceed.")}
                        style={{ background: LIME, color: BLACK, border: "none", borderRadius: 8, padding: "15px 40px", fontFamily: "DM Sans, sans-serif", fontSize: 16, fontWeight: 700, cursor: "pointer" }}
                        onMouseEnter={e => (e.currentTarget.style.background = OLIVE)}
                        onMouseLeave={e => (e.currentTarget.style.background = LIME)}
                    >
                        Begin Your Application
                    </button>
                </div>
            </section>

            <BroodFooter openService={() => { }} />
        </div>
    );
}
