const handlePriceSorting = (products, sortByOrder) => {
  const sortedProducts = [...products].sort((a, b) => (sortByOrder === 'desc' ? a.price - b.price : b.price - a.price));
  return sortedProducts;
};

const handleAlphabeticalSorting = (products, sortByOrder) => {
  const sortedProducts = [...products].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return sortByOrder === 'desc' ? -1 : 1;
    }
    if (nameA > nameB) {
      return sortByOrder === 'desc' ? 1 : -1;
    }
    return 0;
  });

  return sortedProducts;
};

const handleSorting = (products, sortBy, sortByOrder) => {
  if (sortBy === 'alphabetically') {
    return handleAlphabeticalSorting(products, sortByOrder);
  } if (sortBy === 'price') {
    return handlePriceSorting(products, sortByOrder);
  }
  return products;
};

const filterProducts = (products, selectedCategories, selectedPriceRange) => [...products].filter((item) => {
  let result;
  if (!selectedCategories.length < 1) {
    result = selectedCategories.includes(item.category.toLowerCase());
    if (!result) return result;
  }
  if (selectedPriceRange.value) {
    const priceRangeValue = selectedPriceRange.value;
    if (priceRangeValue.lowerBoundary && !priceRangeValue.higherBoundary) {
      result = item.price < priceRangeValue.lowerBoundary;
    } else if (
      !priceRangeValue.lowerBoundary
        && priceRangeValue.higherBoundary
    ) {
      result = item.price > priceRangeValue.higherBoundary;
    } else {
      result = item.price >= priceRangeValue.lowerBoundary
          && item.price <= priceRangeValue.higherBoundary;
    }
  }
  return result;
});

export { handleSorting, filterProducts };
