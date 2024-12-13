import React from "react";
import Background from "./Background";

function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-evenly relative z-50 bg-blue-200 lg:bg-transparent">
  {/* Left Content */}
  <div className="text-black w-full lg:w-1/2 px-8 lg:px-16 lg:pr-8">
    <h4 className="uppercase text-sm tracking-wider mb-2">Exclusive Window</h4>
    <h1 className="text-2xl lg:text-5xl font-bold mb-4">
      beRich =&gt; <span className="text-blue-400">&#123;Digital Library&#125;</span>
    </h1>
    <p className="text-black text-lg mb-6">
      This is my personal hub where I upload documentation, books, and learning materials tailored for software developers. 
      As I progress in my academic journey, I share my experiences, roadmaps, and curated resources to inspire and support others in their learning.
    </p>
    <div className="flex space-x-4">
      <a
        href="#"
        className="bg-blue-400 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-300 transition"
      >
        Get Started
      </a>
      <a
        href="https://github.com/ColdByDefault/beRichLibrary"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border border-white font-semibold text-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition"
      >
        See Source Code
      </a>
    </div>
  </div>

  {/* Right Content */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">
    <img src="./1.png"
      alt="Phone&Book"
      className="w-[450px] lg:w-[650px] h-auto"
    />
  </div>
</div>

      {/* Background elements */}
      <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-8 w-full h-screen absolute top-0 z-10 bg-blue-200 ">
  <div className="absolute w-32 h-32 z-40 top-28 left-8">
          <Background /> 
        </div>
        <div className="absolute w-32 h-32 z-40 top-48 left-96">
          <Background /> 
        </div>
        <div className="absolute w-32 h-32 z-40 bottom-32 left-24">
          <Background /> 
        </div>
      </div>
    </>
  );
}

export default Home;
