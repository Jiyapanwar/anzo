import React from "react";

const Page3 = () => {
  return (
    <div className="h-screen relative bg-white flex items-center justify-center">
      <img className="absolute z-20 "></img>
      <video
        atuplay="true"
        loop
        muted
        className="z-10 h-[70vh] w-[50vh] relative object cover"
      ></video>
      <div className="h-0.5 w-3/5 top-[40%] absolut5e z-0 bg-black"></div>
      <div className="h-0.5 w-4/5 top-[58%] absolut5e z-0 bg-black"></div>
      <div className="h-0.5 w-full top-[76%] absolut5e z-0 bg-black"></div>
    </div>
  );
};

export default Page3;

// old page that no longer exists
