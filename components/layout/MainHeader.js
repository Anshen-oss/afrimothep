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
      </div>
    </nav>
    </>
  );
};



export default MainHeader;
