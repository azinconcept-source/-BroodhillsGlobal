import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { META_THEME_COLORS } from "@/config/site";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Brood Hills Global",
  description: "Institutional-grade energy market infrastructure for sub-Saharan Africa's growing trade economy.",
  applicationName: "BroodHills Global",
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: META_THEME_COLORS.light,
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: META_THEME_COLORS.dark,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geist.variable, geist.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
