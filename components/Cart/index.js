import CartItems from './CartItems';

const Cart = ({
  products, clearCart, openCartModal, setOpenCartModal,
}) => (
  <div>
    <button
      type="button"
      onClick={() => setOpenCartModal(!openCartModal)}
      className="cursor-pointer focus:outline-none"
    >
      <img src="/shopping-cart.svg" alt="Shopping Cart" className="w-12" />
      {products.length > 0 && (
      <p className="relative bottom-2 -mb-2 left-10 text-white text-sm bg-black flex items-center justify-center w-2 h-5 min-w-max p-2">
        {products.length}
      </p>
      )}
    </button>
    {openCartModal && (
    <div className="p-2 z-10 bg-white min-h-20 absolute right-8 top-20 w-60 sm:w-72 border border-gray-400">
      <div className="flex justify-end">
        <button
          className="cursor-pointer focus:outline-none"
          type="button"
          onClick={() => setOpenCartModal(false)}
        >
          X
        </button>
      </div>
      <div>
        {products.length > 0 ? (
          <>
            <CartItems products={products} />
            <div className="mt-4">
              <button
                className="w-full border-2 border-black h-9"
                onClick={clearCart}
                type="button"
              >
                Clear
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-12">
            <h4><b>Cart is empty</b></h4>
          </div>
        )}
      </div>
    </div>
    )}
  </div>
);

export default Cart;
