import Link from "next/link";
import {client,  urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {

  return (
 <section id="hero">
    {/*   Flex container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            <span className="block xl:inline text-gray-500">{heroBanner.title}</span><br />
            <span className="block text-red-800 xl:inline">{heroBanner.title2}</span>
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
             {heroBanner.description}
          </p>
          <div className="flex justify-center md:justify-start">
           <a href="#" className="rounded-full p-3 px-6 pt-2 text-white bg-red-800 hover:bg-red-400"> {heroBanner.cta_outline}</a>
          </div>
        </div>
          {/* Right item */}
          <div className="md:w-1/2">
            <img src={urlFor(heroBanner.image)} alt="illustration" />
            </div>
        </div>

    </section>

  );
};

export default HeroBanner;
