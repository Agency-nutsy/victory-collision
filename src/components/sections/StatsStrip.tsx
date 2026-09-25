export default function StatsStrip() {
  const marqueeItems = [
    "EXPERT COLLISION REPAIR",
    "LIFETIME WARRANTY",
    "DIRECT INSURANCE BILLING",
    "5-STAR RATED",
    "OEM PARTS",
    "FREE ESTIMATES",
  ];

  return (
    <section className="py-6 bg-accent overflow-hidden border-y border-[#38332C]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
      
      <div className="relative flex whitespace-nowrap bg-accent">
        <div className="animate-marquee flex items-center">
          {/* We duplicate the items 4 times to ensure it fills the screen and scrolls seamlessly */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center text-[#1A1815]">
                  <span className="text-xl md:text-2xl font-black font-heading tracking-widest px-8">
                    {item}
                  </span>
                  <span className="text-[#1A1815]/30">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
