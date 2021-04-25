import Head from "next/head";
import { useEffect, useState } from "react";
import Featured from "../containers/Featured";
import Header from "../components/Header";
import Items from "../containers/Items";
import MobileFilter from "../containers/Filter/MobileFilter";
import WebFilter from "../containers/Filter/WebFilter";
import SelectSort from "../components/Select";
import axios from "axios";
import { firebaseUrl } from "../variables";
import SelectFilter from "../containers/Filter/components/SelectFilter";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [sortByOrder, setSortByOrder] = useState("desc");
  const [cartItems, setCartItems] = useState([]);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openMobileCategoryModal, setOpenMobileCategoryModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    selected: false,
  });

  const getProducts = () => {
    return axios.get(`${firebaseUrl}/products.json`).then((res) => {
      const data = Object.values(res.data);
      setProducts(data);
      setDisplayedProducts(data);
    });
  };

  useEffect(() => {
    axios.get(`${firebaseUrl}/featured-products.json`).then((res) => {
      const data = Object.values(res.data);
      setFeaturedProduct(data[0]);
    });
    axios.get(`${firebaseUrl}/categories.json`).then((res) => {
      const data = Object.values(res.data);
      setCategories(data);
    });
    getProducts();
    axios.get(`${firebaseUrl}/filter.json`).then((res) => {
      const data = Object.values(res.data["price-range"]);
      setPriceRange(data);
    });
  }, []);

  useEffect(() => {
    const data = [...products];
    if (selectedCategories.length < 1 && !selectedPriceRange.value) {
      setDisplayedProducts(data);
      return;
    }
    const filteredProducts = data.filter((item) => {
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
          !priceRangeValue.lowerBoundary &&
          priceRangeValue.higherBoundary
        ) {
          result = item.price > priceRangeValue.higherBoundary;
        } else {
          result =
            item.price > priceRangeValue.lowerBoundary &&
            item.price < priceRangeValue.higherBoundary;
        }
      }
      return result;
    });

    setDisplayedProducts(handleSorting(filteredProducts));
  }, [selectedCategories, products, selectedPriceRange]);

  // Use this to stop page scrolling when modal is open
  useEffect(() => {
    if (openMobileCategoryModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileCategoryModal]);

  useEffect(() => {
    if (!sortBy) return;
    const sortedProducts = handleSorting(displayedProducts);
    setDisplayedProducts(sortedProducts);
  }, [sortBy, sortByOrder]);

  const saveItemToCart = (item) => {
    const check = cartItems.findIndex((value) => {
      return value.id === item.id;
    });
    if (check === -1) {
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      setOpenCartModal(true);
    } else {
      console.log("Item already exist in the cart");
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setOpenCartModal(false);
  };

  const handleFilter = (e) => {
    const category = e.target.name;
    const isChecked = e.target.checked;

    let updatedSelectedCategories;
    if (isChecked) {
      updatedSelectedCategories = [...selectedCategories, category];
    } else {
      updatedSelectedCategories = [...selectedCategories].filter(
        (item) => item !== category
      );
    }
    setSelectedCategories(updatedSelectedCategories);
  };

  const clearFilter = () => {
    setSelectedCategories([]);
  };

  const handlePriceSorting = (products) => {
    const sortedProducts = [...products].sort((a, b) => {
      return sortByOrder === "desc" ? a.price - b.price : b.price - a.price;
    });
    return sortedProducts;
  };

  const handleAlphabeticalSorting = (products) => {
    const sortedProducts = [...products].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return sortByOrder === "desc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortByOrder === "desc" ? 1 : -1;
      }
      return 0;
    });

    return sortedProducts;
  };

  const handleSorting = (products) => {
    if (sortBy === "alphabetically") {
      return handleAlphabeticalSorting(products);
    } else if (sortBy === "price") {
      return handlePriceSorting(products);
    }
    return products;
  };

  return (
    <div className="mx-auto px-8">
      <Header
        cart={cartItems}
        openCartModal={openCartModal}
        setOpenCartModal={setOpenCartModal}
        clearCart={clearCart}
      />
      <Featured saveItemToCart={saveItemToCart} product={featuredProduct} />
      <div>
        <div className="flex justify-between items-center">
          <h4>
            <b> Photography /</b> Premium Photos
          </h4>
          <SelectSort
            setSortBy={setSortBy}
            sortByOrder={sortByOrder}
            setSortByOrder={setSortByOrder}
          />
          <img
            src="/filter.svg"
            alt="Filter icon"
            width="24px"
            height="24px"
            className="lg:hidden"
            onClick={() => setOpenMobileCategoryModal(true)}
          />
        </div>
        <div className="lg:flex mt-12">
          <WebFilter
            categories={categories}
            handleFilter={handleFilter}
            selectedCategories={selectedCategories}
            setPriceRange={setPriceRange}
            priceRange={priceRange}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
          />
          <Items saveItemToCart={saveItemToCart} products={displayedProducts} />
        </div>
      </div>
      {openMobileCategoryModal && (
        <MobileFilter
          categories={categories}
          handleFilter={handleFilter}
          closeModal={() => setOpenMobileCategoryModal(false)}
          clearFilter={clearFilter}
          selectedCategories={selectedCategories}
          priceRange={priceRange}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
        />
      )}
    </div>
  );
}

// move category to backend
// implement pagination
// upload to netlify
