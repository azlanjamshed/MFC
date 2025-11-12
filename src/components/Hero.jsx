// import React from "react";
// import hero from "../assets/background.jpg";
// import logo from "../assets/logo.png";
// // import DarkArrow from "../assets/dark-arrow.png";
// // import LightArrow from "../assets/white-arrow.png";
// // import { NavLink } from "react-router-dom";
// const Hero = () => {
//   return (
//     <div
//       className="w-full h-lvh   py-20 md:py-50  object-cover bg-center bg-cover text-white text-center flex  items-center justify-center"
//       style={{
//         backgroundImage: `url(${hero})`,
//       }}
//     >
//       <img className="w-[300px]" src={logo} alt="" />
//       {/* <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 flex flex-col justify-center items-center gap-3 md:gap-5 text-center">
//         <img className="w-[300px]" src={logo} alt="" />
//       </div> */}
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import hero from "../assets/background.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen  overflow-hidden bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Logo */}
      <img
        className="relative z-10 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
        src={logo}
        alt="Logo"
      />
    </section>
  );
};

export default Hero;
