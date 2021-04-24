import Head from "next/head";
import { useEffect, useState } from "react";
import Featured from "../containers/Featured";
import Header from "../components/Header";
import Items from "../containers/Items";
import MobileFilter from "../containers/Filter/MobileFilter";
import WebFilter from "../containers/Filter/WebFilter";
import SelectSort from "../components/Select";

const firebaseFeatureProduct = {
  id: "27389709875689283",
  name: "Samurai King Restling",
  category: "Landmarks",
  price: 101,
  currency: "USD",
  image: {
    src:
      "https://images.pexels.com/photos/144234/bull-landscape-nature-mammal-144234.jpeg?cs=srgb&dl=pexels-pixabay-144234.jpg&fm=jpg",
    alt: "bull",
  },
  bestseller: false,
  featured: true,
  details: {
    dimensions: {
      width: 1020,
      height: 1020,
    },
    size: 15000,
    description:
      "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scram",
    recommendations: [
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
      {
        src: "",
        alt: "",
      },
    ],
  },
};

const firebaseProducts = [
  {
    id: "27389709875689283",
    name: "Samurai King Restling",
    category: "Landmarks",
    price: 101,
    currency: "USD",
    image: {
      src:
        "https://images.pexels.com/photos/144234/bull-landscape-nature-mammal-144234.jpeg?cs=srgb&dl=pexels-pixabay-144234.jpg&fm=jpg",
      alt: "bull",
    },
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 15000,
      description:
        "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scram",
      recommendations: [
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
      ],
    },
  },

  {
    id: "273897283",
    name: "Fine Man",
    category: "People",
    price: 35.68,
    currency: "USD",
    image: {
      src:
        "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      alt: "bull",
    },
    bestseller: false,
    featured: false,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 15000,
      description:
        "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scram",
      recommendations: [
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
      ],
    },
  },
  {
    id: "asf3443423",
    name: "Graphy Queen",
    category: "People",
    price: 68.2,
    currency: "USD",
    image: {
      src:
        "https://images.pexels.com/photos/3863802/pexels-photo-3863802.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      alt: "bull",
    },
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 15000,
      description:
        "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scram",
      recommendations: [
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
      ],
    },
  },
];

const categories = [
  "People",
  "Premium",
  "Pets",
  "Food",
  "Landmarks",
  "Cities",
  "Nature",
  "Fres",
  "Muse",
  "Stool",
  "Justck",
];

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openMobileCategoryModal, setOpenMobileCategoryModal] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [sortByOrder, setSortByOrder] = useState("desc");

  const getProducts = () => {
    if (selectedCategories.length < 1) {
      return firebaseProducts;
    }
    return firebaseProducts.filter((item) => {
      return selectedCategories.includes(item.category.toLowerCase());
    });
  };

  useEffect(() => {
    const response = getProducts();
    if (sortBy) {
      const sortedProducts = handleSorting(response);
      setProducts(sortedProducts);
    } else {
      setProducts(response);
    }
  }, [selectedCategories]);

  useEffect(() => {
    setFeaturedProduct(firebaseFeatureProduct);
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
    <div className="container mx-auto">
      <Header
        cart={cartItems}
        openCartModal={openCartModal}
        setOpenCartModal={setOpenCartModal}
        clearCart={clearCart}
      />
      {featuredProduct && (
        <Featured saveItemToCart={saveItemToCart} product={featuredProduct} />
      )}
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

// . Clicking on arrows should change the order to 'ascending' or 'descending'.
// TODO: Fix the cart on mobile, move data to firebase and query from there
// when user changes category, query backend
// make all micro ui adjustments including geting svg for header name
// build in prod and test lighthouse score
