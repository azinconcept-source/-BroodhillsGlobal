"use client";

import { useState, useEffect } from "react";
import { BLACK, DARK, GRAY, WHITE, BORDER, LIGHTGRAY } from "./constants";

const LIME = "#C8DC0A";
const OLIVE = "#6B8C14";

const services = [
    {
        id: "deal-structuring",
        label: "Deal Structuring",
        icon: "🏗️",
        color: LIME,
        tagline: "Architecture for Complex Energy Transactions",
        overview: "Our Deal Structuring team designs bespoke transaction frameworks for commodity trade mandates ranging from $5M to $500M+. We handle all the structural complexity so you can focus on trade.",
        keyFeatures: [
            { title: "Term Sheet Drafting", desc: "Legally-reviewed transaction term sheets structured for cross-border enforceability across ECOWAS, EU, and common law jurisdictions." },
            { title: "Risk Allocation Architecture", desc: "Custom risk distribution between buyers, sellers, financiers, and intermediaries — protecting all parties at every stage." },
            { title: "Regulatory Pre-Clearance", desc: "Pre-validation of deal structure against host country regulations, SEC guidelines, and CBN compliance frameworks." },
            { title: "Multi-Party Coordination", desc: "We synchronize legal, financial, and operational teams across time zones to keep deals on track and deadlines met." },
            { title: "Commodity-Specific Structuring", desc: "Tailored deal models for crude oil, refined products, LNG, coal, and commodity blending arrangements." },
            { title: "Dispute Resolution Framework", desc: "Every deal includes a built-in arbitration and dispute resolution pathway governed by agreed international standards." },
        ],
        process: [
            "Mandate Intake & Assessment",
            "Structural Design Workshop",
            "Legal Review & Jurisdiction Selection",
            "Term Sheet Drafting",
            "Counterparty Negotiation Support",
            "Execution & Closing",
        ],
        stats: [{ v: "$2.1B+", l: "Structured in 2024" }, { v: "340+", l: "Deals Completed" }, { v: "96%", l: "Close Rate" }],
    },
    {
        id: "instrument-management",
        label: "Instrument Management",
        icon: "🏦",
        color: "#59C1FF",
        tagline: "Bank Instruments. Managed with Precision.",
        overview: "We provide full-cycle management of financial instruments used in structured trade — from issuance and authentication to activation, monitoring, and settlement. All instruments are SWIFT-compliant and bank-verified.",
        keyFeatures: [
            { title: "Instrument Issuance Support", desc: "We guide clients through issuance of SBLCs, Bank Guarantees, Letters of Credit (LC), and Documentary Letters of Credit (DLC) from tier-1 banking partners." },
            { title: "SWIFT MT760/799 Authentication", desc: "All instruments are authenticated via bank-to-bank SWIFT messaging protocols, ensuring international enforceability and counterparty confidence." },
            { title: "Instrument Registry", desc: "Each instrument is registered in our proprietary BroodHUB Instrument Registry — a tamper-proof audit trail accessible to authorized parties 24/7." },
            { title: "Activation & Cycling Management", desc: "We manage the full lifecycle of revolving instrument programs — scheduling activations, rollovers, and amendments as deal conditions evolve." },
            { title: "Verification Services", desc: "Third-party instrument verification through accredited compliance firms ensures all instruments presented are genuine, unencumbered, and valid." },
            { title: "Instrument Monetization Advisory", desc: "Our advisory team offers structured guidance on legitimate instrument monetization pathways for qualified institutional clients." },
        ],
        process: [
            "Client Requirements Assessment",
            "Bank & Instrument Selection",
            "Issuance Coordination",
            "SWIFT Authentication & Registry Entry",
            "Counterparty Delivery Confirmation",
            "Lifecycle Monitoring & Settlement",
        ],
        stats: [{ v: "$6B+", l: "Instruments Managed" }, { v: "100%", l: "SWIFT Compliance Rate" }, { v: "48hrs", l: "Avg Authentication Time" }],
    },
    {
        id: "trade-operations",
        label: "Trade Operations",
        icon: "🚢",
        color: "#FF9F45",
        tagline: "End-to-End Execution on Every Transaction",
        overview: "Trade Operations is the engine room of BroodHUB. Our ops team manages everything from cargo pre-inspection and shipping logistics to payment escrow coordination and final settlement reconciliation.",
        keyFeatures: [
            { title: "Pre-Shipment Inspection", desc: "Coordination with SGS, Bureau Veritas, and Intertek for independent quality and quantity verification before cargo loading." },
            { title: "Freight & Logistics Coordination", desc: "We partner with certified maritime operators to arrange vessel chartering, loading supervision, and cargo tracking in real time." },
            { title: "Escrow & Payment Management", desc: "Multi-party escrow accounts ensure funds are released only upon verified delivery milestones — protecting both buyers and sellers." },
            { title: "Customs & Port Coordination", desc: "Our in-country teams handle customs documentation, port authority liaisons, and regulatory filing for smooth, delay-free cargo clearance." },
            { title: "Real-Time Trade Dashboard", desc: "Clients access a live trade operations dashboard through BroodHUB — showing shipment status, document status, payment triggers, and alerts." },
            { title: "Post-Trade Reconciliation", desc: "After settlement, our ops team issues a full reconciliation report — covering all costs, payments, adjustments, and net settlement figures." },
        ],
        process: [
            "Trade Mandate Confirmation",
            "Logistics Arrangement & Freight Booking",
            "Pre-Shipment Inspection & Certification",
            "Bill of Lading & Document Set Compilation",
            "Escrow Trigger Verification & Payment Release",
            "Final Delivery Confirmation & Reconciliation",
        ],
        stats: [{ v: "4.2MT", l: "Cargo Facilitated" }, { v: "30+", l: "Port Certifications" }, { v: "99.1%", l: "On-Time Settlement" }],
    },
];

