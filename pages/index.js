import Head from "next/head";
import { useEffect, useState } from "react";
import Featured from "../containers/Featured";
import Header from "../components/Header";
import Items from "../containers/Items";
import MobileFilter from "../containers/Filter/MobileFilter";
import WebFilter from "../containers/Filter/WebFilter";

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
];

const categories = [
  "People",
  "Premium",
  "Pets",
  "Food",
  "Landmarks",
  "Cities",
  "Nature",
];

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openMobileCategoryModal, setOpenMobileCategoryModal] = useState(false);

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
    setProducts(response);
  }, [selectedCategories]);

  useEffect(() => {
    setFeaturedProduct(firebaseFeatureProduct);
  }, []);

  // Use this to stop page scrolling when modal is open
  useEffect(() => {
    if (openMobileCategoryModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
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
      <div className='px-4 my-4'>
        <div className="flex justify-between items-center">
          <h4>
            <b> Photography /</b> Premium Photos
          </h4>
          <div className="hidden lg:flex justify-between w-32">
            <p className="text-xl"> Sort By </p>
            <p className="text-xl"> Price </p>
          </div>
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
