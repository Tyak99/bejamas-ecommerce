import React from "react";
import SelectFilter from "./components/SelectFilter";

const WebFilter = ({
  categories,
  handleFilter,
  selectedCategories,
  setPriceRange,
  priceRange,
}) => {
  return (
    <div className="hidden lg:block w-1.5/5">
      <SelectFilter
        categories={categories}
        handleFilter={handleFilter}
        selectedCategories={selectedCategories}
        setPriceRange={setPriceRange}
        priceRange={priceRange}
      />
    </div>
  );
};

export default WebFilter;
