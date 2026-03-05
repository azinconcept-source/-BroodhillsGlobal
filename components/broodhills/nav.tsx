"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BLACK, BORDER, WHITE } from "./constants";
import { useResponsive } from "@/hooks/use-responsive";

const LIME = "#C8DC0A";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "/broodhills/team" },
    { label: "About Us", href: "/broodhills/about" },
    { label: "How It Works", href: "/broodhills/how-it-works" },
    { label: "Invest", href: "/broodhills/invest" },
];

export function Nav({ onEnter, onOpenServices }: { onEnter: () => void; onOpenServices: () => void }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { isMobile } = useResponsive();

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    // Close menu when switching to desktop
    useEffect(() => {
        if (!isMobile) setMenuOpen(false);
    }, [isMobile]);

    return (
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
                background: scrolled ? "rgba(255,255,255,0.97)" : WHITE,
                borderBottom: `1px solid ${scrolled ? BORDER : "transparent"}`,
                backdropFilter: scrolled ? "blur(12px)" : "none",
                transition: "all 0.3s",
                padding: "0 6%",
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
                    <Link href="/broodhills" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                        <img
                            src="https://res.cloudinary.com/dycc51iwn/image/upload/v1772463804/broodhills_2_oiovoo_e_background_removal_f_png_trm008.png"
                            alt="BroodHills Global"
                            style={{ height: 42, width: "auto", objectFit: "contain", borderRadius: 6 }}
                        />
                        <span style={{ fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 15, color: BLACK, letterSpacing: 1, textTransform: "uppercase", lineHeight: 1.1 }}>
                            Broodhills<br /><span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2 }}>Global</span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    {!isMobile && (
                        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
                            {navLinks.map(l =>
                                l.label === "Services" ? (
                                    <button key={l.label}
                                        onClick={onOpenServices}
                                        style={{ background: "none", border: "none", padding: 0, fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#333", textDecoration: "none", fontWeight: 400, transition: "color 0.2s", cursor: "pointer" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = LIME)}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#333")}
                                    >
                                        {l.label}
                                    </button>
                                ) : (
                                    <Link key={l.label} href={l.href}
                                        style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#333", textDecoration: "none", fontWeight: 400, transition: "color 0.2s" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = LIME)}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#333")}
                                    >
                                        {l.label}
                                    </Link>
                                )
                            )}
                            <button disabled style={{
                                background: "#ccc", color: "#888", border: "none", borderRadius: 6,
                                padding: "9px 20px", fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 600, cursor: "not-allowed",
                            }}>
                                Get a Quote
                            </button>
                        </div>
                    )}

                    {/* Hamburger button */}
                    {isMobile && (
                        <button
                            onClick={() => setMenuOpen(v => !v)}
                            style={{
                                background: "none", border: "none", cursor: "pointer",
                                display: "flex", flexDirection: "column", gap: 5, padding: 6,
                            }}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            <span style={{
                                display: "block", width: 24, height: 2, background: BLACK,
                                transition: "all 0.3s",
                                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                            }} />
                            <span style={{
                                display: "block", width: 24, height: 2, background: BLACK,
                                transition: "all 0.3s",
                                opacity: menuOpen ? 0 : 1,
                            }} />
                            <span style={{
                                display: "block", width: 24, height: 2, background: BLACK,
                                transition: "all 0.3s",
                                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                            }} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile drawer */}
            {isMobile && (
                <div style={{
                    position: "fixed", top: 68, left: 0, right: 0, zIndex: 999,
                    background: WHITE,
                    borderBottom: `1px solid ${BORDER}`,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    padding: menuOpen ? "20px 6% 28px" : "0 6%",
                    maxHeight: menuOpen ? 400 : 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                        {navLinks.map(l =>
                            l.label === "Services" ? (
                                <button key={l.label}
                                    onClick={() => { onOpenServices(); setMenuOpen(false); }}
                                    style={{
                                        background: "none", border: "none", borderBottom: `1px solid ${BORDER}`,
                                        padding: "14px 0", fontFamily: "DM Sans, sans-serif", fontSize: 15,
                                        color: "#333", textDecoration: "none", fontWeight: 500, cursor: "pointer", textAlign: "left",
                                    }}
                                >
                                    {l.label}
                                </button>
                            ) : (
                                <Link key={l.label} href={l.href}
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        display: "block", fontFamily: "DM Sans, sans-serif", fontSize: 15,
                                        color: "#333", textDecoration: "none", fontWeight: 500,
                                        padding: "14px 0", borderBottom: `1px solid ${BORDER}`,
                                    }}
                                >
                                    {l.label}
                                </Link>
                            )
                        )}
                        <button disabled style={{
                            background: "#ccc", color: "#888", border: "none", borderRadius: 6,
                            padding: "12px 20px", fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 600, cursor: "not-allowed",
                            marginTop: 16, width: "100%",
                        }}>
                            Get a Quote
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
