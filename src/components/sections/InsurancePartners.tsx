export default function InsurancePartners() {
  const insurers = [
    "Geico", "State Farm", "Allstate", "Progressive", "Liberty Mutual", "USAA", "Farmers", "Nationwide"
  ];
  return (
    <section className="py-12 bg-[#141210] border-y border-[#38332C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-[#A8A093] mb-8">
          We Work With All Major Insurance Providers
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {insurers.map((name) => (
            <div
              key={name}
              className="px-6 py-3 rounded-full border border-[#38332C] bg-[#1A1815] text-[#A8A093] text-sm font-semibold hover:border-accent/50 hover:text-accent transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
