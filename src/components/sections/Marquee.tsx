export default function Marquee({ items }: { items: { name: string; logo: string }[] }) {
  if (!items || items.length === 0) return null;

  // Duplicate items to ensure smooth infinite scrolling
  const scrollItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#1A1815] py-12 border-y border-[#38332C] overflow-hidden relative flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1815] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1815] to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-marquee hover:animation-paused">
        {scrollItems.map((item, i) => (
          <div key={i} className="flex-shrink-0 flex items-center justify-center px-12 md:px-24 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            {/* If it's just a placeholder icon path, render img */}
            <img src={item.logo} alt={item.name} className="h-10 md:h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
