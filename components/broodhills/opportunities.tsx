"use client";

import { BLACK, GOLD, GOLD_DARK, GRAY, LIGHTGRAY } from "./constants";

export function OpportunitiesSection() {
    return (
        <section style={{ padding: "80px 6%", background: LIGHTGRAY }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: BLACK, margin: "0 0 14px" }}>
                        Unlocking Opportunities<br />and Maximising Your Trade
                    </h2>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: GRAY, maxWidth: 520, margin: "0 auto" }}>
                        Discover how Brood Hills Global leverages institutional-grade compliance and cutting-edge deal infrastructure.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
                    <div style={{ position: "relative" }}>
                        <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", background: "linear-gradient(160deg,#1a2a1a 0%,#0d2211 50%,#1a3a0d 100%)", position: "relative" }}>
                            <svg viewBox="0 0 480 360" style={{ width: "100%", height: "100%", position: "absolute" }}>
                                <defs>
                                    <linearGradient id="og2" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#0f2a0f" /><stop offset="100%" stopColor="#1a4a1a" />
                                    </linearGradient>
                                </defs>
                                <rect width="480" height="360" fill="url(#og2)" />
                                <ellipse cx="240" cy="120" rx="180" ry="80" fill="#C8DC0A" opacity="0.08" />
                                <rect x="0" y="280" width="480" height="80" fill="#0a1a08" />
                                <rect x="40" y="220" width="30" height="60" fill="#1a2d1a" />
                                <rect x="100" y="200" width="20" height="80" fill="#152515" />
                                <rect x="200" y="210" width="80" height="70" fill="#1e321e" />
                                <rect x="310" y="225" width="40" height="55" fill="#1a2d1a" />
                                <rect x="0" y="270" width="480" height="12" rx="6" fill="#2a4a2a" />
                                <rect x="0" y="258" width="300" height="8" rx="4" fill="#243824" />
                                <ellipse cx="240" cy="215" rx="55" ry="20" fill="#243824" />
                                <rect x="185" y="215" width="110" height="50" fill="#1e3a1e" />
                                <ellipse cx="240" cy="265" rx="55" ry="20" fill="#1a3218" />
                                <rect x="350" y="180" width="6" height="40" fill="#2a4a0a" />
                                <ellipse cx="353" cy="177" rx="8" ry="12" fill="#C8DC0A" opacity="0.9" />
                                <ellipse cx="353" cy="172" rx="5" ry="8" fill="#AECF3A" opacity="0.7" />
                                <rect x="14" y="14" width="70" height="26" rx="6" fill="#C8DC0A" opacity="0.95" />
                                <text x="24" y="31" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#000">Why Choose</text>
                            </svg>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        {[
                            { title: "Expertise You Can Trust", body: "Our seasoned professionals bring deep expertise in structured oil transactions, fully committed to delivering exceptional deal results across West Africa." },
                            { title: "Innovation at the Core", body: "At Brood Hills, we embrace innovation. From smart milestone triggers to role-locked deal rooms, we use the latest technologies to push commodities trading forward." },
                            { title: "Safety First, Always", body: "Safety is our top priority. We uphold the highest compliance standards for our partners, participants, and the environment — AES-256 encryption on every document." },
                        ].map((f, i) => (
                            <div key={i} style={{ display: "flex", gap: 16 }}>
                                <div style={{ flexShrink: 0, marginTop: 2 }}>
                                    <div style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD }} />
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 17, fontWeight: 700, color: BLACK, margin: "0 0 8px" }}>{f.title}</h3>
                                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: GRAY, lineHeight: 1.7, margin: "0 0 10px" }}>{f.body}</p>
                                    <a href="#" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: GOLD_DARK, fontWeight: 600, textDecoration: "none", letterSpacing: 0.3 }}>Learn More →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
