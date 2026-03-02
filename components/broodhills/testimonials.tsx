"use client";

import { BLACK, BORDER, GOLD, GOLD_DARK, GRAY, LIGHTGRAY, LIME_BRIGHT, WHITE } from "./constants";

export function TestimonialsSection() {
    return (
        <section style={{ padding: "80px 6%", background: LIGHTGRAY }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 52 }}>
                    <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, color: BLACK, margin: 0 }}>
                        Hear From Our<br />Satisfied Partners
                    </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
                    {/* Video */}
                    <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", aspectRatio: "16/10" }}>
                        <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0a1520 0%,#1a3050 100%)", position: "relative" }}>
                            <svg viewBox="0 0 480 300" style={{ width: "100%", height: "100%", position: "absolute" }}>
                                <rect width="480" height="300" fill="#0a1520" />
                                <ellipse cx="240" cy="150" rx="200" ry="100" fill="#C8DC0A" opacity="0.06" />
                                <rect x="0" y="210" width="480" height="90" fill="#061020" />
                                <rect x="0" y="210" width="480" height="6" fill="#1a4a7a" opacity="0.3" />
                                <rect x="20" y="185" width="440" height="30" rx="4" fill="#0f2030" />
                                <rect x="60" y="165" width="360" height="22" fill="#0d1c2c" />
                                {[80, 140, 200, 260, 320].map((x, i) => <rect key={i} x={x} y={148} width={48} height={20} rx="2" fill="#122030" />)}
                                <polygon points="380,60 400,60 420,165 360,165" fill="#0f2030" opacity="0.8" />
                                <line x1="390" x2="390" y1="60" y2="165" stroke="#C8DC0A" strokeWidth="1.5" opacity="0.4" />
                                {[30, 80, 130, 190, 260, 330, 410, 460, 55, 155, 225, 355, 445].map((x, i) => (
                                    <circle key={i} cx={x} cy={10 + (i % 5) * 14} r="0.9" fill="white" opacity="0.45" />
                                ))}
                            </svg>
                            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                    <div style={{ width: 0, height: 0, borderLeft: "18px solid white", borderTop: "11px solid transparent", borderBottom: "11px solid transparent", marginLeft: 5 }} />
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(0,0,0,0.6)", borderRadius: 5, padding: "4px 10px" }}>
                                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 10, color: WHITE, letterSpacing: 0.5 }}>Testimonials</span>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div>
                        <div style={{ fontSize: 48, color: LIME_BRIGHT, fontFamily: "Fraunces, serif", lineHeight: 1, marginBottom: 8, opacity: 0.8 }}>"</div>
                        <blockquote style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: BLACK, lineHeight: 1.8, margin: "0 0 28px", fontWeight: 400 }}>
                            <strong>Brood Hills has been an exceptional partner</strong> in structuring our crude oil transactions across the Gulf of Guinea. Their expertise and meticulous compliance approach have significantly improved our deal efficiency and capital protection.
                        </blockquote>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                                <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <span style={{ fontFamily: "Fraunces, serif", fontWeight: 700, color: BLACK, fontSize: 16 }}>J</span>
                                </div>
                                <div>
                                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 700, color: BLACK }}>Julius McKenna</div>
                                    <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: GRAY }}>Business Analyst, Meridian Energy</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: 8 }}>
                                <button style={{ width: 34, height: 34, borderRadius: "50%", border: `1px solid ${BORDER}`, background: WHITE, cursor: "pointer", fontSize: 14 }}>‹</button>
                                <button style={{ width: 34, height: 34, borderRadius: "50%", border: "none", background: GOLD, cursor: "pointer", fontSize: 14 }}>›</button>
                            </div>
                        </div>
                        <div style={{ marginTop: 20, display: "flex", gap: 3 }}>
                            {[1, 2, 3, 4, 5].map(i => <span key={i} style={{ color: GOLD, fontSize: 16 }}>★</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
