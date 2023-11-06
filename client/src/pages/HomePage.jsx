/* eslint-disable react/prop-types */
import Trending from "../components/Trending";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Filtered from "../components/Filtered";
import { useState } from "react";
import { categories } from "../data/categoryData";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const handleSelect = (id) => {
    setSelectedCategory(categories[id].name);
  };

  return (
    <>
      <div className="row">
        <div className="col-3">
          <Sidebar selected={selectedCategory} onSelect={handleSelect} />
        </div>
        <div className="col">
          <Hero />
          {selectedCategory !== "" && <Filtered selected={selectedCategory} />}
          <Featured />
          <Trending />
        </div>
      </div>
    </>
  );
}

export default HomePage;
