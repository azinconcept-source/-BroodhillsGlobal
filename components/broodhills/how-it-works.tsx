"use client";

import { useEffect, useState } from "react";
import { BLACK, DARK, GOLD, GOLD_DARK, GRAY, WHITE, BORDER, LIGHTGRAY } from "./constants";
import { Nav } from "./nav";
import { BroodFooter } from "./footer";

const LIME = "#C8DC0A";
const OLIVE = "#6B8C14";

const phases = [
    {
        phase: "01",
        title: "Onboarding & KYC",
        subtitle: "Identity, Compliance & Credentialing",
        color: LIME,
        steps: [
            { icon: "📋", label: "Submit KYC Documents", desc: "Provide corporate registration, beneficial ownership declarations, and regulatory licenses." },
            { icon: "🔍", label: "Compliance Screening", desc: "Our compliance team verifies all entities against global watchlists, PEP databases, and AML/CFT standards." },
            { icon: "✅", label: "Account Activation", desc: "Upon successful screening, your institutional account is activated with tiered access based on trade volume." },
        ],
    },
    {
        phase: "02",
        title: "Deal Origination",
        subtitle: "Structuring the Trade Framework",
        color: "#59C1FF",
        steps: [
            { icon: "📊", label: "Trade Mandate Submission", desc: "Submit your commodity trade mandate — specifying instrument type, volume, price corridor, and delivery conditions." },
            { icon: "🏗️", label: "Deal Structuring Session", desc: "Our structuring team designs the legal architecture, payment rails, and risk allocation framework for the transaction." },
            { icon: "📝", label: "Term Sheet Execution", desc: "A formal term sheet is drafted, reviewed by all parties, and executed under governed legal jurisdictions." },
        ],
    },
    {
        phase: "03",
        title: "Instrument Management",
        subtitle: "Activating the Financial Instruments",
        color: "#FF9F45",
        steps: [
            { icon: "🏦", label: "Instrument Issuance", desc: "Bank instruments — SBLC, BG, LC, DLC — are issued, authenticated, and registered in our managed instrument registry." },
            { icon: "🔗", label: "Counterparty Verification", desc: "Both sides of the transaction confirm instrument authenticity via bank-to-bank SWIFT communication." },
            { icon: "📁", label: "Document Custody", desc: "All instruments and supporting documentation are held in secure digital escrow, accessible to authorized parties only." },
        ],
    },
    {
        phase: "04",
        title: "Trade Operations",
        subtitle: "Execution, Logistics & Settlement",
        color: "#B47FFF",
        steps: [
            { icon: "🚢", label: "Logistics Coordination", desc: "Physical shipment is arranged with certified inspection agencies. Certificates of quality and quantity are verified pre-loading." },
            { icon: "💱", label: "Payment Execution", desc: "Funds are released per agreed payment triggers. Multi-escrow arrangements protect both buyers and sellers throughout transit." },
            { icon: "🏁", label: "Settlement & Close", desc: "Upon delivery confirmation, all instruments are settled, trade accounts are reconciled, and post-trade reports are issued." },
        ],
    },
];

const faqs = [
    { q: "What commodities does BroodHUB support?", a: "We facilitate trade in crude oil, refined petroleum products, LNG, coal, and in select cases, critical minerals and agricultural energy feedstocks." },
    { q: "What is the minimum transaction size?", a: "Our minimum deal size is $5 million USD for institutional clients. Structured programs starting at $50M are available for bulk facilitation." },
    { q: "How long does a typical deal take?", a: "From KYC approval to term sheet execution typically takes 5–10 business days. Full transaction closure including settlement ranges 30–90 days depending on complexity." },
    { q: "Are your instruments MT-coded and SWIFT-authenticated?", a: "Yes. All bank instruments managed through BroodHUB are SWIFT MT760/799 compliant, with authentication conducted bank-to-bank." },
    { q: "Do you work with first-time exporters?", a: "We work with any serious verified entity. However, first-time exporters go through an extended due diligence period and are paired with an advisory specialist." },
];

