function Sidebar({
  categories = [],
  activeCategory = "ALL",
  onCategoryChange = () => {},
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo-wrap">
        <img
          src="/images/PMILogo.png"
          alt="PMI U.S. Sales and Distribution"
          className="sidebar-logo"
        />
      </div>
      <nav className="sidebar-nav">
        <button
          type="button"
          className={
            activeCategory === "ALL"
              ? "sidebar-nav-item active"
              : "sidebar-nav-item"
          }
          onClick={() => onCategoryChange("ALL")}
        >
          ALL INSTRUCTIONS
        </button>

        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={
              activeCategory === category
                ? "sidebar-nav-item active"
                : "sidebar-nav-item"
            }
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className="sidebar-support">
        <div className="sidebar-support-icon">?</div>

        <div>
          <div className="sidebar-support-title">Need help?</div>

          <a
            href="https://www.benchmarc.com/swedishsupport/index.html"
            className="sidebar-support-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Contact Support
          </a>
        </div>
      </div>{" "}
    </aside>
  );
}

export default Sidebar;
