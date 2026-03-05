"use client";

import { BLACK, GRAY, GOLD, GOLD_DARK, WHITE } from "./constants";
import { useResponsive } from "@/hooks/use-responsive";

export function Hero({ onEnter, onExplore }: { onEnter: () => void; onExplore: () => void }) {
    const { isMobile } = useResponsive();

    return (
        <section style={{ padding: isMobile ? "80px 5% 60px" : "120px 6% 80px", background: WHITE }}>
            <div style={{
                maxWidth: 1200, margin: "0 auto",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 40 : 60,
                alignItems: "center",
            }}>
                {/* Left */}
                <div>
                    <h1 style={{ fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, color: BLACK, margin: "0 0 20px" }}>
                        Empowering Trade Through Structured Energy Markets
                    </h1>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: GRAY, lineHeight: 1.75, margin: "0 0 32px", maxWidth: 460 }}>
                        Our commitment to regulatory compliance, institutional-grade security, and transparent resource management ensures we not only meet today's trading demands but protect every participant for the long term.
                    </p>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
                        <button onClick={onExplore} style={{
                            background: GOLD, color: BLACK, border: "none", borderRadius: 8,
                            padding: isMobile ? "13px 0" : "13px 28px",
                            width: isMobile ? "100%" : "auto",
                            fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                        }}
                            onMouseEnter={e => (e.currentTarget.style.background = GOLD_DARK)}
                            onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
                            Explore Our Services
                        </button>
                    </div>

                    <div>
                        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#999", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Partnering with</p>
                        <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
                            {[
                                { src: "https://res.cloudinary.com/dycc51iwn/image/upload/v1772456544/uba-group_zpatki.png", alt: "UBA Group" },
                                { src: "https://res.cloudinary.com/dycc51iwn/image/upload/v1772456546/zenith-bank-plc_q9ey90.png", alt: "Zenith Bank" },
                                { src: "https://res.cloudinary.com/dycc51iwn/image/upload/v1772456620/moniepoint-group_t5rp21.png", alt: "Moniepoint Group" },
                            ].map((logo, i) => (
                                <div key={i} style={{ opacity: 0.7, transition: "opacity 0.2s" }}
                                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
                                    <img src={logo.src} alt={logo.alt} style={{ height: 30, width: "auto", objectFit: "contain", display: "block" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right — hidden on mobile to avoid overflow from floating card */}
                {!isMobile && (
                    <div style={{ position: "relative" }}>
                        <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: 16, overflow: "hidden", background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%)", position: "relative" }}>
                            <svg viewBox="0 0 500 375" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                                <defs>
                                    <linearGradient id="hsky" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#0f2744" /><stop offset="100%" stopColor="#1a4a7a" />
                                    </linearGradient>
                                    <linearGradient id="hwater" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#1a3a6b" /><stop offset="100%" stopColor="#0d1f3c" />
                                    </linearGradient>
                                </defs>
                                <rect width="500" height="375" fill="url(#hsky)" />
                                <ellipse cx="250" cy="200" rx="200" ry="60" fill="#C8DC0A" opacity="0.12" />
                                <rect y="240" width="500" height="135" fill="url(#hwater)" opacity="0.8" />
                                <rect y="245" width="500" height="2" fill="#C8DC0A" opacity="0.08" />
                                <rect y="255" width="300" height="1" fill="#C8DC0A" opacity="0.06" x="100" />
                                <rect x="60" y="230" width="380" height="28" rx="4" fill="#1e2d3d" />
                                <polygon points="60,230 440,230 460,258 40,258" fill="#162030" />
                                <rect x="100" y="200" width="60" height="30" rx="2" fill="#243447" />
                                <rect x="170" y="190" width="40" height="40" rx="2" fill="#1e2d3d" />
                                <rect x="280" y="205" width="80" height="25" rx="2" fill="#243447" />
                                <line x1="320" y1="195" x2="350" y2="100" stroke="#C8DC0A" strokeWidth="2" opacity="0.6" />
                                <line x1="350" y1="100" x2="400" y2="195" stroke="#C8DC0A" strokeWidth="2" opacity="0.6" />
                                <line x1="330" y1="160" x2="390" y2="160" stroke="#C8DC0A" strokeWidth="1.5" opacity="0.4" />
                                <rect x="180" y="160" width="4" height="30" fill="#6B8C14" />
                                <ellipse cx="182" cy="158" rx="6" ry="8" fill="#C8DC0A" opacity="0.8" />
                                <ellipse cx="182" cy="154" rx="4" ry="6" fill="#B8D464" opacity="0.6" />
                                {[30, 80, 130, 200, 280, 350, 420, 460, 50, 150, 250, 370, 450].map((x, i) => (
                                    <circle key={i} cx={x} cy={20 + (i % 4) * 18} r="1" fill="white" opacity="0.5" />
                                ))}
                            </svg>
                            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                    <div style={{ width: 0, height: 0, borderLeft: "16px solid white", borderTop: "10px solid transparent", borderBottom: "10px solid transparent", marginLeft: 4 }} />
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(0,0,0,0.6)", borderRadius: 6, padding: "5px 12px", backdropFilter: "blur(4px)" }}>
                                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: WHITE, letterSpacing: 1 }}>▶ Watch Our Story</span>
                            </div>
                        </div>

                        {/* Floating stats card */}
                        <div style={{ position: "absolute", bottom: -20, left: -24, background: BLACK, borderRadius: 14, padding: "20px 24px", boxShadow: "0 20px 60px rgba(0,0,0,0.25)", minWidth: 200 }}>
                            <div style={{ marginBottom: 14 }}>
                                <div style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 900, color: "#AECF3A", lineHeight: 1 }}>$8.4B</div>
                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#999", marginTop: 3 }}>Global Deal Flow</div>
                            </div>
                            <div style={{ height: 1, background: "#2a2a2a", marginBottom: 14 }} />
                            <div style={{ marginBottom: 12 }}>
                                <div style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, color: WHITE }}>70%</div>
                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#999" }}>Institutional Partners</div>
                            </div>
                            <div>
                                <div style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, color: WHITE }}>10%</div>
                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#999" }}>Annual Growth Rate</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile stats row — shown instead of the right column */}
                {isMobile && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, background: BLACK, borderRadius: 14, padding: "20px 16px" }}>
                        {[
                            { value: "$8.4B", label: "Global Deal Flow", color: "#AECF3A" },
                            { value: "70%", label: "Institutional Partners", color: WHITE },
                            { value: "10%", label: "Annual Growth", color: WHITE },
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: "center" }}>
                                <div style={{ fontFamily: "Fraunces, serif", fontSize: 20, fontWeight: 900, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: "#999", marginTop: 4 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
