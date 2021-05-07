import React from 'react';

const SelectSort = ({ setSortBy, setSortByOrder, sortByOrder }) => (
  <div className="hidden lg:flex justify-between w-52">
    <p className="text-xl"> Sort By </p>
    <select name="sort" onChange={(e) => setSortBy(e.target.value)}>
      <option value="">Select</option>
      <option value="alphabetically">Alphabetically</option>
      <option value="price">Price</option>
    </select>
    {sortByOrder === 'desc' ? (
      <button
        onClick={() => setSortByOrder('asc')}
        type="button"
        className="focus:outline-none"
      >
        <img
          src="./arrow-down.svg"
          alt="arrow down"
          className="w-4"

        />
      </button>
    ) : (
      <button
        type="button"
        className="focus:outline-none"
        onClick={() => setSortByOrder('desc')}
      >
        <img
          src="./arrow-up.svg"
          alt="arrow down"
          className="w-4"

        />
      </button>
    )}
  </div>
);

export default SelectSort;
