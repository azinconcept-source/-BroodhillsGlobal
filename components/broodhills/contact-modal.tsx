"use client";

import { useState } from "react";

const GOLD = "#C8DC0A";
const BLACK = "#0d0d0d";
const DARK = "#111";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "11px 14px",
        fontFamily: "DM Sans, sans-serif",
        fontSize: 13,
        background: "#1a1a1a",
        border: "1px solid #2a2a2a",
        borderRadius: 8,
        color: "#eee",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 0.2s",
    };

    const labelStyle: React.CSSProperties = {
        fontFamily: "DM Sans, sans-serif",
        fontSize: 12,
        color: "#888",
        display: "block",
        marginBottom: 6,
        textTransform: "uppercase",
        letterSpacing: 0.8,
    };

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 9999,
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(6px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    background: DARK,
                    borderRadius: 20,
                    padding: "40px 40px 36px",
                    maxWidth: 520,
                    width: "100%",
                    position: "relative",
                    border: "1px solid #222",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute", top: 16, right: 16,
                        background: "#222", border: "none", borderRadius: "50%",
                        width: 32, height: 32, cursor: "pointer",
                        color: "#999", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                >
                    ×
                </button>

                {/* Heading */}
                <div style={{ marginBottom: 28 }}>
                    <div style={{
                        display: "inline-block",
                        background: `${GOLD}18`,
                        border: `1px solid ${GOLD}40`,
                        color: GOLD,
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
                        textTransform: "uppercase", padding: "4px 12px",
                        borderRadius: 100, marginBottom: 14,
                    }}>
                        🚧 Under Construction
                    </div>
                    <h2 style={{
                        fontFamily: "Fraunces, serif",
                        fontWeight: 900,
                        fontSize: 26,
                        color: "#fff",
                        margin: "0 0 10px",
                        lineHeight: 1.2,
                    }}>
                        The Marketplace is{" "}
                        <span style={{ color: GOLD }}>Coming Soon</span>
                    </h2>
                    <p style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: 13,
                        color: "#777",
                        lineHeight: 1.7,
                        margin: 0,
                    }}>
                        Our energy trade marketplace is currently in development. Leave your details below and
                        our team will reach out to you as a priority partner when we go live.
                    </p>
                </div>

                {submitted ? (
                    <div style={{ textAlign: "center", padding: "32px 0" }}>
                        <div style={{ fontSize: 40, marginBottom: 14 }}>✅</div>
                        <h3 style={{ fontFamily: "Fraunces, serif", color: "#fff", fontSize: 20, margin: "0 0 8px" }}>
                            We&apos;ll be in touch!
                        </h3>
                        <p style={{ fontFamily: "DM Sans, sans-serif", color: "#777", fontSize: 13 }}>
                            Thank you for your interest. Our team will contact you shortly.
                        </p>
                        <button
                            onClick={onClose}
                            style={{
                                marginTop: 20, background: GOLD, color: BLACK,
                                border: "none", borderRadius: 8, padding: "11px 28px",
                                fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                            <div>
                                <label style={labelStyle}>Full Name *</label>
                                <input
                                    required
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Company</label>
                                <input
                                    placeholder="Acme Corp"
                                    value={form.company}
                                    onChange={e => setForm({ ...form, company: e.target.value })}
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                            <div>
                                <label style={labelStyle}>Email *</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Phone</label>
                                <input
                                    placeholder="+234 000 000 0000"
                                    value={form.phone}
                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                        <div>
                            <label style={labelStyle}>Message</label>
                            <textarea
                                rows={3}
                                placeholder="Tell us about your trade interest or mandate..."
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                background: GOLD, color: BLACK, border: "none",
                                borderRadius: 8, padding: "13px 0",
                                fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 700,
                                cursor: "pointer", width: "100%", marginTop: 4,
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                        >
                            Register My Interest →
                        </button>
                        <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#555", textAlign: "center", margin: 0 }}>
                            Your details are confidential and will never be shared with third parties.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
