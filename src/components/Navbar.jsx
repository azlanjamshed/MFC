import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "HOME" },
  { to: "/teams", label: "TEAMS" },
  { to: "/matches", label: "MATCHES" },
  { to: "/standings", label: "STANDINGS" },
  // add more items as needed
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
      isActive ? "bg-amber-400 text-[#111]" : "hover:bg-white/10"
    }`;

  return (
    <header className="w-full sticky top-0 left-0 z-30">
      <nav
        className={`w-full flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 transition-all backdrop-blur-sm ${
          scrolled ? "bg-[#272626]/95 shadow-lg" : "bg-[#272626]/70"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            {/* Replace with <img src={logo} /> if you have a logo */}
            <div className="w-10 h-10 rounded-md bg-amber-400 flex items-center justify-center font-black text-[#111]">
              MSL
            </div>
          </div>
          <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold text-amber-400">
            MAKAUT SUPER LEAGUE
          </h1>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2 rounded-md inline-flex items-center justify-center hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {/* Hamburger / Close icon */}
            {open ? (
              // close icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transform transition-all origin-top-right ${
          open ? "max-h-screen" : "max-h-0"
        } overflow-hidden bg-[#272626]/95`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `block w-full ${
                  isActive ? "bg-amber-400 text-[#111]" : "hover:bg-white/10"
                } rounded-md px-3 py-2 text-sm font-semibold`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
