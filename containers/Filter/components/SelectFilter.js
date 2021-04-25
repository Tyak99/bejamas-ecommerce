const SelectFilter = ({
  categories,
  handleFilter,
  selectedCategories = [],
  setPriceRange,
  priceRange,
}) => {
  console.log("🚀 ~ file: SelectFilter.js ~ line 8 ~ priceRange", priceRange);
  if (categories.length < 1) return null;

  const priceRangeFilter = [
    {
      title: "We Recommend",
      value: '',
    },
    {
      title: "Lower than $20",
      value: JSON.stringify({ lowerBoundary: 20 }),
    },
    {
      title: "$20 - $100",
      value: JSON.stringify({ lowerBoundary: 20, higherBoundary: 100 }),
    },
    {
      title: "$100 - $200",
      value: JSON.stringify({ lowerBoundary: 100, higherBoundary: 200 }),
    },
    {
      title: "More than $200",
      value: JSON.stringify({ higherBoundary: 200 }),
    },
  ];
  const handleSetPriceRange = (e) => {
    const value = e.target.value;
    setPriceRange({ selected: true, value });
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
        {priceRangeFilter.map((item) => {
          return (
            <div className="flex items-center mt-4" key={item.title}>
              <input
                type="radio"
                name="priceRange"
                value={item.value}
                onChange={handleSetPriceRange}
                checked={priceRange.value == item.value}
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
