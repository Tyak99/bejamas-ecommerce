import { useState } from "react";
import Item from "../../components/Item/Item";

const Items = () => {
  const [items, setItems] = useState([
    {
      image:
        "https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      alt: "woman painting",
      bestSeller: true,
      label: "People",
      title: "Red Bench",
      price: "3.89",
    },
    {
      image:
        "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      alt: "food",
      bestSeller: false,
      label: "Food",
      title: "Egg Balloon",
      price: "3.89",
    },
    {
      image:
        "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      alt: "woman painting",
      bestSeller: false,
      label: "People",
      title: "Man",
      price: "3.89",
    },
  ]);
  return (
    <div className="sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-20">
      {items.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

export default Items;
