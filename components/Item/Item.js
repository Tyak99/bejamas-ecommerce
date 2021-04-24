const Item = ({ item, sendToCart }) => {
  return (
    <div className="group s:w-80 lg:w-72 mb-8">
      {item.bestseller && (
        <div className="h-8 bg-white w-36 flex justify-center items-center relative top-8 -mt-8">
          <p>Best Seller</p>
        </div>
      )}
      <img src={item.image.src} alt={item.image.alt} className="h-112 w-full" />
      <button
        className="sm:hidden group-hover:block bg-black text-white w-full h-12 text-lg block relative bottom-12 -mb-12"
        onClick={() => sendToCart(item)}
      >
        ADD TO CART
      </button>

      <div className="flex h-28 justify-around flex-col font-bold">
        <h4 className="text-gray-600"> {item.category} </h4>
        <h1 className="text-3xl">
          <b>{item.name}</b>
        </h1>
        <h2 className="text-gray-500">{`$${item.price}`}</h2>
      </div>
    </div>
  );
};

export default Item;
