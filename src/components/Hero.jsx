// import React from "react";
// import hero from "../assets/background.jpg";
// import logo from "../assets/logo.png";

// const Hero = () => {
//   return (
//     <section
//       className="relative w-full h-screen  overflow-hidden bg-center bg-cover bg-no-repeat flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${hero})`,
//       }}
//     >
//       {/* Optional overlay for better contrast */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Logo */}
//       <img
//         className="relative z-10 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
//         src={logo}
//         alt="Logo"
//       />
//     </section>
//   );
// };

// export default Hero;

// Hero.jsx
import React from "react";
import hero from "../assets/background.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[824px] overflow-hidden bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Logo */}
      <img
        className="relative z-10 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] select-none"
        src={logo}
        alt="Logo"
      />
    </section>
  );
};

export default Hero;
