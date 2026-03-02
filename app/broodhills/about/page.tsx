import type { Metadata } from "next";
import AboutUsPage from "@/components/broodhills/about-us";

export const metadata: Metadata = {
    title: "About Us | Brood Hills Global",
    description: "Learn about Brood Hills Global — Africa's premier structured energy trade facilitation firm. Our mission, history, values, and the team behind $8.4B+ in deal flow.",
};

export default function AboutPage() {
    return <AboutUsPage />;
}
