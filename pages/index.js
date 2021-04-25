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
import { filterProducts, handleSorting } from "../services/Product";

const Home = () => {
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

  useEffect(() => {
    axios.get(`${firebaseUrl}/data.json`).then((res) => {
      const { featuredProducts, products, filter } = res.data;

      setFeaturedProduct(Object.values(featuredProducts)[0]);
      setPriceRange(Object.values(filter.priceRange));
      setCategories(Object.values(filter.categories));
      setProducts(Object.values(products));
      setDisplayedProducts(Object.values(products));
    });
  }, []);

  useEffect(() => {
    if (selectedCategories.length < 1 && !selectedPriceRange.value) {
      setDisplayedProducts(products);
      return;
    }
    const filteredProducts = filterProducts(
      products,
      selectedCategories,
      selectedPriceRange
    );
    const sortedProducts = handleSorting(filteredProducts, sortBy, sortByOrder);
    setDisplayedProducts(sortedProducts);
  }, [selectedCategories, products, selectedPriceRange]);

  // Use this to stop page body scrolling when modal is open
  useEffect(() => {
    if (openMobileCategoryModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileCategoryModal]);

  useEffect(() => {
    if (!sortBy) return;
    const sortedProducts = handleSorting(
      displayedProducts,
      sortBy,
      sortByOrder
    );
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

  const handleCategorySelect = (e) => {
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
    setSelectedPriceRange({ selected: false });
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
            handleFilter={handleCategorySelect}
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
          handleFilter={handleCategorySelect}
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
};

export default Home;

// implement pagination
// upload to netlify
