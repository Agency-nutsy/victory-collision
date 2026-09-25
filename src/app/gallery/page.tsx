import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Our Work",
  description: "View our portfolio of collision repair, auto body, and detailing transformations.",
};

export default function GalleryPage() {
  const images = siteConfig.galleryImages || [];

  return (
    <div className="pt-32 pb-24 bg-[#141210] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#F5F1EA] mb-6">Our Work</h1>
          <p className="text-xl text-[#A8A093] max-w-2xl mx-auto">
            A showcase of our recent repairs, restorations, and transformations. We let our results speak for themselves.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => {
              const url = img.afterUrl || img.beforeUrl;
              const isVideo = url?.toLowerCase().endsWith(".mp4");
              return (
                <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-2xl bg-[#1A1815] border border-[#38332C]">
                  {isVideo ? (
                    <video
                      src={url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={url}
                      alt={img.alt || "Auto repair gallery image"}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[#F5F1EA] font-semibold text-lg">{img.alt || "Restoration Project"}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-[#A8A093] text-xl">Gallery images coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
