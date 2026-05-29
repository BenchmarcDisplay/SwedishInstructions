function InstructionCard({
  title,
  image,
  file,
  iconImage,
  metaLabel,
  metaValue,
}) {
  const openFile = () => {
    window.open(file, "_blank", "noopener,noreferrer");
  };

  return (
    <button className="instruction-card" onClick={openFile}>
      <div className="instruction-card-title-row">
        <div className="instruction-card-title">{title}</div>
      </div>

      <div className="instruction-card-content-row">
        <div className="instruction-card-image-column">
          <img src={image} alt={title} className="instruction-card-image" />
        </div>

        <div className="instruction-card-info-column">
          <img
            src={iconImage}
            alt={metaLabel}
            className="instruction-card-icon"
          />

          <div className="instruction-card-meta-value">{metaValue}</div>
        </div>
      </div>
    </button>
  );
}

export default InstructionCard;
