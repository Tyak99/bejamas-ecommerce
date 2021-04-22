import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="mx-auto px-4 my-4">
        <b>
          <h1 className="text-3xl"> Samurai King Resting </h1>
        </b>
        <div className="my-4">
          <img
            src="https://images.pexels.com/photos/144234/bull-landscape-nature-mammal-144234.jpeg?cs=srgb&dl=pexels-pixabay-144234.jpg&fm=jpg"
            alt="bull"
            width="100%"
            className="h-52"
          />
          <div className="h-12 bg-white w-44 flex justify-center items-center relative bottom-12">
            <p> Photo of the day </p>
          </div>
        </div>

        <div>
          <button className="bg-black text-white w-full h-12 text-lg sm:w-44">
            ADD TO CART
          </button>
        </div>

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

        <div>
          <b>
            <h4 className="text-lg"> People also buy </h4>
            <div className="flex justify-between my-6">
              <img
                src="https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="room"
                className="w-24 h-32"
              />
              <img
                src="https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="nature"
                className="w-24 h-32"
              />
              <img
                src="https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="art"
                className="w-24 h-32"
              />
            </div>
          </b>
        </div>

        <div>
          <h4 className="text-lg">
            <b> Details </b>
          </h4>
          <div className='my-6'>
            <p className='text-xl font-light'>Size: 15mb</p>
            <p className='text-xl font-light'>Size: 1202 x 1020 pixel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
