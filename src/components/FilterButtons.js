function FilterButtons({ activeFilter, setActiveFilter }) {
  const filters = ["All", "pdf", "video"];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          className={
            activeFilter === filter ? "filter-button active" : "filter-button"
          }
          onClick={() => setActiveFilter(filter)}
        >
          {filter === "pdf" ? "PDFs" : filter === "video" ? "Videos" : "All"}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
