const ITEMS = ["Web Development", "Web Design", "E-Commerce", "SEO & Performance", "Maintenance", "Branding"];

const TickerSegment = () => {
  return (
    <div className="font-mono-brand text-[0.72rem] tracking-[0.12em] text-muted-foreground uppercase whitespace-nowrap flex items-center gap-12 select-none">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-12">
          {item} <span className="text-primary text-[0.9rem]">·</span>
        </span>
      ))}
    </div>
  );
};

const Ticker = () => {
  return (
    <div className="relative z-[1] border-t border-b border-border py-[1.1rem] overflow-hidden bg-card">
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
