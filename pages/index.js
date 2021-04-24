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

const categories = [
  "People",
  "Nature",
  "Animals",
  "Food",
  "Landmarks",
  "Cosmetics",
  "Electronics",
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [sortByOrder, setSortByOrder] = useState("desc");
  const [cartItems, setCartItems] = useState([]);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openMobileCategoryModal, setOpenMobileCategoryModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getProducts = () => {
    return axios.get(`${firebaseUrl}/products.json`).then((res) => {
      const data = Object.values(res.data);
      if (selectedCategories.length < 1) {
        return data;
      }
      return data.filter((item) => {
        return selectedCategories.includes(item.category.toLowerCase());
      });
    });
  };

  useEffect(() => {
    getProducts().then((data) => {
      if (sortBy) {
        const sortedProducts = handleSorting(data);
        setProducts(sortedProducts);
      } else {
        setProducts(data);
      }
    });
  }, [selectedCategories]);

  useEffect(() => {
    axios.get(`${firebaseUrl}/featured-products.json`).then((res) => {
      const data = Object.values(res.data);
      setFeaturedProduct(data[0]);
    });
  }, []);

  // Use this to stop page scrolling when modal is open
  useEffect(() => {
    if (openMobileCategoryModal === true) {
      document.body.setAttribute(
        "style",
        "overflow: hidden; background-color: gray"
      );
    } else {
      document.body.setAttribute(
        "style",
        "overflow: auto; background-color: white"
      );
    }
  }, [openMobileCategoryModal]);

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

  useEffect(() => {
    if (!sortBy) return;
    const sortedProducts = handleSorting(products);
    setProducts(sortedProducts);
  }, [sortBy, sortByOrder]);

  return (
    <div className="mx-auto px-8">
      <Header
        cart={cartItems}
        openCartModal={openCartModal}
        setOpenCartModal={setOpenCartModal}
        clearCart={clearCart}
      />
      <Featured saveItemToCart={saveItemToCart} product={featuredProduct} />
      <div className="px-4 my-4">
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
            className="w-7 lg:hidden"
            onClick={() => setOpenMobileCategoryModal(true)}
          />
        </div>
        <div className="lg:flex mt-12">
          <WebFilter categories={categories} handleFilter={handleFilter} />
          <Items saveItemToCart={saveItemToCart} products={products} />
        </div>
      </div>
      {openMobileCategoryModal && (
        <MobileFilter
          categories={categories}
          handleFilter={handleFilter}
          closeModal={() => setOpenMobileCategoryModal(false)}
        />
      )}
    </div>
  );
}

// implement pagination
