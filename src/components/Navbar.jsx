import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  let links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
  ];

  const location = useLocation();
  console.log(location);
  return (
    <header className="w-full px-10 fixed flex bottom-5 justify-center z-[999]">
      <div className="w-fit bg-opacity-75 backdrop-blur-2xl bg-[#222222] backdrop-filter h-20 flex justify-between gap-2 items-center px-2 rounded-lg">
        {/* Logo */}
        <Link
          to="/"
          className=" font-ranade w-28 h-[80%] flex justify-center items-center bg-[#234ee7] font-black text-white rounded-lg"
        >
          RD.
        </Link>
        {/* nav */}
        <nav className="flex w-full h-[80%] items-center justify-center gap-10 bg-[#3e3e3e] text-[#e3e3e3] font-switzer  text-sm font-regular tracking-tight rounded-lg">
          {links.map((link) => {
            return (
              <Link className={`relative ${link.href === location.pathname ? 'font-semibold text-white' : ''}`} key={link.label} to={link.href}>
                {link.href === location.pathname && (
                  <motion.span
                  layoutId="underline"
                  className="absolute h-[0.2rem] w-full bottom-0 rounded-full bg-[#3660f9]" />
                )}

                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
