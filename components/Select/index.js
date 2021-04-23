import React from "react";

const SelectSort = ({ handleSorting }) => {
  return (
    <div className="hidden lg:flex justify-between w-48">
      <p className="text-xl"> Sort By </p>
      <select name="sort" onChange={(e) => handleSorting(e.target.value)}>
        <option value="">Select</option>
        <option value="alphabetically">Alphabetically</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default SelectSort;
