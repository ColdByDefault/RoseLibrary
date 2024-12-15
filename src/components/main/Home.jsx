import React from "react";
import MiniBackground from "./MiniBackground";

function Home() {
  return (
    <div className="relative w-full h-screen pt-32 flex items-center justify-center overflow-hidden">
      {/* Centered Container for Text and MiniBackground */}
      <div
        className="relative w-[90%] max-w-4xl h-[80%] flex items-center justify-center mx-auto bg-transparent"
        style={{
          perspective: "1000px",
        }}>
        {/* MiniBackgrounds Positioned Randomly Inside the Container */}
        <div
          className="absolute w-28 h-28 top-[10%] left-[5%] z-10 rounded-full 
          shadow-[0_0_40px_5px_rgba(2,20,41,0.842)]">
          <MiniBackground />
        </div>
        <div
          className="absolute w-28 h-28 top-[15%] right-[10%] z-10 rounded-full 
          shadow-[0_0_40px_5px_rgba(2,20,41,0.842)]">
          <MiniBackground />
        </div>
        <di
          className="absolute w-28 h-28 bottom-[20%] left-[15%] z-10 rounded-full 
          shadow-[0_0_40px_5px_rgba(2,20,41,0.842)]">
          <MiniBackground />
        </di>
        <div
          className="absolute w-28 h-28 bottom-[10%] right-[5%] z-10 rounded-full 
          shadow-[0_0_40px_5px_rgba(2,20,41,0.842)]">
          <MiniBackground />
        </div>

        {/* Text Content with 3D Effect */}
        <div className="text-white text-center z-20 px-4"
          style={{
            transform: "rotateX(0deg) rotateY(0deg) translateZ(80px)",
          }}>
          <h4 className="uppercase text-sm tracking-wider mb-2">Exclusive Window</h4>
          <h1 className="text-2xl lg:text-5xl font-bold mb-4"
            style={{ transform: "translateZ(20px)" }}>
            beRich =&gt; <span className="text-blue-400">&#123;Digital Library&#125;</span>
          </h1>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto" style={{textShadow: "0px 2px 10px #5b7080f1",}}>
            This is my personal hub where I upload documentation, books, and learning materials tailored for software developers.
            As I progress in my academic journey, I share my experiences, roadmaps, and curated resources to inspire and support others in their learning.
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="#"
              className="bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-300 transition"
              style={{ transform: "translateZ(30px)" }}>
              Get Started
            </a>
            <a href="https://github.com/ColdByDefault/beRichLibrary"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white font-semibold text-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition"
              style={{ transform: "translateZ(30px)" }}>
              See Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
