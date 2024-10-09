import logo from "../../public/logo.png";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
/*import DarkModeIcon from "@mui/icons-material/DarkMode";*/
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button.tsx";

function Navbar() {
  return (
    <div className="flex justify-around items-center p-4 mb-7">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-16 rounded-full cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>

      <nav className="hidden sm:block mx-auto">
        <ul className="flex gap-8 justify-center">
          <li>
            <a
              className="hover:bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:bg-clip-text hover:text-transparent text-xl"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:bg-clip-text hover:text-transparent text-xl"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:bg-clip-text hover:text-transparent text-xl"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:bg-clip-text hover:text-transparent text-xl"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Buttons (Light/Dark mode and Connect) */}
      <div className="flex items-center gap-4">
        <div>
          <WbSunnyIcon />
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
        {/* <button>
          <DarkModeIcon />
        </button> */}
        <Button classes="bg-custom-gradient rounded-[50px] px-6 py-3 text-md hidden md:block">
          Connect With Me
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
