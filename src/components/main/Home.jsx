import React from "react";

function Home() {
  return (
    <>
      <div className="w-full h-full mt-32">
        {/* Main Content */}
        <div className="mx-auto mt-8 w-2/3
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
        </div>
      </div>
    
    </>
  );
}

export default Home;
