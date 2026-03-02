"use client";

import { useEffect, useState } from "react";
import { BLACK, DARK, GOLD, GRAY, WHITE, BORDER, LIGHTGRAY } from "./constants";
import { Nav } from "./nav";
import { BroodFooter } from "./footer";

const LIME = "#C8DC0A";
const OLIVE = "#6B8C14";

const leadership = [
    {
        name: "Adewale Ogundimu",
        title: "Founder & Chief Executive Officer",
        bio: "With over 22 years of experience in structured commodity finance, Adewale has designed and closed over $4B in energy trade transactions across 14 African markets. He previously served as Head of Trade Finance at a leading pan-African investment bank and holds an MBA from Wharton School of Business.",
        expertise: ["Strategic Leadership", "Deal Architecture", "Regulatory Policy"],
        initials: "AO",
        color: LIME,
        linkedin: "#",
    },
    {
        name: "Ngozi Ekwueme",
        title: "Chief Compliance & Risk Officer",
        bio: "Ngozi is a certified AML/CFT specialist with 18 years in financial crime prevention and institutional compliance. Her previous roles include Senior Risk Analyst at Citibank Nigeria and Compliance Director at the African Export-Import Bank (Afreximbank).",
        expertise: ["AML/CFT", "Risk Management", "Regulatory Frameworks"],
        initials: "NE",
        color: "#59C1FF",
        linkedin: "#",
    },
    {
        name: "Emeka Obi-Santos",
        title: "Chief Operations Officer",
        bio: "Emeka oversees all trade execution operations, logistics partnerships, and platform delivery. With a background in maritime trade and commodity logistics spanning 15 years, he brings unmatched operational depth to BroodHUB's transaction lifecycle.",
        expertise: ["Trade Execution", "Commodities Logistics", "Operations Management"],
        initials: "EO",
        color: "#FF9F45",
        linkedin: "#",
    },
    {
        name: "Dr. Fatimah Al-Rashid",
        title: "Head of Instrument Management",
        bio: "Dr. Al-Rashid specializes in bank instrument architecture — SBLCs, BGs, LCs, and DLCs. She holds a PhD in International Finance from LSE and has 14 years of experience advising sovereign wealth funds and institutional asset managers on instrument-backed trade finance.",
        expertise: ["SBLC/BG/LC Structures", "SWIFT Authentication", "Instrument Law"],
        initials: "FA",
        color: "#B47FFF",
        linkedin: "#",
    },
];

const advisors = [
    { name: "Prof. Chukwuemeka Eze", title: "Senior Legal Advisor", firm: "Eze & Partners LP", initials: "CE" },
    { name: "Ambassador (ret.) Sylvia Boateng", title: "Policy & Regulatory Advisor", firm: "ECOWAS Trade Council", initials: "SB" },
    { name: "Marcus Holst", title: "Technology Infrastructure Advisor", firm: "FutureRails GmbH", initials: "MH" },
    { name: "Aisha Diallo-Touré", title: "West Africa Partnerships Director", firm: "BroodHUB Advisory Board", initials: "AD" },
    { name: "Robert Pemberton III", title: "Capital Markets Advisor", firm: "Standard Chartered Private", initials: "RP" },
    { name: "Dr. Yemi Adaobi", title: "Energy Sector Economist", firm: "OPEC Fund Advisory", initials: "YA" },
];

const departments = [
    { name: "Deal Structuring", headcount: 12, icon: "🏗️" },
    { name: "Compliance & KYC", headcount: 8, icon: "⚖️" },
    { name: "Trade Operations", headcount: 15, icon: "🚢" },
    { name: "Instrument Management", headcount: 7, icon: "🏦" },
    { name: "Technology Platform", headcount: 11, icon: "💻" },
    { name: "Client Advisory", headcount: 9, icon: "🤝" },
];

