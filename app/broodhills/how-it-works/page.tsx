import type { Metadata } from "next";
import HowItWorksPage from "@/components/broodhills/how-it-works";

export const metadata: Metadata = {
    title: "How It Works | Brood Hills Global",
    description: "Understand BroodHUB's four-phase trade lifecycle — from KYC onboarding and deal origination to instrument management and final settlement.",
};

export default function HowItWorksRoute() {
    return <HowItWorksPage />;
}
