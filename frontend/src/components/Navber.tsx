
import { FC, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import ProfileDropdownModal from "./ProfileDropdown";
import Logo from "./ui/logo";

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState<boolean>(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isHomePage
    ? isScrolled
      ? "sticky top-0 bg-white text-indigo-600 shadow-xl"
      : "absolute top-0 left-0 w-full bg-black/40 text-white"
    : "sticky top-0 bg-white text-indigo-600 shadow-xl";

  const link = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-product">Products</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/faq">FAQ</NavLink></li>
    </>
  );

  return (
    <div className={`navbar z-50 py-4 lg:px-8 ${navClass}`}>
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-[#6A0DAD] text-white p-2 shadow z-10">
            {link}
          </ul>
        </div>
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>

      <div className="navbar-end flex items-center gap-8 relative">
        <NavLink to="/cart">
          <ShoppingCartIcon className="h-6 w-6" />
        </NavLink>

        <div className="relative">
          <button onClick={() => setShowProfileDropdown((prev) => !prev)}>
            <UserCircleIcon className="h-6 w-6" />
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 z-50">
              <ProfileDropdownModal onClose={() => setShowProfileDropdown(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

