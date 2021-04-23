import { useState } from "react";
import Item from "../../components/Item/Item";

const Items = ({ saveItemToCart, products }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-20">
      {products.length > 0 &&
        products.map((item) => {
          return <Item item={item} sendToCart={saveItemToCart} key={item.id} />;
        })}
    </div>
  );
};

export default Items;
