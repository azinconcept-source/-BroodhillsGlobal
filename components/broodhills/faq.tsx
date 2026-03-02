"use client";

import { useState } from "react";
import { BLACK, BORDER, GOLD, GOLD_DARK, GRAY, LIGHTGRAY, WHITE } from "./constants";

export function FAQSection() {
    const [open, setOpen] = useState(0);
    const [form, setForm] = useState({ name: "", last: "", email: "", msg: "" });

    const faqs = [
        { q: "Where are your trading operations located?", a: "Our trading operations are active across several countries, including Nigeria, Ghana, Cameroon, and Côte d'Ivoire — each chosen for its rich hydrocarbon deposits and stable regulatory environment." },
        { q: "How do you ensure transaction safety?", a: "We enforce AES-256 document encryption, mandatory two-factor authentication, full timestamped audit trails, and role-locked access for every participant. All instruments are processed through regulated correspondent banks." },
        { q: "What environmental measures do you take?", a: "Brood Hills adheres to international ESG standards for all operations. We partner with inspection agencies that enforce MARPOL compliance and require environmental impact assessments for all logistics milestones." },
        { q: "How do you engage with local communities?", a: "Community engagement is central to our mandate. We support local SMEs, prioritise regional talent in facilitation roles, and contribute a portion of facilitation fees to community development programmes." },
        { q: "How can investors get more information?", a: "Investors can apply for onboarding through our KYC portal. Once verified, you'll gain full access to the Investor Module — where you can review active deal stakes, ROI projections, and distribution schedules." },
    ];

    type Field = "name" | "last" | "email" | "msg";

    return (
        <section style={{ padding: "80px 6%", background: WHITE }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
                {/* Form */}
                <div>
                    <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: BLACK, margin: "0 0 12px" }}>
                        Frequently<br />Asked Questions
                    </h2>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: GRAY, marginBottom: 32, lineHeight: 1.7 }}>
                        Want to ask another question? Please fill out this form below.
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                        {([{ label: "Your Name", key: "name" as Field, placeholder: "First Name" }, { label: "", key: "last" as Field, placeholder: "Last Name" }]).map(f => (
                            <div key={f.key}>
                                {f.label ? <label style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: BLACK, display: "block", marginBottom: 6, fontWeight: 500 }}>{f.label}</label> : <div style={{ height: 22 }} />}
                                <input value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} placeholder={f.placeholder}
                                    style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: `1px solid ${BORDER}`, background: LIGHTGRAY, fontFamily: "DM Sans, sans-serif", fontSize: 13, color: BLACK, outline: "none", boxSizing: "border-box" }} />
                            </div>
                        ))}
                    </div>
                    <div style={{ marginBottom: 14 }}>
                        <label style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: BLACK, display: "block", marginBottom: 6, fontWeight: 500 }}>Email Address</label>
                        <input value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="name@company.com"
                            style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: `1px solid ${BORDER}`, background: LIGHTGRAY, fontFamily: "DM Sans, sans-serif", fontSize: 13, color: BLACK, outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ marginBottom: 22 }}>
                        <label style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: BLACK, display: "block", marginBottom: 6, fontWeight: 500 }}>Message</label>
                        <textarea value={form.msg} onChange={e => setForm(p => ({ ...p, msg: e.target.value }))} placeholder="Your message..."
                            style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: `1px solid ${BORDER}`, background: LIGHTGRAY, fontFamily: "DM Sans, sans-serif", fontSize: 13, color: BLACK, outline: "none", boxSizing: "border-box", resize: "vertical", minHeight: 100 }} />
                    </div>
                    <button style={{ background: GOLD, color: BLACK, border: "none", borderRadius: 8, padding: "12px 28px", fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Submit</button>
                </div>

                {/* Accordion */}
                <div style={{ paddingTop: 10 }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                            <button onClick={() => setOpen(open === i ? -1 : i)}
                                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 600, color: BLACK, paddingRight: 16 }}>{faq.q}</span>
                                <span style={{ color: open === i ? GOLD : GRAY, fontSize: 18, flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(180deg)" : "none" }}>∨</span>
                            </button>
                            {open === i && (
                                <div style={{ paddingBottom: 18 }}>
                                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: GRAY, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
