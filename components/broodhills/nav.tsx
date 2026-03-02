"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BLACK, BORDER, WHITE } from "./constants";

const LIME = "#C8DC0A";
const LIME_DARK = "#6B8C14";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "/broodhills/team" },
    { label: "About Us", href: "/broodhills/about" },
    { label: "How It Works", href: "/broodhills/how-it-works" },
    { label: "Invest", href: "/broodhills/invest" },
];

export function Nav({ onEnter, onOpenServices }: { onEnter: () => void; onOpenServices: () => void }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    return (
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

                <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
                    {navLinks.map(l => (
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
                    ))}
                    <button disabled style={{
                        background: "#ccc", color: "#888", border: "none", borderRadius: 6,
                        padding: "9px 20px", fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 600, cursor: "not-allowed",
                    }}>
                        Get a Quote
                    </button>
                </div>
            </div>
        </nav>
    );
}
