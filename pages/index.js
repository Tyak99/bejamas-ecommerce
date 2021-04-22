import Head from "next/head";
import { useState } from "react";
import Featured from "../containers/Featured";
import Filter from "../containers/Filter";
import Header from "../components/Header";
import Items from "../containers/Items";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Featured />
      <div>
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
          <Filter />
          <Items />
        </div>
      </div>
    </div>
  );
}
