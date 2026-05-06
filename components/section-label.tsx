interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="font-mono-brand mb-12 flex items-center gap-2 text-[1rem] font-bold tracking-[0.22em] text-dim uppercase">
      {/* <span className="text-primary">{"//"}</span> */}
      {/* <span className="text-primary">{label}</span> */}
      <span className="text-primary">{label}</span>
    </div>
  );
};

export default SectionLabel;
