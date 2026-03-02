"use client";

import Link from "next/link";
import { BLACK, DARK, WHITE } from "./constants";

const LIME = "#C8DC0A";

type ServiceTab = "deal-structuring" | "instrument-management" | "trade-operations";

export function BroodFooter({ openService }: { openService: (tab: ServiceTab) => void }) {

    const companyLinks: { label: string; href?: string; action?: () => void }[] = [
        { label: "About Us", href: "/broodhills/about" },
        { label: "Our Team", href: "/broodhills/team" },
        { label: "How It Works", href: "/broodhills/how-it-works" },
        { label: "Investor Module", href: "/broodhills/invest" },
    ];

    const serviceLinks: { label: string; tab: ServiceTab }[] = [
        { label: "Deal Structuring", tab: "deal-structuring" },
        { label: "Instrument Management", tab: "instrument-management" },
        { label: "Trade Operations", tab: "trade-operations" },
    ];

    const connectLinks = ["Facebook", "Twitter / X", "LinkedIn", "Instagram"];

    return (
        <>
            <footer style={{ background: DARK, padding: "48px 6% 28px", borderTop: "1px solid #1a1a1a" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48, marginBottom: 40 }}>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                                <img
                                    src="https://res.cloudinary.com/dycc51iwn/image/upload/v1772463804/broodhills_2_oiovoo_e_background_removal_f_png_trm008.png"
                                    alt="BroodHills Global"
                                    style={{ height: 40, width: "auto", objectFit: "contain", borderRadius: 6 }}
                                />
                                <span style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 14, color: WHITE, letterSpacing: 1, textTransform: "uppercase", lineHeight: 1.1 }}>
                                    Broodhills<br /><span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2 }}>Global</span>
                                </span>
                            </div>
                            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.7, marginBottom: 12 }}>
                                3801 Binding Way, Providence RI 02910<br />
                                +234 801 234 5678<br />
                                hello@broodhillsglobal.com
                            </p>
                        </div>

                        {/* Company */}
                        <div>
                            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 700, color: WHITE, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Company</div>
                            {companyLinks.map((link) => (
                                link.href ? (
                                    <Link key={link.label} href={link.href}
                                        style={{ display: "block", fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#666", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = LIME)}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#666")}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <button key={link.label}
                                        onClick={link.action}
                                        style={{ display: "block", background: "none", border: "none", padding: 0, fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#666", cursor: "pointer", marginBottom: 8, transition: "color 0.2s", textAlign: "left" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = LIME)}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#666")}
                                    >
                                        {link.label}
                                    </button>
                                )
                            ))}
                        </div>

                        {/* Services */}
                        <div>
                            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 700, color: WHITE, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Services</div>
                            {serviceLinks.map((s) => (
                                <button key={s.label}
                                    onClick={() => openService(s.tab)}
                                    style={{ display: "block", background: "none", border: "none", padding: 0, fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#666", cursor: "pointer", marginBottom: 8, transition: "color 0.2s", textAlign: "left" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = LIME)}
                                    onMouseLeave={e => (e.currentTarget.style.color = "#666")}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>

                        {/* Connect */}
                        <div>
                            <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 700, color: WHITE, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Connect</div>
                            {connectLinks.map(l => (
                                <span key={l}
                                    style={{ display: "block", fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#444", marginBottom: 8, cursor: "not-allowed" }}
                                >
                                    {l}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                        <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#444" }}>© 2024 Brood Hills Global Energy Marketplace. All rights reserved.</span>
                        <div style={{ display: "flex", gap: 20 }}>
                            {["Privacy Policy", "Terms of Service", "Compliance"].map(l => (
                                <a key={l} href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#444", textDecoration: "none" }}>{l}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
