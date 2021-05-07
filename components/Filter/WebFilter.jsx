import React from 'react';
import PropTypes from 'prop-types';
import SelectFilter from './SelectFilter';

const WebFilter = ({
  categories,
  handleFilter,
  selectedCategories,
  priceRange,
  selectedPriceRange,
  setSelectedPriceRange,
}) => (
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

WebFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFilter: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  // priceRange: PropTypes.arrayOf()
  setSelectedPriceRange: PropTypes.func.isRequired,
};
export default WebFilter;
