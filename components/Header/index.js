import Cart from "../Cart";

const Header = ({ cart, clearCart, openCartModal, setOpenCartModal }) => {
  return (
    <div className="h-20 flex items-center border-b-4 border-solid border-gray-400">
      <div className="flex items-center justify-between px-4 w-full">
        <h1 className="text-2xl font-semibold"> BEJAMAS_ </h1>
        <Cart
          products={cart}
          clearCart={clearCart}
          openCartModal={openCartModal}
          setOpenCartModal={setOpenCartModal}
        />
      </div>
    </div>
  );
};

export default Header;
