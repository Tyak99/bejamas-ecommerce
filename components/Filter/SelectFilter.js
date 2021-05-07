import axios from "axios";
import { useEffect } from "react";

const SelectFilter = ({
  categories,
  handleFilter,
  selectedCategories = [],
  priceRange,
  selectedPriceRange,
  setSelectedPriceRange
}) => {
  if (categories.length < 1) return null;

  const handleSetPriceRange = (e) => {
    const value = JSON.parse(e.target.value);
    setSelectedPriceRange({ selected: true, ...value });
  };

  return (
    <>
      <h4>
        <b>Category</b>
      </h4>
      <div className="mt-4">
        {categories.map((item) => {
          return (
            <div className="flex items-center mt-4" key={item.id}>
              <input
                type="checkbox"
                value={item.name}
                name={item.name.toLowerCase()}
                onChange={(e) => handleFilter(e)}
                checked={selectedCategories.includes(item.name.toLowerCase())}
              />
              <h4 className="ml-4">{item.name}</h4>
            </div>
          );
        })}
      </div>
      <hr className="mt-8 w-4/5" />
      <h4 className="mt-8">
        <b>Price range</b>
      </h4>
      <div className="mt-4">
        {priceRange.map((item) => {
          return (
            <div className="flex items-center mt-4" key={item.title}>
              <input
                type="radio"
                name="priceRange"
                value={JSON.stringify(item)}
                onChange={handleSetPriceRange}
                checked={selectedPriceRange.title == item.title}
                key={`${item.title} ${selectedPriceRange.title} === ${item.title}`}
              />
              <h4 className="ml-4">{item.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectFilter;
