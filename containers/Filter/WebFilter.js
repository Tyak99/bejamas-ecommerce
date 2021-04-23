import React from "react";
import SelectFilter from "./components/SelectFilter";

const WebFilter = ({ categories, handleFilter }) => {
  return (
    <div className="hidden lg:block w-1.5/5">
      <SelectFilter categories={categories} handleFilter={handleFilter} />
    </div>
  );
};

export default WebFilter;
