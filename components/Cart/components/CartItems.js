const CartItems = ({ products }) => {
  return (
    <div>
      {products.map((item) => {
        return (
          <div className="mt-2">
            <div className="grid grid-cols-2 border-b">
              <div>
                <p>
                  <b>{item.name}</b>
                </p>
                <p className="text-gray-500">{`$${item.price}`}</p>
              </div>
              <div className="flex justify-end">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;