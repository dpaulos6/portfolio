// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/theme-provider.tsx'
import { Button } from './ui/Button.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/DropDownMenu.tsx'

function Header() {
  const { setTheme } = useTheme()
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
      <div className={'flex items-center justify-center gap-3'}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <Menu />
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header
