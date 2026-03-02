"use client";

import { BLACK, BORDER, GRAY, LIME_BRIGHT, OLIVE, WHITE } from "./constants";

export function CommitmentSection() {
    return (
        <section style={{ padding: "80px 6%", background: WHITE, borderTop: `1px solid ${BORDER}` }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
                <div>
                    <blockquote style={{
                        fontFamily: "Fraunces, serif", fontSize: "clamp(20px, 2.5vw, 28px)", fontStyle: "italic",
                        fontWeight: 400, color: BLACK, lineHeight: 1.45, margin: 0,
                        borderLeft: `3px solid #4A6600`, paddingLeft: 24,
                    }}>
                        "We are committed to the highest standards of excellence in West African energy trade."
                    </blockquote>
                </div>
                <div>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: GRAY, lineHeight: 1.8, marginBottom: 32 }}>
                        Our dedication to compliant transactions, innovative trading technologies, and institutional partnership ensures that we not only structure valuable crude trades but also deliver them with complete transparency and legal integrity.
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
                        {[
                            { year: "2016: Our Founding", body: "Established with a clear vision to professionalise oil trading in West Africa through structured, compliant infrastructure." },
                            { year: "2018: Expansion & Innovation", body: "By 2018, Brood Hills had expanded into new trading corridors. The year marked significant strides in research and SBLC workflows." },
                            { year: "2020: Leading in Sustainability", body: "In 2020 we committed to a rigorous ESG compliance program, aligning every transaction with environmental and governance standards." },
                        ].map((m, i) => (
                            <div key={i}>
                                <div style={{ width: "100%", height: 2, background: `linear-gradient(90deg, ${LIME_BRIGHT}, ${OLIVE})`, marginBottom: 14, borderRadius: 1 }} />
                                <div style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 700, color: BLACK, marginBottom: 8 }}>{m.year}</div>
                                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: GRAY, lineHeight: 1.65, margin: 0 }}>{m.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
