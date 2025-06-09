// import React from "react";

// const Page1Bottom = () => {
//   return (
//     <div className="text-white absolute flex justify-between bottom-0 mb-10 ">
//       <div>
//         <h2 className="text-xl leading-4 font-[anzo1]">
//           BRAND DESIGN | WEBSITE DESIGN
//         </h2>
//         <h3 className="text-xl font-lighter text-gray-400 ">
//           BESPOKE FREELANCE{" "}
//         </h3>
//       </div>
//       <div className="ml-188">
//         <img
//           className="h-18 "
//           src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_284,h_284,al_c,lg_1,q_85,enc_avif,quality_auto/cssda-wotd-white.png"
//         />
//       </div>
//     </div>
//   );
// };

// export default Page1Bottom;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to("#banner", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div className="absolute bottom-10 left-0 right-0 px-20 text-white flex items-end justify-between">
      {/* Left text content */}
      <div>
        <h2 className="text-xl leading-tight font-semibold tracking-wide">
          BRAND DESIGN | WEBSITE DESIGN
        </h2>
        <h3 className="text-xl font-light text-gray-400">BESPOKE FREELANCE</h3>
      </div>

      {/* Image */}
      <img
        id="banner"
        className="h-20 object-contain"
        src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_284,h_284,al_c,lg_1,q_85,enc_avif,quality_auto/cssda-wotd-white.png"
        alt="Award"
      />
    </div>
  );
};

export default Page1Bottom;
