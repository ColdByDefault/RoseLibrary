import React from "react";

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
        <h4 className="uppercase text-sm tracking-wider mb-2">Exclusive Access</h4>
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          To BeRich =&gt; <span className="text-blue-400">Digital Library</span>
        </h1>
        <p className="text-black text-lg mb-6">
          A personal hub for developers and computer science enthusiasts. Upload, store, and access exclusive materials like PDFs, articles, and school resources—all in one place.
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
            Learn More
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block w-full lg:w-1/2">
        <img
          src="./23.png"
          alt="PC Setup"
          className="w-1/3 h-1/3 object-contain drop-shadow-lg rotate-6"
        />
      </div>
    </div>
    
    </>
  );
}

export default Home;
