import Link from "next/link";

import { client } from '../../lib/client';
import Image from 'next/image'

import logo from '../../public/afrimothep-logo.png';

const MainHeader = () => {

  return (
    <>
    <nav class="relative container mx-auto p-6">
      {/* Flex container */}
      <div class="flex items-center justify-between">
        {/* LOGO */}
        <div class="pt-2">
          <Image src={logo} alt="Logo" width="120" height="94" />

        </div>
        {/* Menu items */}
        <div class="hidden space-x-6 md:flex">
          <Link href="/" className="hover:text-darkGrayishBlue">Home</Link>
          <Link href="/services" className="hover:text-darkGrayishBlue">Services</Link>
          <Link href="products" className="hover:text-darkGrayishBlue">Produits</Link>
          <Link href="/aboutus" className="hover:text-darkGrayishBlue">About us</Link>
          <Link href="/contact" className="hover:text-darkGrayishBlue">Contact</Link>
        </div>
        {/* BUTTON */}
        <a
          href="#"
          class="hidden p-3 px-6 pt-2 text-white bg-red-800 rounded-full baseline hover:bg-red-400 md:block"
        >
          Get Started
        </a>

           {/* <!-- Hamburger Icon --> */}
        <button
          id="menu-btn"
          class="block hamburger md:hidden focus:outline-none"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      {/*  <!-- Mobile Menu --> */}
      <div class="md:hidden">
        <div
          id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <Link href="/" className="hover:text-darkGrayishBlue">Home</Link>
          <Link href="/services" className="hover:text-darkGrayishBlue">Services</Link>
          <Link href="products" className="hover:text-darkGrayishBlue">Produits</Link>
          <Link href="/aboutus" className="hover:text-darkGrayishBlue">About us</Link>
          <Link href="/contact" className="hover:text-darkGrayishBlue">Contact</Link>
        </div>
      </div>
    </nav>
    </>
  );
};




export default MainHeader;
