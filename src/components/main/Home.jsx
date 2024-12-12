import React from "react";
import Background from "./Background";

function Home() {
  return (
    <>
      {/* <div className="w-full h-full mt-32"> */}
        {/* Main Content */}
        {/* <div className="mx-auto mt-8 w-2/3
        bg-black/50 text-center lg:w-2/5 p-8 shadow-[0_10px_20px_2px_rgba(0,0,0,0.5)] 
        rounded-xl font-medium tracking-wide text-sm backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-blue-400">BeRich</span>.Library
          </h1>
          <p className="mt-4 text-gray-300">
            Your personal digital library dedicated to developers and computer enthusiasts.
          </p>
          <p className="mt-2 text-gray-400">
            Explore exclusive learning materials, PDFs, articles, and documentation.
          </p>
          <a href="https://github.com/ColdByDefault/beRichLibrary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 inline-block">
            See Source Code 
          </a>
        </div> */}
      {/* </div> */}
      <div className="w-full h-screen bg-blue-200 flex items-center justify-center relative">
      {/* Left Content */}
      <div className="text-black  w-full lg:w-1/2 px-8 lg:px-16">
        <h4 className="uppercase text-sm tracking-wider mb-2">Exclusive Window</h4>
        <h1 className="text-2xl lg:text-5xl font-bold mb-4">
          To beRich =&gt; <span className="text-blue-400">&#123;Digital Library&#125;
          </span>
        </h1>
        <p className="text-black text-lg mb-6">
        This is my personal hub where I upload documentation, books, and learning materials tailored for software developers. 
        As I progress in my academic journey, I share my experiences, roadmaps, and curated resources to inspire and support others in their learning.
        </p>
        <div className="flex space-x-4">
          <a href="#"
            className="bg-blue-400 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-300 transition">
            Get Started
          </a>
          <a href="https://github.com/ColdByDefault/beRichLibrary"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-white font-semibold text-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </a>
        </div>
      </div>
    </div>
    <div className="hidden lg:block">
      <div className="w-32 h-32 absolute top-0 z-50 translate-x-32 translate-y-64">
          <Background />
      </div>
      <div className="w-32 h-32 absolute z-50 translate-x-72 -translate-y-64">
          <Background />
      </div>
      <div className="w-32 h-32 absolute right-0 z-50 -translate-x-2/3 -translate-y-64">
          <Background />
      </div>
      <div className="w-32 h-32 absolute top-0 right-0 z-50 -translate-x-2/3 translate-y-32">
          <Background />
      </div>
      <div className="w-32 h-32 absolute top-56 right-96 z-50 -translate-x-52 ">
          <Background />
      </div>
    </div>
    </>
  );
}

export default Home;
