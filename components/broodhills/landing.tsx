"use client";

import { useEffect, useState } from "react";
import { Nav } from "./nav";
import { Hero } from "./hero";
import { CommitmentSection } from "./commitment";
import FeatureCarousel from "./feature-carousel";
import { OpportunitiesSection } from "./opportunities";
import { ServicesSection } from "./services";
import { TestimonialsSection } from "./testimonials";
import { FAQSection } from "./faq";
import { CTABanner } from "./cta";
import { BroodFooter } from "./footer";
import { ServicesModal } from "./services-modal";
import { ContactModal } from "./contact-modal";

type ServiceTab = "deal-structuring" | "instrument-management" | "trade-operations";

export default function BroodHillsLanding() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [activeServiceTab, setActiveServiceTab] = useState<ServiceTab>("deal-structuring");
    const [contactOpen, setContactOpen] = useState(false);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap";
        document.head.appendChild(link);
    }, []);

    const handleEnter = () => alert("Platform access: complete KYC onboarding to proceed.");

    const openService = (tab: ServiceTab) => {
        setActiveServiceTab(tab);
        setServicesOpen(true);
    };

    return (
        <div style={{ fontFamily: "DM Sans, sans-serif", background: "#FFFFFF" }}>
            <ServicesModal
                isOpen={servicesOpen}
                onClose={() => setServicesOpen(false)}
                initialTab={activeServiceTab}
            />
            <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
            <Nav onEnter={handleEnter} onOpenServices={() => openService("deal-structuring")} />
            <div style={{ height: 68 }} />
            <Hero onEnter={handleEnter} onExplore={() => setContactOpen(true)} />
            <CommitmentSection />
            <FeatureCarousel />
            <OpportunitiesSection />
            <ServicesSection />
            <TestimonialsSection />
            <FAQSection />
            <CTABanner onEnter={handleEnter} />
            <BroodFooter openService={openService} />
        </div>
    );
}
