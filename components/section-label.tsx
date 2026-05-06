interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-2 font-mono-brand text-[0.65rem] tracking-[0.22em] text-dim uppercase mb-12">
      <span className="text-primary">{"//"}</span>
      <span className="text-primary">{label}</span>
    </div>
  );
};

export default SectionLabel;
