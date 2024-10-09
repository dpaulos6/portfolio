import WbSunnyIcon from "@mui/icons-material/WbSunny";
/*import DarkModeIcon from "@mui/icons-material/DarkMode";*/
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button.tsx";

function Navbar() {
  return (
<<<<<<< HEAD
    <div className="flex justify-between lg:justify-around items-center p-4 mb-7 ">
=======
    <div className="flex justify-around items-center p-4 mb-7">
>>>>>>> c80df830a256ce03dab56b057d256b25ec008208
      {/* Logo */}
      <div className=" flex items-center">
        <span className="text-4xl font-bold leading-tight tracking-wide hover:bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:bg-clip-text hover:text-transparent transition duration-300 ease-in-out">
          Taha
        </span>
        <span className="text-4xl font-bold leading-tight tracking-wide hover:bg-gradient-to-r from-[#DF8908] to-[#B415FF] hover:bg-clip-text hover:text-transparent transition duration-300 ease-in-out">
          Zoabi
        </span>
      </div>

<<<<<<< HEAD
      <nav className="hidden  lg:block">
=======
      <nav className="hidden sm:block mx-auto">
>>>>>>> c80df830a256ce03dab56b057d256b25ec008208
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
<<<<<<< HEAD
        <div className=" sm:block lg:hidden ">
=======
        <div className="md:hidden">
>>>>>>> c80df830a256ce03dab56b057d256b25ec008208
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