export default function OurTeamPage() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap";
        document.head.appendChild(link);
    }, []);

    const [activeProfile, setActiveProfile] = useState<number | null>(null);

    return (
        <div style={{ fontFamily: "DM Sans, sans-serif", background: WHITE }}>
            <Nav onEnter={() => alert("Platform access: complete KYC onboarding to proceed.")} onOpenServices={() => { }} />
            <div style={{ height: 68 }} />

            {/* Hero */}
            <section style={{ background: DARK, padding: "100px 6% 80px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse at 30% 70%, rgba(200,220,10,0.07) 0%, transparent 60%)`, pointerEvents: "none" }} />
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,220,10,0.12)", border: "1px solid rgba(200,220,10,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: LIME }} />
                        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: LIME, letterSpacing: 1.5, textTransform: "uppercase" }}>Leadership</span>
                    </div>
                    <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: "clamp(40px, 5vw, 68px)", color: WHITE, lineHeight: 1.05, margin: "0 0 24px", maxWidth: 760 }}>
                        The People Behind <span style={{ color: LIME }}>Africa's Trade Engine</span>
                    </h1>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "#aaa", lineHeight: 1.8, maxWidth: 620, margin: 0 }}>
                        Our team is assembled from the continent's most experienced trade finance professionals, compliance experts, and commodity market specialists — united by a shared commitment to building Africa's most trusted energy marketplace.
                    </p>
                </div>
            </section>

            {/* Department Overview */}
            <section style={{ padding: "64px 6%", background: LIGHTGRAY, borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
                        {departments.map((d, i) => (
                            <div key={i} style={{ background: WHITE, borderRadius: 12, padding: "20px 16px", textAlign: "center", border: `1px solid ${BORDER}` }}>
                                <div style={{ fontSize: 28, marginBottom: 10 }}>{d.icon}</div>
                                <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 24, color: BLACK, marginBottom: 4 }}>{d.headcount}</div>
                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: GRAY, lineHeight: 1.4 }}>{d.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section style={{ padding: "96px 6%", background: WHITE }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ marginBottom: 60 }}>
                        <div style={{ display: "inline-block", background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 18 }}>C-Suite</div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 46px)", color: BLACK, lineHeight: 1.15, margin: 0 }}>Executive Leadership</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
                        {leadership.map((member, i) => (
                            <div key={i}
                                style={{ background: LIGHTGRAY, borderRadius: 16, overflow: "hidden", border: `1px solid ${activeProfile === i ? member.color : BORDER}`, transition: "all 0.3s", cursor: "pointer" }}
                                onClick={() => setActiveProfile(activeProfile === i ? null : i)}
                            >
                                {/* Card Top */}
                                <div style={{ background: DARK, padding: "32px 28px", display: "flex", alignItems: "center", gap: 20 }}>
                                    <div style={{ width: 72, height: 72, borderRadius: "50%", background: member.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <span style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 24, color: BLACK }}>{member.initials}</span>
                                    </div>
                                    <div>
                                        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 20, color: WHITE, marginBottom: 4 }}>{member.name}</div>
                                        <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: member.color }}>{member.title}</div>
                                    </div>
                                </div>
                                {/* Card Body */}
                                <div style={{ padding: "24px 28px" }}>
                                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.75, margin: "0 0 20px" }}>{member.bio}</p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                        {member.expertise.map((tag, ti) => (
                                            <span key={ti} style={{ background: `${member.color}18`, border: `1px solid ${member.color}40`, color: OLIVE, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Board */}
            <section style={{ padding: "96px 6%", background: DARK }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ marginBottom: 56 }}>
                        <div style={{ display: "inline-block", background: "rgba(200,220,10,0.15)", border: "1px solid rgba(200,220,10,0.3)", color: LIME, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 18 }}>External Advisors</div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 46px)", color: WHITE, lineHeight: 1.15, margin: 0 }}>Advisory Board</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                        {advisors.map((a, i) => (
                            <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "24px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 16, transition: "background 0.2s", cursor: "default" }}
                                onMouseEnter={e => (e.currentTarget.style.background = "rgba(200,220,10,0.06)")}
                                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                            >
                                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(200,220,10,0.15)", border: "1px solid rgba(200,220,10,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <span style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 14, color: LIME }}>{a.initials}</span>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 16, color: WHITE, marginBottom: 3 }}>{a.name}</div>
                                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#aaa", marginBottom: 2 }}>{a.title}</div>
                                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: LIME, opacity: 0.7 }}>{a.firm}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "80px 6%", background: LIGHTGRAY, textAlign: "center" }}>
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 44px)", color: BLACK, margin: "0 0 16px" }}>
                        Join Our Growing Team
                    </h2>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: GRAY, margin: "0 0 32px", lineHeight: 1.7 }}>
                        We're always looking for experienced trade finance professionals, compliance specialists, and technology engineers who share our vision for African economic transformation.
                    </p>
                    <button
                        onClick={() => alert("Careers portal opening soon.")}
                        style={{ background: BLACK, color: LIME, border: "none", borderRadius: 8, padding: "14px 36px", fontFamily: "DM Sans, sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}
                        onMouseEnter={e => { e.currentTarget.style.background = DARK; e.currentTarget.style.color = WHITE; }}
                        onMouseLeave={e => { e.currentTarget.style.background = BLACK; e.currentTarget.style.color = LIME; }}
                    >
                        View Open Roles
                    </button>
                </div>
            </section>

            <BroodFooter openService={() => { }} />
        </div>
    );
}