interface ServicesModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTab?: "deal-structuring" | "instrument-management" | "trade-operations";
}

export function ServicesModal({ isOpen, onClose, initialTab = "deal-structuring" }: ServicesModalProps) {
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (initialTab) setActiveTab(initialTab);
    }, [initialTab]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        if (isOpen) {
            window.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const active = services.find(s => s.id === activeTab) || services[0];

    return (
        <div
            style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
            onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
            {/* Backdrop */}
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }} onClick={onClose} />

            {/* Modal */}
            <div style={{ position: "relative", width: "100%", maxWidth: 1000, maxHeight: "90vh", background: WHITE, borderRadius: 20, overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column" }}>

                {/* Modal Header */}
                <div style={{ background: DARK, padding: "0 32px", display: "flex", alignItems: "stretch", gap: 0, flexShrink: 0 }}>
                    <div style={{ paddingTop: 24, paddingBottom: 0, marginRight: "auto" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: LIME }} />
                            <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: LIME, letterSpacing: 1.5, textTransform: "uppercase" }}>Our Services</span>
                        </div>
                        <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 28, color: WHITE, margin: "0 0 24px" }}>What We Offer</h2>
                    </div>
                    <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#666", fontSize: 24, padding: "24px 0 24px 24px", alignSelf: "flex-start", lineHeight: 1, transition: "color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.color = WHITE}
                        onMouseLeave={e => e.currentTarget.style.color = "#666"}
                    >✕</button>
                </div>

                {/* Tabs */}
                <div style={{ background: DARK, borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 32px", display: "flex", gap: 0, flexShrink: 0 }}>
                    {services.map(s => (
                        <button key={s.id}
                            onClick={() => setActiveTab(s.id as typeof activeTab)}
                            style={{
                                background: "none", border: "none", cursor: "pointer",
                                padding: "14px 24px", fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 600,
                                color: activeTab === s.id ? s.color : "#777",
                                borderBottom: activeTab === s.id ? `2px solid ${s.color}` : "2px solid transparent",
                                transition: "all 0.2s", display: "flex", alignItems: "center", gap: 8,
                            }}
                        >
                            <span>{s.icon}</span> {s.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div style={{ overflowY: "auto", flex: 1, padding: "36px 32px 40px" }}>
                    {/* Service Header */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 32, paddingBottom: 32, borderBottom: `1px solid ${BORDER}` }}>
                        <div style={{ width: 60, height: 60, borderRadius: 14, background: `${active.color}20`, border: `1px solid ${active.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ fontSize: 28 }}>{active.icon}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: active.color, marginBottom: 6 }}>{active.tagline}</div>
                            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.75, margin: "0 0 20px" }}>{active.overview}</p>
                            {/* Stats */}
                            <div style={{ display: "flex", gap: 24 }}>
                                {active.stats.map((st, i) => (
                                    <div key={i} style={{ borderLeft: `2px solid ${active.color}50`, paddingLeft: 12 }}>
                                        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 22, color: BLACK, lineHeight: 1 }}>{st.v}</div>
                                        <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: GRAY, marginTop: 3 }}>{st.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32 }}>
                        {/* Features */}
                        <div>
                            <h3 style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 20, color: BLACK, marginBottom: 20 }}>Key Capabilities</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                                {active.keyFeatures.map((f, i) => (
                                    <div key={i} style={{ background: LIGHTGRAY, borderRadius: 10, padding: "18px 16px", border: `1px solid ${BORDER}` }}>
                                        <div style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 14, color: BLACK, marginBottom: 7 }}>{f.title}</div>
                                        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12.5, color: GRAY, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process */}
                        <div>
                            <h3 style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 20, color: BLACK, marginBottom: 20 }}>Our Process</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                                {active.process.map((step, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingBottom: i < active.process.length - 1 ? 16 : 0, position: "relative" }}>
                                        {i < active.process.length - 1 && (
                                            <div style={{ position: "absolute", left: 16, top: 32, bottom: 0, width: 2, background: `${active.color}30` }} />
                                        )}
                                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${active.color}20`, border: `2px solid ${active.color}60`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                                            <span style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 12, color: OLIVE }}>{i + 1}</span>
                                        </div>
                                        <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13.5, color: BLACK, fontWeight: 500, paddingTop: 6, lineHeight: 1.4 }}>{step}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div style={{ marginTop: 28, background: DARK, borderRadius: 12, padding: "20px", textAlign: "center" }}>
                                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#aaa", margin: "0 0 14px", lineHeight: 1.6 }}>
                                    Ready to get started with {active.label}?
                                </p>
                                <button
                                    onClick={() => alert("Platform access: complete KYC onboarding to proceed.")}
                                    style={{ background: active.color, color: BLACK, border: "none", borderRadius: 8, padding: "11px 24px", fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer", width: "100%" }}
                                >
                                    Request a Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Standalone page wrapper for Services
export default function ServicesPage() {
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <div style={{ fontFamily: "DM Sans, sans-serif" }}>
            <ServicesModal isOpen={modalOpen} onClose={() => { setModalOpen(false); window.history.back(); }} />
        </div>
    );
}
