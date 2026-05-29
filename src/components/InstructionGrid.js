import InstructionCard from "./InstructionCard";

function InstructionGrid({ instructions }) {
  return (
    <div className="instruction-grid">
      {instructions.map((instruction) => (
        <InstructionCard
          key={instruction.id}
          title={instruction.title}
          image={instruction.image}
          file={instruction.file}
          iconImage={instruction.iconImage}
          metaLabel={instruction.metaLabel}
          metaValue={instruction.metaValue}
        />
      ))}
    </div>
  );
}

export default InstructionGrid;
