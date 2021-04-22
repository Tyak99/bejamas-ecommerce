const Header = () => {
  return (
    <div className='h-20 flex items-center border-b-4 border-solid border-gray-300'>
      <div className="flex justify-between px-4 w-full">
        <h1 className='text-xl font-semibold'> MOYIN_ </h1>
        <img src="/shopping-cart.svg" alt="Shopping Cart" className="w-7" />
      </div>
    </div>
  );
};

export default Header;
