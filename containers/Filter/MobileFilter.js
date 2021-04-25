import SelectFilter from "./components/SelectFilter";

const MobileFilter = ({
  categories,
  handleFilter,
  closeModal,
  clearFilter,
  selectedCategories,
  setSelectedPriceRange,
  selectedPriceRange,
  priceRange
}) => {
  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-70 z-50 flex items-end flex-end">
      <div className="h-5/6 bg-white w-screen p-4 pb-24 w-screen">
        <div className="overflow-scroll h-full">
          <div className="flex items-center mb-4">
            <h2>
              <b>Filter</b>
            </h2>
            <svg
              className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              onClick={closeModal}
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </div>

          <SelectFilter
            categories={categories}
            handleFilter={handleFilter}
            selectedCategories={selectedCategories}
            setSelectedPriceRange={setSelectedPriceRange}
            priceRange={priceRange}
            selectedPriceRange={selectedPriceRange}
          />
        </div>
        <div className="h-full grid grid-cols-2 gap-4 mt-8">
          <button
            className="w-full border border-black h-10"
            onClick={clearFilter}
          >
            Clear
          </button>
          <button
            className="bg-black text-white w-full h-10"
            onClick={closeModal}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
