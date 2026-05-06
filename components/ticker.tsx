const ITEMS = ["Web Development", "Web Design", "E-Commerce", "SEO & Performance", "Maintenance", "Branding"];

const TickerSegment = () => {
  return (
    <div className="font-mono-brand text-muted-foreground flex items-center gap-12 text-[0.72rem] tracking-[0.12em] whitespace-nowrap uppercase select-none">
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
    <div className="border-border bg-card relative z-[1] overflow-hidden border-t border-b py-[1.1rem]">
      <div className="animate-ticker flex w-max gap-12">
        <TickerSegment />
        <TickerSegment />
        <TickerSegment />
        <TickerSegment />
      </div>
    </div>
  );
};

export default Ticker;
