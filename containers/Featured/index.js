import React from "react";

let Featured = ({ product, saveItemToCart }) => {
  if (!product) return null;

  return (
    <div className="px-4 my-4 border-b-4 border-solid border-gray-400">
      <div className="flex justify-between items-center">
        <b>
          <h2> {product.name} </h2>
        </b>
        <div>
          <button
            className="hidden sm:block bg-black text-white h-12 text-lg w-44"
            onClick={() => saveItemToCart(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="mt-4">
        <img
          src={product.image.src}
          alt={product.image.alt}
          width="100%"
          className="h-52 sm:h-112 lg:h-168"
          height="35rem"
        />
        <div className="h-12 bg-gray-200 w-44 flex justify-center items-center relative bottom-12 -mb-8">
          <p> Photo of the day </p>
        </div>
      </div>

      <div>
        <button
          className="sm:hidden bg-black text-white w-full h-12 text-lg"
          onClick={() => saveItemToCart(product)}
        >
          ADD TO CART
        </button>
      </div>

      <div className="md:grid grid-cols-2 gap-16">
        <div className="my-4">
          <b>
            <h4>{`About ${product.name}`}</h4>
          </b>
          <p className="my-6">{product.details.description}</p>
        </div>

        <div className="md:flex flex-col items-end">
          <b>
            <h4 className="md:text-right"> People also buy </h4>
          </b>
          <div className="grid grid-cols-3 gap-4 my-6 max-w-sm">
            <img
              src="https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="room"
              className="w-32 h-36"
            />
            <img
              src="https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="nature"
              className="w-32 h-36"
            />
            <img
              src="https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="art"
              className="w-32 h-36"
            />
          </div>

          <h4 className="md:text-right">
            <b> Details </b>
          </h4>
          <div className="my-6 md:text-right">
            <p className="text-xl font-light">{`Size: ${product.details.dimensions.width} x ${product.details.dimensions.height} pixels`}</p>
            <p className="text-xl font-light">{`Size: ${product.details.size}mb`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Featured = React.memo(Featured);

export default Featured;
