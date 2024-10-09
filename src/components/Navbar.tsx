import logo from "../../public/logo.png";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  return (
    <div className=" flex justify-around items-center border-2 p-4 mb-7">
      <div className=" flex items-center">
        <img
          className=" h-20 rounded-full cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <nav className="w-4/6">
        <ul className=" flex gap-10 justify-center ">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <button>
          <WbSunnyIcon />
        </button>
        <button>
          <DarkModeIcon />
        </button>

        <button>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
