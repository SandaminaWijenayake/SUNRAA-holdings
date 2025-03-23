import { NavLink } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/Logo2Final.png";

export default function Navbar() {
  return (
    <nav className="w-full px-[20px] pt-[20px] pb-[15px] fixed top-0 z-50 bg-black/95">
      <div className=" max-w-[1290px] h-[46px] m-auto font-robotoSlab font-normal text-[15px]  flex justify-between items-center">
        <div className="font-bold w-[88px]  text-white flex items-center gap-3">
          <img src={logo} alt="" className="w-[60px]" />
          <span className="text-xl flex flex-col leading-none w-full">
            SUNRAA
            <span className="text-[17px] w-full font-light text-center">
              HOLDINGS
            </span>
          </span>
        </div>
        <div className="md:flex space-x-6  group  hidden [&>*:hover]:text-[#ffd900]">
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
          <NavLink
            className={({ isActive }) =>
              `py-[13px] px-[20px] rounded-lg transition duration-300 ${
                isActive ? "text-[#ffd900b1] font-bold" : "text-white"
              }`
            }
            to="/Health_Benefits"
          >
            {" "}
            Health Benefits
          </NavLink>

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
          <MenuIcon sx={{ color: "white" }} />
        </div>
      </div>
    </nav>
  );
}
