import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/images/Logo2Final.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();

  return (
    <nav className="w-full px-[20px] pt-[20px] pb-[15px] fixed top-0 z-50 bg-black/95">
      <div className="max-w-[1290px] h-[46px] m-auto font-robotoSlab font-normal text-[15px] flex justify-between items-center">
        <div
          className="font-bold w-[88px] text-white flex items-center gap-3"
          onClick={() => navigation("/")}
        >
          <img src={logo} alt="Logo" className="w-[60px]" />
          <span className="text-xl flex flex-col leading-none w-full">
            SUNRAA
            <span className="text-[17px] w-full font-light text-center">
              HOLDINGS
            </span>
          </span>
        </div>

        <div className="md:flex space-x-6 hidden [&>*:hover]:text-[#ffd900]">
          <NavLink
            className={({ isActive }) =>
              `py-[13px] px-[20px] rounded-lg transition duration-300 ${
                isActive ? "text-[#ffd900b1] font-bold" : "text-white"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              `py-[13px] px-[20px] rounded-lg transition duration-300 ${
                isActive ? "text-[#ffd900b1] font-bold" : "text-white"
              }`
            }
            to="/Health_Benefits"
          >
            Health Benefits
          </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              `py-[13px] px-[20px] rounded-lg transition duration-300 ${
                isActive ? "text-[#ffd900b1] font-bold" : "text-white"
              }`
            }
            to="/about_us"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-[13px] px-[20px] rounded-lg transition duration-300 ${
                isActive ? "text-[#ffd900b1] font-bold" : "text-white"
              }`
            }
            to="/contact_us"
          >
            Contact Us
          </NavLink>
        </div>

        <div className="md:hidden block">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <CloseIcon sx={{ color: "white" }} />
            ) : (
              <MenuIcon sx={{ color: "white" }} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-[81px] left-0 w-full bg-white transition-all duration-300 ${
          isOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col   text-center text-black">
          <li>
            <NavLink
              className="block py-5 border-b"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className="block py-5 border-b"
              to="/Health_Benefits"
              onClick={() => setIsOpen(false)}
            >
              Health Benefits
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className="block py-5 border-b"
              to="/about_us"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block py-5"
              to="/contact_us"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
