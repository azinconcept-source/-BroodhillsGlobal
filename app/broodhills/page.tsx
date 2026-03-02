import type { Metadata } from "next";
import BroodHillsLanding from "@/components/broodhills/landing";

export const metadata: Metadata = {
    title: "Brood Hills Global | Energy Marketplace",
    description:
        "Empowering Trade Through Structured Energy Markets. Institutional-grade compliance, transparent resource management, and deal infrastructure across West Africa.",
};

export default function BroodHillsPage() {
    return <BroodHillsLanding />;
}