export default function HowItWorksPage() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap";
        document.head.appendChild(link);
    }, []);

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div style={{ fontFamily: "DM Sans, sans-serif", background: WHITE }}>
            <Nav onEnter={() => alert("Platform access: complete KYC onboarding to proceed.")} onOpenServices={() => { }} />
            <div style={{ height: 68 }} />

            {/* Hero */}
            <section style={{ background: DARK, padding: "100px 6% 80px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(ellipse at 70% 50%, rgba(200,220,10,0.08) 0%, transparent 60%)`, pointerEvents: "none" }} />
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,220,10,0.12)", border: "1px solid rgba(200,220,10,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: LIME }} />
                        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: LIME, letterSpacing: 1.5, textTransform: "uppercase" }}>Process Overview</span>
                    </div>
                    <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: "clamp(40px, 5vw, 68px)", color: WHITE, lineHeight: 1.05, margin: "0 0 24px", maxWidth: 760 }}>
                        From Mandate to <span style={{ color: LIME }}>Settlement</span> — End-to-End
                    </h1>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 17, color: "#aaa", lineHeight: 1.8, maxWidth: 620, margin: 0 }}>
                        BroodHUB operates a four-phase trade lifecycle. Every step is governed by institutional compliance protocols, ensuring complete protection for all counterparties from origination through final settlement.
                    </p>
                </div>
            </section>

            {/* Process Phases */}
            <section style={{ padding: "96px 6%", background: WHITE }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    {phases.map((phase, pi) => (
                        <div key={pi} style={{ marginBottom: 80 }}>
                            {/* Phase Header */}
                            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
                                <div style={{ width: 64, height: 64, borderRadius: 14, background: phase.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <span style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 20, color: BLACK }}>{phase.phase}</span>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: phase.color, marginBottom: 4 }}>{phase.subtitle}</div>
                                    <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 30, color: BLACK, margin: 0 }}>{phase.title}</h2>
                                </div>
                            </div>
                            {/* Steps */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, paddingLeft: 84 }}>
                                {phase.steps.map((step, si) => (
                                    <div key={si} style={{ position: "relative" }}>
                                        {si < phase.steps.length - 1 && (
                                            <div style={{ position: "absolute", top: 24, left: "calc(100% - 12px)", width: "24px", height: 2, background: `${phase.color}44`, zIndex: 0 }} />
                                        )}
                                        <div style={{ background: LIGHTGRAY, borderRadius: 12, padding: "28px 24px", border: `1px solid ${BORDER}`, height: "100%", position: "relative", zIndex: 1 }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                                                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${phase.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <span style={{ fontSize: 20 }}>{step.icon}</span>
                                                </div>
                                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, color: GRAY, letterSpacing: 0.5 }}>Step {si + 1}</div>
                                            </div>
                                            <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 17, color: BLACK, marginBottom: 10 }}>{step.label}</div>
                                            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13.5, color: GRAY, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline Bar */}
            <section style={{ padding: "64px 6%", background: DARK }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 28, color: WHITE, textAlign: "center", marginBottom: 48 }}>Typical Transaction Timeline</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
                        <div style={{ position: "absolute", top: 24, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(to right, #C8DC0A, #59C1FF, #FF9F45, #B47FFF)", opacity: 0.5 }} />
                        {[
                            { label: "KYC & Onboarding", time: "Days 1–10", color: LIME },
                            { label: "Deal Origination", time: "Days 5–15", color: "#59C1FF" },
                            { label: "Instrument Management", time: "Days 10–30", color: "#FF9F45" },
                            { label: "Trade Operations & Settlement", time: "Days 30–90", color: "#B47FFF" },
                        ].map((t, i) => (
                            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                                <div style={{ width: 48, height: 48, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                                    <span style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 14, color: BLACK }}>0{i + 1}</span>
                                </div>
                                <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 14, color: WHITE, textAlign: "center" }}>{t.label}</div>
                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#777", textAlign: "center" }}>{t.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "96px 6%", background: LIGHTGRAY }}>
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <div style={{ display: "inline-block", background: LIME, color: BLACK, fontFamily: "DM Sans, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", padding: "5px 14px", borderRadius: 4, marginBottom: 18 }}>FAQs</div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 42px)", color: BLACK, margin: 0 }}>Common Questions</h2>
                    </div>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ background: WHITE, borderRadius: 12, marginBottom: 12, border: `1px solid ${openFaq === i ? LIME : BORDER}`, overflow: "hidden", transition: "border 0.2s" }}>
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                style={{ width: "100%", background: "none", border: "none", padding: "22px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}
                            >
                                <span style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 17, color: BLACK }}>{faq.q}</span>
                                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 20, color: openFaq === i ? OLIVE : GRAY, transition: "transform 0.3s, color 0.2s", display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                            </button>
                            {openFaq === i && (
                                <div style={{ padding: "0 24px 22px" }}>
                                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14.5, color: GRAY, lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "80px 6%", background: DARK, textAlign: "center" }}>
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: "clamp(30px, 4vw, 48px)", color: WHITE, margin: "0 0 16px" }}>
                        Ready to Begin Your Trade Journey?
                    </h2>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: "#aaa", margin: "0 0 36px", lineHeight: 1.7 }}>
                        Speak with one of our trade structuring specialists to assess your mandate and begin onboarding.
                    </p>
                    <button
                        onClick={() => alert("Platform access: complete KYC onboarding to proceed.")}
                        style={{ background: LIME, color: BLACK, border: "none", borderRadius: 8, padding: "14px 36px", fontFamily: "DM Sans, sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
                        onMouseEnter={e => (e.currentTarget.style.background = OLIVE)}
                        onMouseLeave={e => (e.currentTarget.style.background = LIME)}
                    >
                        Start Your Application
                    </button>
                </div>
            </section>

            <BroodFooter openService={() => { }} />
        </div>
    );
}
