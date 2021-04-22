import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

const categories = [
  "People",
  "Premium",
  "Pets",
  "Food",
  "Landmarks",
  "Cities",
  "Nature",
];

export default function Home() {
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
    <div className="container mx-auto">
      <Header />
      <div className="px-4 my-4 border-b-4 border-solid border-gray-300">
        <div className="flex justify-between items-center">
          <b>
            <h2> Samurai King Resting </h2>
          </b>
          <div>
            <button className="hidden sm:block bg-black text-white h-12 text-lg w-44">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="mt-4">
          <img
            src="https://images.pexels.com/photos/144234/bull-landscape-nature-mammal-144234.jpeg?cs=srgb&dl=pexels-pixabay-144234.jpg&fm=jpg"
            alt="bull"
            width="100%"
            className="h-52 sm:h-128"
            height="35rem"
          />
          <div className="h-12 bg-gray-200 w-44 flex justify-center items-center relative bottom-12">
            <p> Photo of the day </p>
          </div>
        </div>

        <div>
          <button className="sm:hidden bg-black text-white w-full h-12 text-lg">
            ADD TO CART
          </button>
        </div>

        <div className="md:grid grid-cols-2 gap-16">
          <div className="my-4">
            <b>
              <h4> About the Samurai King Resting </h4>
            </b>
            <p className="my-6">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.
            </p>
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
              <p className="text-xl font-light">Size: 15mb</p>
              <p className="text-xl font-light">Size: 1202 x 1020 pixel</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 my-4">
        <div className="flex justify-between items-center">
          <h2>
            <b> Photography /</b> Premium Photos
          </h2>
          <div className="hidden lg:flex justify-between w-32">
            <p className="text-xl"> Sort By </p>
            <p className="text-xl"> Price </p>
          </div>
          <img src="/filter.svg" alt="Filter icon" className="w-7 lg:hidden" />
        </div>
        <div className="lg:flex mt-12">
          <div className="hidden lg:block w-1.5/5">
            <h4>
              <b>Category</b>
            </h4>
            <div className="mt-4">
              {categories.map((item) => {
                return (
                  <div className="flex items-center mt-4">
                    <input type="checkbox" />
                    <h4 className="ml-4">{item}</h4>
                  </div>
                );
              })}
            </div>
            <hr className="mt-8 w-4/5" />
            <h4 className="mt-8">
              <b>Price range</b>
            </h4>
            <div className="mt-4">
              <div className="flex items-center mt-4">
                <input type="checkbox" />
                <h4 className="ml-4">Lower than $20</h4>
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" />
                <h4 className="ml-4">$20 - $100</h4>
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" />
                <h4 className="ml-4">$100 - $200</h4>
              </div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-20">
            {items.map((item) => {
              return (
                <div className="s:w-80 lg:w-72">
                  {item.bestSeller && (
                    <div className="h-8 bg-white w-36 flex justify-center items-center relative top-8 -mt-8">
                      <p>Best Seller</p>
                    </div>
                  )}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-96 w-full"
                  />
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
