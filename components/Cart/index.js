import CartItems from "./components/CartItems";

const Cart = ({ products, clearCart, openCartModal, setOpenCartModal }) => {
  return (
    <div>
      <div
        onClick={() => setOpenCartModal(!openCartModal)}
        className="cursor-pointer"
      >
        <img src="/shopping-cart.svg" alt="Shopping Cart" className="w-12" />
        {products.length > 0 && (
          <p className="relative bottom-2 -mb-2 left-10 text-white text-sm bg-black flex items-center justify-center w-2 h-5 min-w-max p-2">
            {products.length}
          </p>
        )}
      </div>
      {openCartModal && (
        <div className="p-2 z-10 bg-white min-h-20 absolute right-8 top-20 w-60 border border-gray-400">
          <div className="flex justify-end">
            <p
              className="cursor-pointer"
              onClick={() => setOpenCartModal(false)}
            >
              X
            </p>
          </div>
          <div>
            {products.length > 0 ? (
              <>
                <CartItems products={products} />
                <div className="mt-4">
                  <button
                    className="w-full border-2 border-black h-9"
                    onClick={clearCart}
                  >
                    Clear
                  </button>
                </div>
              </>
            ) : (
              <div className='flex items-center justify-center h-12'>
                <h4><b>Cart is empty</b></h4>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
