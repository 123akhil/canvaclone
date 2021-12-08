import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import {
  SparklesIcon,
  CollectionIcon,
  ChatAlt2Icon,
  VideoCameraIcon,
  PrinterIcon,
  SpeakerphoneIcon,
  BriefcaseIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
const Suggestion = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-400 via-blue-600 to-purple-900 ml-8 mr-8 h-64 mt-8 rounded-md flex items-center flex-col justify-center">
      <h1 className="text-white text-4xl font-bold mb-4">
        What will you design ?
      </h1>
      <div className="lg:w-6/12 w-4/5">
        <div className="relative mt-1 p-3">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-black " />
          </div>
          <input
            className="bg-white rounded-md block py-2 pl-10 w-full border border-gray-200  focus:outline-none focus:ring-1 focus:ring-gray-600 hover:ring-1 hover:ring-gray-400"
            type="text"
            placeholder="Try logo, poster, anything!"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center  px-2">
          <SparklesIcon className="bodyIcon text-purple-500" />
          <p className="text-white text-xs font-semibold">For you</p>
        </div>
        <div className="flex flex-col items-center px-2">
          <CollectionIcon className="bodyIcon text-white bg-opacity-20 hover:text-pink-300 hover:bg-white" />
          <p className="text-white text-xs font-semibold">Presentations</p>
        </div>
        <div className="flex flex-col items-center px-2">
          <ChatAlt2Icon className="bodyIcon text-white bg-opacity-20 hover:text-blue-700 hover:bg-white" />
          <p className="text-white text-xs font-semibold">Social Media</p>
        </div>
        <div className="md:flex flex-col items-center px-2 hidden">
          <VideoCameraIcon className="bodyIcon text-white bg-opacity-20 hover:text-green-500 hover:bg-white" />
          <p className="text-white text-xs font-semibold">Video</p>
        </div>
        <div className="md:flex flex-col items-center px-2 hidden">
          <PrinterIcon className="bodyIcon text-white bg-opacity-20 hover:text-pink-600 hover:bg-white" />
          <p className="text-white text-xs font-semibold">Print products</p>
        </div>
        <div className="lg:flex flex-col items-center px-2 hidden">
          <SpeakerphoneIcon className="bodyIcon text-white bg-opacity-20 hover:text-yellow-500 hover:bg-white" />
          <p className="text-white text-xs font-semibold">Marketing</p>
        </div>
        <div className="lg:flex flex-col items-center px-2 hidden">
          <BriefcaseIcon className="bodyIcon text-white bg-opacity-20 hover:text-green-300 hover:bg-white hidden lg:inline-grid" />
          <p className="text-white text-xs font-semibold">Office</p>
        </div>
        <div className="flex flex-col items-center px-2">
          <DotsHorizontalIcon className="bodyIcon text-white bg-opacity-20 hover:text-black hover:bg-white" />
          <p className="text-white text-xs font-semibold">more</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
