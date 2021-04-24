import React from "react";

const SelectSort = ({ setSortBy, setSortByOrder, sortByOrder }) => {
  return (
    <div className="hidden lg:flex justify-between w-52">
      <p className="text-xl"> Sort By </p>
      <select name="sort" onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Select</option>
        <option value="alphabetically">Alphabetically</option>
        <option value="price">Price</option>
      </select>
      {sortByOrder === "desc" ? (
        <img
          src="./arrow-down.svg"
          alt="arrow down"
          className="w-4"
          onClick={() => setSortByOrder("asc")}
        />
      ) : (
        <img
          src="./arrow-up.svg"
          alt="arrow down"
          className="w-4"
          onClick={() => setSortByOrder("desc")}
        />
      )}
    </div>
  );
};

export default SelectSort;
