import WbSunnyIcon from "@mui/icons-material/WbSunny";
/*import DarkModeIcon from "@mui/icons-material/DarkMode";*/
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="flex justify-between lg:justify-evenly items-center p-4 mb-7  lg:w-[90%] ">
      {/* Logo */}
      <div className=" flex items-center">
        <span className="text-4xl font-bold leading-tight tracking-wide hover:bg-gradient-to-r from-[#007BFF] to-[#52D3B8] hover:bg-clip-text hover:text-transparent transition duration-300 ease-in-out">
          Taha
        </span>
        <span className="text-4xl font-bold leading-tight tracking-wide hover:bg-gradient-to-r from-[#007BFF] to-[#52D3B8] hover:bg-clip-text hover:text-transparent transition duration-300 ease-in-out">
          Zoabi
        </span>
      </div>

      <nav className="hidden  md:block">
        <ul className="flex gap-8 justify-center">
          <li>
            <a
              className="hover:bg-gradient-to-r from-[#007BFF] to-[#52D3B8] hover:bg-clip-text hover:text-transparent text-xl"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gradient-to-r from-[#007BFF] to-[#52D3B8] hover:bg-clip-text hover:text-transparent text-xl"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gradient-to-r from-[#007BFF] to-[#52D3B8] hover:bg-clip-text hover:text-transparent text-xl"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gradient-to-r from-[#007BFF] to-[#52D3B8] hover:bg-clip-text hover:text-transparent text-xl"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      {/* Buttons (Light/Dark mode and Connect) */}
      <div className="flex items-center gap-4">
        <div>
          <WbSunnyIcon />
        </div>

        <div className=" sm:block md:hidden ">
          <MenuIcon />
        </div>
        {/* <button>
          <DarkModeIcon />
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
