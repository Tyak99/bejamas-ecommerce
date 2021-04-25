import { useState } from "react";
import Item from "../../components/Item/Item";

const Items = ({ saveItemToCart, products }) => {
  return (
    <div className='w-full'>
      {products.length > 0 ? (
        <div className="sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-20">
          {products.length > 0 &&
            products.map((item) => {
              return (
                <Item item={item} sendToCart={saveItemToCart} key={item.id} />
              );
            })}
        </div>
      ) : (
        <div className='flex items-center justify-center'>
          <h2>
            <b>No Product</b>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Items;
