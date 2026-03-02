import type { Metadata } from "next";
import OurTeamPage from "@/components/broodhills/our-team";

export const metadata: Metadata = {
    title: "Our Team | Brood Hills Global",
    description: "Meet the experienced trade finance professionals, compliance experts, and commodity market specialists driving BroodHUB's mission across Africa.",
};

export default function TeamRoute() {
    return <OurTeamPage />;
}
