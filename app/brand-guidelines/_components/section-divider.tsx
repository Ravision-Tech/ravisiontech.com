export const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4">
    <span className="font-mono text-[0.7rem] font-bold tracking-[0.22em] text-primary uppercase">{label}</span>
    <div className="h-px flex-1 bg-border-muted" />
  </div>
);
