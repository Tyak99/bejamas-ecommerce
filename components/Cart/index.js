import CartItems from "./components/CartItems";

const Cart = ({ products }) => {
  return (
    <div>
      <div>
        <img src="/shopping-cart.svg" alt="Shopping Cart" className="w-12" />
        {products.length > 0 && (
          <p className="relative bottom-2 -mb-2 left-10 text-white text-sm bg-black flex items-center justify-center w-2 h-5 min-w-max p-2">
            {products.length}
          </p>
        )}
      </div>
      <div className="p-2 bg-white w-52 min-h-20 absolute right-4 md:right-24 md:w-60 border border-gray-400">
        <div className="flex justify-end">
          <p>X</p>
        </div>
        <CartItems products={products} />
        <div className="mt-4">
          <button className="w-full border-2 border-black h-9">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;