interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-2 font-mono-brand text-[0.65rem] tracking-[0.22em] text-[#3d3d3d] uppercase mb-12">
      <span className="text-[#6FC0CA]">//</span>
      <span className="text-[#6FC0CA]">{label}</span>
    </div>
  );
};

export default SectionLabel;
