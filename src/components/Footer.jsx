// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="w-full h-full bg-[#272626] text-white flex items-center justify-between px-6 md:px-12 text-xs sm:text-sm font-medium">
//       {/* Left side */}
//       <p className="text-gray-400">
//         © {new Date().getFullYear()}{" "}
//         <span className="text-amber-400">MAKAUT Super League</span>
//       </p>

//       {/* Right side */}
//       <p className="text-gray-400 hidden sm:block">
//         Built with ❤️ by{" "}
//         <span className="text-amber-400 font-semibold">Gen 2De</span>
//       </p>
//     </footer>
//   );
// };

// Footer.jsx
const Footer = () => (
  <footer className="w-full h-full bg-[#272626] text-white flex items-center justify-between px-6 md:px-12 text-xs sm:text-sm font-medium">
    <p className="text-gray-400">
      © {new Date().getFullYear()}{" "}
      <span className="text-amber-400">MAKAUT Super League</span>
    </p>
    <p className="text-gray-400 hidden sm:block">
      Built with ❤️ by{" "}
      <span className="text-amber-400 font-semibold">Gen 2De</span>
    </p>
  </footer>
);

export default Footer;
