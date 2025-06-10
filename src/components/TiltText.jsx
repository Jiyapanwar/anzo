import React from "react";

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="mt-35">
      <h1 className="text-white text-[4.7vw] leading-[4vw] font-bold uppercase font-[anzo1]">
        I am <span className="text-black">DARK MODE</span> ™
      </h1>
      <h1 className="text-white text-[8.5vw] leading-[7vw] font-bold font-[anzo1]">
        DESIGNER
      </h1>
      <h1 className="text-white text-[4.7vw] leading-[4vw] font-bold uppercase font-[anzo1]">
        To Hire
      </h1>
    </div>
  );
};

export default TiltText;
