import React from "react";

function Home() {
  return (
    <div className="w-full h-screen flex justify-center lg:mt-24">
      <div className="absolute bg-black text-center lg:w-2/5 p-8 shadow-[0_10px_20px_2px_rgba(0,0,0,0.5)] 
      lg:rounded-xl font-medium tracking-wide text-sm backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to <span className="text-blue-400">BeRich</span>.Library</h1>
        <p className="mt-4 text-gray-700">Developer: ColdByDefault</p>
        <a href="https://github.com/ColdByDefault/beRichLibrary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline">
          See Source Code
        </a>

        <div>

        </div>
      </div>
    </div>
  );
}

export default Home;
