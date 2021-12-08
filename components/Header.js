import React from "react";
import Image from "next/image";
import {
  QuestionMarkCircleIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className=" bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        {/* left Header */}
        <div className="flex items-center m-3">
          <div className="w-16 h-10 mx-2 inline-grid cursor-pointer lg:w-24 md:mx-4">
            <Image src="/canva.jpg" width={50} height={48} />
          </div>
          <p className="p-2 mx-1 hover:bg-gray-200 rounded-md hidden md:inline-grid">
            Home
          </p>
          <div className="headBtn hidden md:flex">
            <p className="px-1">Design</p>
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </div>
          <p className="p-2 mx-1 hover:bg-gray-200 rounded-md hidden lg:flex">
            Templates
          </p>
          <div className="headBtn hidden lg:flex">
            <p className="px-1">Features</p>
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="headBtn hidden xl:flex">
            <p className="px-1">Learn</p>
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="headBtn hidden xl:flex">
            <p className="px-1">Plans</p>
            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        {/* middle header */}
        <div className="max-w-xl">
          <div className="relative mt-1 p-3">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-black " />
            </div>
            <input
              className="bg-white rounded-md block py-2 pl-10 sm:w-72 w-48 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-600 hover:ring-1 hover:ring-gray-400"
              type="text"
              placeholder="Try logo, poster, anything!"
            />
          </div>
        </div>

        {/* right Header */}
        <MenuIcon className="xl:hidden h-6 w-6 mr-4" />
        <div className="xl:flex items-center mr-4 hidden">
          <div className="text-black hover:bg-gray-100 p-2 mx-1 rounded-md hidden xl:inline-grid">
            <QuestionMarkCircleIcon className="h-6 w-6" />
          </div>
          <button className="font-semibold text-black mx-2 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 ">
            Log in
          </button>
          <button className="font-semibold text-white mx-2 bg-purple-700 px-4 py-2 rounded-md hover:bg-purple-600">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
