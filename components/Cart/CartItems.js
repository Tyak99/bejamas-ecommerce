const CartItems = ({ products }) => (
  <div>
    {products.map((item) => (
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
              className="w-24 h-16"
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CartItems;
