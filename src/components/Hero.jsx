
import React from "react";
import hero from "../assets/background.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-center bg-cover overflow-hidden  bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none flex items-center justify-center">
        <img
          className="relative z-10 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] select-none h-full  object-contain"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Logo */}
    </section>
  );
};

export default Hero;
