import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mx-auto px-4 my-4 border-b-4 border-solid border-gray-300">
        <div className="flex justify-between items-center">
          <b>
            <h1 className="text-3xl"> Samurai King Resting </h1>
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

        <div className='md:grid grid-cols-2 gap-16'>
          <div className="my-4">
            <b>
              <h4 className="text-lg"> About the Samurai King Resting </h4>
            </b>
            <p className="my-6">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.
            </p>
          </div>

          <div className='md:flex flex-col items-end'>
            <b>
              <h4 className="text-lg md:text-right"> People also buy </h4>
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

            <h4 className="text-lg md:text-right">
              <b> Details </b>
            </h4>
            <div className="my-6 md:text-right">
              <p className="text-xl font-light">Size: 15mb</p>
              <p className="text-xl font-light">Size: 1202 x 1020 pixel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
