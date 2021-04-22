const Item = ({ item }) => {
  return (
    <div className="s:w-80 lg:w-72">
      {item.bestSeller && (
        <div className="h-8 bg-white w-36 flex justify-center items-center relative top-8 -mt-8">
          <p>Best Seller</p>
        </div>
      )}
      <img src={item.image} alt={item.alt} className="h-96 w-full" />
      <button className="bg-black text-white w-full h-12 text-lg">
        ADD TO CART
      </button>

      <div className="flex h-36 justify-around flex-col font-bold">
        <h4 className="text-gray-600"> {item.label} </h4>
        <h1 className="text-4xl">
          <b>{item.title}</b>
        </h1>
        <h2 className="text-gray-500">{`$${item.price}`}</h2>
      </div>
    </div>
  );
};

export default Item;