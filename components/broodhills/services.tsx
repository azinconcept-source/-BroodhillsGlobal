"use client";

import { useState } from "react";
import { BLACK, BORDER, GOLD, GOLD_DARK, GRAY, LIME_BRIGHT, WHITE } from "./constants";

function ServiceCard({ service, index }: { service: { title: string; body: string }; index: number }) {
    const [hov, setHov] = useState(false);

    const svgs = [
        <svg key="a" viewBox="0 0 340 220" style={{ width: "100%", height: "100%", position: "absolute" }}>
            <rect width="340" height="220" fill="#1a1200" />
            <ellipse cx="170" cy="120" rx="140" ry="60" fill="#C8DC0A" opacity="0.07" />
            <rect x="20" y="155" width="300" height="20" rx="3" fill="#2a2000" />
            <rect x="50" y="130" width="240" height="25" fill="#1e1800" />
            {[60, 110, 160, 210].map((x, i) => <rect key={i} x={x} y={105} width={38} height={28} rx="2" fill={i % 2 === 0 ? "#2a2200" : "#251e00"} />)}
            <line x1="280" x2="280" y1="105" y2="40" stroke="#C8DC0A" strokeWidth="3" opacity="0.5" />
            <line x1="280" x2="320" y1="40" y2="40" stroke="#C8DC0A" strokeWidth="2" opacity="0.4" />
            <line x1="320" x2="320" y1="40" y2="110" stroke="#C8DC0A" strokeWidth="1.5" opacity="0.3" strokeDasharray="4" />
            <rect x="12" y="12" width="60" height="22" rx="5" fill="#C8DC0A" opacity="0.9" />
            <text x="20" y="27" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#000">BH Structured</text>
        </svg>,
        <svg key="b" viewBox="0 0 340 220" style={{ width: "100%", height: "100%", position: "absolute" }}>
            <rect width="340" height="220" fill="#0a1520" />
            {[80, 170, 260].map((x, i) => <rect key={i} x={x} y={80} width={10} height={100} fill="#1e3a5a" />)}
            <rect x="50" y="75" width="240" height="20" rx="3" fill="#1a3050" />
            <rect x="80" y="45" width="180" height="30" rx="3" fill="#152840" />
            <polygon points="160,10 180,10 200,75 140,75" fill="#1a3a5a" opacity="0.8" />
            <line x1="170" x2="170" y1="10" y2="75" stroke="#C8DC0A" strokeWidth="1.5" opacity="0.4" />
            <rect x="0" y="175" width="340" height="45" fill="#0a1830" />
            <rect x="12" y="12" width="60" height="22" rx="5" fill="#1e3a5a" opacity="0.9" />
            <text x="18" y="27" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#60a5fa">BH Instruments</text>
        </svg>,
        <svg key="c" viewBox="0 0 340 220" style={{ width: "100%", height: "100%", position: "absolute" }}>
            <rect width="340" height="220" fill="#18081a" />
            <rect x="0" y="175" width="340" height="45" fill="#100812" />
            {[40, 120, 200, 270].map((x, i) => (
                <g key={i}>
                    <ellipse cx={x + 20} cy={145} rx={i === 2 ? 30 : 20} ry={8} fill="#2a0a2a" />
                    <rect x={x} y={145} width={i === 2 ? 60 : 40} height={30} fill="#220822" />
                    <ellipse cx={x + 20} cy={175} rx={i === 2 ? 30 : 20} ry={8} fill="#1a0618" />
                </g>
            ))}
            {[100, 240].map((x, i) => (
                <g key={i}>
                    <rect x={x} y={80} width={5} height={65} fill="#2a0a2a" />
                    <ellipse cx={x + 2} cy={78} rx={7} ry={10} fill="#C8DC0A" opacity="0.8" />
                    <ellipse cx={x + 2} cy={72} rx={4} ry={7} fill="#AECF3A" opacity="0.5" />
                </g>
            ))}
            <rect x="12" y="12" width="60" height="22" rx="5" fill="#2a0a2a" opacity="0.9" />
            <text x="18" y="27" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#c084fc">BH Operations</text>
        </svg>,
    ];

    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                borderRadius: 14, overflow: "hidden",
                boxShadow: hov ? "0 16px 48px rgba(0,0,0,0.14)" : "0 4px 20px rgba(0,0,0,0.07)",
                transform: hov ? "translateY(-4px)" : "none",
                transition: "all 0.3s",
                border: `1px solid ${hov ? LIME_BRIGHT + "60" : BORDER}`,
                background: WHITE,
            }}>
            <div style={{ position: "relative", height: 180, overflow: "hidden" }}>{svgs[index]}</div>
            <div style={{ padding: "20px 22px 24px" }}>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 18, fontWeight: 700, color: BLACK, margin: "0 0 10px" }}>{service.title}</h3>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: GRAY, lineHeight: 1.7, margin: "0 0 14px" }}>{service.body}</p>
                <a href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: GOLD_DARK, fontWeight: 600, textDecoration: "none" }}>Learn More →</a>
            </div>
        </div>
    );
}

export function ServicesSection() {
    const services = [
        { title: "Deal Structuring", body: "Our team of experts performs comprehensive deal structuring — from SPA drafting through NCNDA/IMFPA execution — identifying and maximising viable trade opportunities." },
        { title: "Instrument Management", body: "From instrument issuance to confirmation, we coordinate SBLC, LC, and DLC workflows between issuing banks and beneficiaries to accelerate deal progression." },
        { title: "Trade Operations", body: "Our operational arm manages logistics milestones — vessel assignment, cargo inspection, loading confirmation — through to settlement and investor distribution." },
    ];

    return (
        <section style={{ padding: "80px 6%", background: WHITE }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 52 }}>
                    <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, color: BLACK, margin: "0 0 14px" }}>
                        Elevate Your Trade Operations<br />with Our Tailored Services
                    </h2>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: GRAY }}>
                        Explore our range of specialised solutions designed to optimise every aspect of your crude oil transaction.
                    </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {services.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
                </div>
                <div style={{ textAlign: "center", marginTop: 36 }}>
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#aaa", fontWeight: 600, borderBottom: "1px solid #ccc", paddingBottom: 2, cursor: "not-allowed" }}>
                        View All Services →
                    </span>
                </div>
            </div>
        </section>
    );
}
