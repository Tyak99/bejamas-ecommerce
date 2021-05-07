import { useEffect, useState } from 'react';
import axios from 'axios';
import Featured from '../components/Featured';
import Header from '../components/Header';
import Items from '../components/Items';
import MobileFilter from '../components/Filter/MobileFilter';
import WebFilter from '../components/Filter/WebFilter';
import SelectSort from '../components/Select';
import variables from '../variables';
import { filterProducts, handleSorting } from '../services/Product';

const Home = ({
  products, categories, priceRange, featuredProduct,
}) => {
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [sortBy, setSortBy] = useState(null);
  const [sortByOrder, setSortByOrder] = useState('desc');
  const [cartItems, setCartItems] = useState([]);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openMobileCategoryModal, setOpenMobileCategoryModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    selected: false,
  });

  useEffect(() => {
    if (selectedCategories.length < 1 && !selectedPriceRange.value) {
      setDisplayedProducts(products);
      return;
    }
    const filteredProducts = filterProducts(
      products,
      selectedCategories,
      selectedPriceRange,
    );
    const sortedProducts = handleSorting(filteredProducts, sortBy, sortByOrder);
    setDisplayedProducts(sortedProducts);
  }, [selectedCategories, products, selectedPriceRange]);

  // Use this to stop page body scrolling when modal is open
  useEffect(() => {
    if (openMobileCategoryModal === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openMobileCategoryModal]);

  useEffect(() => {
    if (!sortBy) return;
    const sortedProducts = handleSorting(
      displayedProducts,
      sortBy,
      sortByOrder,
    );
    setDisplayedProducts(sortedProducts);
  }, [sortBy, sortByOrder]);

  const saveItemToCart = (item) => {
    const check = cartItems.findIndex((value) => value.id === item.id);
    if (check === -1) {
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      setOpenCartModal(true);
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
        (item) => item !== category,
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
            <b> Photography /</b>
            Premium Photos
          </h4>
          <SelectSort
            setSortBy={setSortBy}
            sortByOrder={sortByOrder}
            setSortByOrder={setSortByOrder}
          />
          <button
            className="focus:outline-none lg:hidden"
            type="button"
            onClick={() => setOpenMobileCategoryModal(true)}
          >
            <img
              src="/filter.svg"
              alt="Filter icon"
              width="24px"
              height="24px"
            />
          </button>
        </div>
        <div className="lg:flex mt-12">
          <WebFilter
            categories={categories}
            handleFilter={handleCategorySelect}
            selectedCategories={selectedCategories}
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

export async function getServerSideProps() {
  const request = await axios.get(`${variables.firebaseUrl}/data.json`);
  const products = request.data;

  return {
    props: {
      featuredProduct: Object.values(products.featuredProducts)[0],
      products: Object.values(products.products),
      priceRange: Object.values(products.filter.priceRange),
      categories: Object.values(products.filter.categories),
    },
  };
}

export default Home;
