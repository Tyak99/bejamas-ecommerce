import React from "react";
import SelectFilter from "./components/SelectFilter";

const WebFilter = ({
  categories,
  handleFilter,
  selectedCategories,
  priceRange,
  selectedPriceRange,
  setSelectedPriceRange,
}) => {
  return (
    <div className="hidden lg:block w-1.5/5">
      <SelectFilter
        categories={categories}
        handleFilter={handleFilter}
        selectedCategories={selectedCategories}
        priceRange={priceRange}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
      />
    </div>
  );
};

export default WebFilter;
