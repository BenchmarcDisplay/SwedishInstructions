function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search assembly instructions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
