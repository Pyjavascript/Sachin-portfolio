import React from "react";
import Image from "./image";
function Home() {
  return (
  <div className="h-auto lg:h-[85vh] lg:pt-20 lg:text-center lg:flex lg:items-start lg:justify-center">
    <Image/>
    <div className="flex flex-col gap-40">
    <p className="hidden lg:block pl-4 pt-10 lg:pt-0 text-center ">I'm driving innovation in biosensors, and I love what i do.</p>
    <div className="card mt-24 flex gap-4 bg-white p-2 w-3/4 lg:w-auto lg:ml-0 ml-10 mb-2 lg:mb-0 lg:p-4 lg:py-5 rounded-lg">
      <div className="flex flex-col items-start">
        <h1 className="text-[#0D2F3F] font-medium text-1xl">Co-Authors</h1>
        <img src="./assets/index.svg" alt="" />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-[#0D2F3F] font-medium text-1xl">H-Index</h1>
        <h1 className="font-bold text-1xl text-[#286F6C]">8+</h1>
      </div>
    </div>
    </div>
  </div>
  
  )
}

export default Home;
