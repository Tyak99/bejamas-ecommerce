import React from "react";
import SelectFilter from "./components/SelectFilter";

const WebFilter = ({ categories, handleFilter, selectedCategories }) => {
  return (
    <div className="hidden lg:block w-1.5/5">
      <SelectFilter categories={categories} handleFilter={handleFilter} selectedCategories={selectedCategories} />
    </div>
  );
};

export default WebFilter;
