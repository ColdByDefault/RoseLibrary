import React from "react";
import RandomDotsBackground from "./Background";
import "../../styles/title.css"


function Home() {
    return (
      <div className="relative w-full h-screen">
            <div className="">
                <RandomDotsBackground />
            </div>
            <div class="content">
              <div class="title text-focus-in">Welcome to <span class="text-focus-in">BeRich</span>  Library</div>
              <p>Developer: ColdByDefault</p>
            </div>
      </div>
    );
  }
  

export default Home;
