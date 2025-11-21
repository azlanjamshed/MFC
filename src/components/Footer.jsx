
const Footer = () => (
  <footer className="w-full h-full bg-[#272626] text-white flex items-center justify-between px-6 md:px-12 text-xs sm:text-sm font-medium ">
    <div className="w-full flex flex-col md:flex-row items-center justify-between  px-6 md:px-12  bg-[#272626]  ">
      {/* Left side — Copyright */}
      <p className="text-gray-400 text-sm hidden sm:block">
        © {new Date().getFullYear()}{" "}
        <span className="text-amber-400 font-semibold">
          <a href="https://www.instagram.com/makautfc/" target="_blank">
            MAKAUT Super League
          </a>
        </span>
      </p>

      {/* Center — Instagram link (visible on all devices) */}

      {/* Right side — Credit */}
      <p className="text-gray-400   text-sm">
        Design by{" "}
        <span className="text-amber-400 font-semibold">
          {" "}
          <a href="https://www.instagram.com/gen2de/" target="_blank">
            Gen2De
          </a>
        </span>
      </p>
    </div>
  </footer>
);

export default Footer;
