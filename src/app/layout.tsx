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
        {/* 
          Inline JS loader — runs immediately during HTML parsing, before React/CSS bundles load.
          This prevents any flash of unstyled content (FOUC) on initial page load.
          Sets window.__vcLoaderActive so the React LoadingScreen knows to skip on first load.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
if(location.pathname!=='/')return;
window.__vcLoaderActive=true;
try{
  var lk=document.createElement('link');
  lk.rel='preload';
  lk.as='video';
  lk.href='/videos/hero.mp4';
  lk.type='video/mp4';
  document.head.appendChild(lk);
  var pv=document.createElement('video');
  pv.src='/videos/hero.mp4';
  pv.preload='auto';
  pv.muted=true;
  pv.playsInline=true;
  pv.load();
}catch(e){}
var n=${JSON.stringify(siteConfig.businessName)};
var pts=n.split(' & ');
var el=document.createElement('div');
el.id='__vcl';
el.setAttribute('style','position:fixed;inset:0;z-index:9999;background:#141210;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;transition:opacity .5s ease;');
var html='<div style="text-align:center;margin-bottom:40px">';
html+='<div style="color:#F5F1EA;font-size:clamp(1.4rem,3.5vw,2.2rem);font-weight:700;letter-spacing:.1em;text-transform:uppercase">'+pts[0]+'</div>';
if(pts[1])html+='<div style="color:#B8935F;font-size:.72rem;letter-spacing:.35em;text-transform:uppercase;margin-top:8px">&amp; '+pts[1]+'</div>';
html+='</div>';
html+='<div style="width:min(300px,75vw);height:2px;background:rgba(255,255,255,.08);border-radius:9999px;overflow:hidden">';
html+='<div id="__vcbar" style="height:100%;width:0;background:#B8935F;border-radius:9999px"></div>';
html+='</div>';
html+='<div style="color:#3A3530;font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;margin-top:14px">Loading Experience</div>';
el.innerHTML=html;
document.body.insertBefore(el,document.body.firstChild);
var bar=document.getElementById('__vcbar');
function w(p,t,e){if(!bar)return;bar.style.transition='width '+t+'ms '+e;bar.style.width=p+'%';}
setTimeout(function(){w(68,1100,'cubic-bezier(.25,.46,.45,.94)');},80);
setTimeout(function(){w(88,1400,'cubic-bezier(.65,0,.35,1)');},1200);
setTimeout(function(){w(100,600,'cubic-bezier(.33,1,.68,1)');},2600);
setTimeout(function(){el.style.opacity='0';el.style.pointerEvents='none';},3000);
setTimeout(function(){window.__vcLoaderActive=false;if(el.parentNode)el.parentNode.removeChild(el);},3500);
})();`,
          }}
        />

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
