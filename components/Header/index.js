const Header = ({ cart }) => {
  return (
    <div className="h-20 flex items-center border-b-4 border-solid border-gray-300">
      <div className="flex items-center justify-between px-4 w-full">
        <h1 className="text-2xl font-semibold"> BEJAMAS_ </h1>
        <div>
          <img src="/shopping-cart.svg" alt="Shopping Cart" className="w-12" />
          {cart.length > 0 && (
            <p className="relative bottom-2 -mb-2 left-10 text-white text-sm bg-black flex items-center justify-center w-2 h-5 min-w-max p-2">
              {cart.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
