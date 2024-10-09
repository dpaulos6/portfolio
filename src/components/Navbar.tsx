// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Menu, Moon, Sun } from 'lucide-react'

function Navbar() {
  return (
    <div className="mb-7 flex items-center justify-between p-4 lg:w-[90%] lg:justify-evenly">
      {/* Logo */}
      <div className="flex items-center">
        <span className="from-primary to-secondary text-4xl font-bold leading-tight tracking-wide transition duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
          Taha
        </span>
        <span className="from-primary to-secondary text-4xl font-bold leading-tight tracking-wide transition duration-300 ease-in-out hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
          Zoabi
        </span>
      </div>

      <nav className="hidden md:block">
        <ul className="flex justify-center gap-8">
          <li>
            <a
              className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      {/* Buttons (Light/Dark mode and Connect) */}
      <div className="flex items-center gap-4">
        <button>
          <Sun />
        </button>

        <div className="sm:block md:hidden">
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
