import "./styles.css";
import "./InstructionCard.css";

import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import FilterButtons from "./components/FilterButtons";
import InstructionGrid from "./components/InstructionGrid";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const [instructionsData, setInstructionsData] = useState([]);

  useEffect(() => {
    fetch("/instructions.json")
      .then((response) => response.json())
      .then((data) => {
        setInstructionsData(data);
      })
      .catch((error) => {
        console.error("Error loading instructions.json:", error);
      });
  }, []);

  const categories = [
    "RACKS",
    "SPLITTING RAILS",
    "ZYN-X",
    "ZYN ZONE 2.0",
    "ZYN ZONE 2.1",
    "COMPETITIVE SHELVING",
  ];

  const instructions = instructionsData.flatMap((categoryGroup) =>
    categoryGroup.items.map((item) => ({
      ...item,
      category: categoryGroup.category,
    })),
  );

  const filteredInstructions = instructions.filter((instruction) => {
    const matchesCategory =
      activeCategory === "ALL" || instruction.category === activeCategory;

    const matchesSearch = instruction.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesType =
      activeFilter === "All" || instruction.type === activeFilter;

    return matchesCategory && matchesSearch && matchesType;
  });

  return (
    <div className="app-layout">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="main-content">
        <div className="topbar">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <FilterButtons
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>

        <InstructionGrid instructions={filteredInstructions} />
      </main>
    </div>
  );
}

export default App;
