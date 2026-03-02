import type { Metadata } from "next";
import InvestmentModulePage from "@/components/broodhills/investment-module";

export const metadata: Metadata = {
    title: "Investment Module | Brood Hills Global",
    description: "Access structured commodity trade finance investment opportunities across Africa. Institutional-grade returns, bank-instrument backed, fully compliant.",
};

export default function InvestRoute() {
    return <InvestmentModulePage />;
}
