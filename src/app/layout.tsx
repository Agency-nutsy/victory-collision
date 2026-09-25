import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Roboto, Cinzel } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const roboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

const fontMap: Record<string, string> = {
  "Inter": inter.variable,
  "Outfit": outfit.variable,
  "Playfair Display": playfair.variable,
  "Roboto": roboto.variable,
  "Cinzel": cinzel.variable,
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.businessName}`,
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
  },
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${fontMap[siteConfig.fonts?.body || "Inter"]} ${fontMap[siteConfig.fonts?.heading || "Outfit"]} font-sans antialiased text-base bg-primary selection:bg-accent selection:text-primary`}
        style={{
          "--primary-color": siteConfig.brandColors.primary || "#1A1815",
          "--secondary-color": siteConfig.brandColors.secondary || "#A8A093",
          "--accent-color": siteConfig.brandColors.accent || "#B8935F",
          "--neutral-base": siteConfig.brandColors.neutralBase || "#F5F1EA",
          "--surface-color": "#24211D",
          "--surface-input": "#2A2621",
          "--border-dark": "#38332C",
          backgroundColor: siteConfig.brandColors.primary || "#1A1815",
          color: siteConfig.brandColors.neutralBase || "#F5F1EA",
        } as React.CSSProperties}
      >
        <NoiseOverlay />

        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingCallButton />
      </body>
    </html>
  );
}
