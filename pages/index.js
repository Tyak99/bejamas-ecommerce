import Head from "next/head";
import { useEffect, useState } from "react";
import Featured from "../containers/Featured";
import Filter from "../containers/Filter";
import Header from "../components/Header";
import Items from "../containers/Items";

const products = [
  {
    id: "27389709875689283",
    name: "Samurai King Restling",
    category: "landmarks",
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
    name: "Fine Person",
    category: "man",
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

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState(null);

  const saveItemToCart = (item) => {
    const check = cartItems.findIndex((value) => {
      return value.id === item.id;
    });
    if (check === -1) {
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
    } else {
      console.log("Item already exist in the cart");
    }
  };

  useEffect(() => {
    const featured = products.find((item) => {
      return item.featured === true;
    });
    setFeaturedProduct(featured);
  }, [products]);

  return (
    <div className="container mx-auto">
      <Header cart={cartItems} />
      {featuredProduct && (
        <Featured saveItemToCart={saveItemToCart} product={featuredProduct} />
      )}
      <div>
        <div className="flex justify-between items-center">
          <h2>
            <b> Photography /</b> Premium Photos
          </h2>
          <div className="hidden lg:flex justify-between w-32">
            <p className="text-xl"> Sort By </p>
            <p className="text-xl"> Price </p>
          </div>
          <img src="/filter.svg" alt="Filter icon" className="w-7 lg:hidden" />
        </div>
        <div className="lg:flex mt-12">
          <Filter />
          <Items saveItemToCart={saveItemToCart} products={products} />
        </div>
      </div>
    </div>
  );
}
