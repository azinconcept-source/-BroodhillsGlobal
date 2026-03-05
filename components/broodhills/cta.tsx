"use client";

import { BLACK, GOLD, GOLD_DARK, WHITE } from "./constants";
import { useResponsive } from "@/hooks/use-responsive";

export function CTABanner({ onEnter }: { onEnter: () => void }) {
    const { isMobile } = useResponsive();

    return (
        <section style={{ padding: isMobile ? "60px 5%" : "80px 6%", background: BLACK, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 20% 50%, ${GOLD}10 0%, transparent 60%), radial-gradient(circle at 80% 50%, ${GOLD}08 0%, transparent 60%)` }} />
            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#888", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Got a Deal to Structure?</p>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, color: WHITE, margin: "0 0 8px", lineHeight: 1.2 }}>Got a Project?</h2>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, margin: "0 0 24px", lineHeight: 1.2 }}>
                    <span style={{ color: GOLD }}>Let&apos;s Bring</span> <span style={{ color: WHITE }}>It to Life!</span>
                </h2>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#888", lineHeight: 1.8, maxWidth: 500, margin: "0 auto 36px" }}>
                    Reach out to Brood Hills today and discover how our KYC-verified and compliance-driven solutions can put your energy trade into reality.
                </p>
            </div>
        </section>
    );
}
