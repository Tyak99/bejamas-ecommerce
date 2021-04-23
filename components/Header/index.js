import Cart from "../Cart";

const Header = ({ cart }) => {
  return (
    <div className="h-20 flex items-center border-b-4 border-solid border-gray-300">
      <div className="flex items-center justify-between px-4 w-full">
        <h1 className="text-2xl font-semibold"> BEJAMAS_ </h1>
        <Cart products={cart} />
      </div>
    </div>
  );
};

export default Header;
