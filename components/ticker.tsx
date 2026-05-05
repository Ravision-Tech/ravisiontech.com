const ITEMS = ["Web Development", "Web Design", "E-Commerce", "SEO & Performance", "Maintenance", "Branding"];

const TickerSegment = () => {
  return (
    <div className="font-mono-brand text-[0.72rem] tracking-[0.12em] text-[#7a7a7a] uppercase whitespace-nowrap flex items-center gap-12">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-12">
          {item} <span className="text-[#6FC0CA] text-[0.9rem]">·</span>
        </span>
      ))}
    </div>
  );
};

const Ticker = () => {
  return (
    <div className="relative z-[1] border-t border-b border-[#222] py-[1.1rem] overflow-hidden bg-[#141414]">
      <div className="flex w-max animate-ticker gap-12">
        <TickerSegment />
        <TickerSegment />
        <TickerSegment />
        <TickerSegment />
      </div>
    </div>
  );
};

export default Ticker;
