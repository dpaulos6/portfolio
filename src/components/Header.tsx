import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../lib/theme-provider.tsx'
import { ThemeButton } from './ui/ThemeButton.tsx'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useRef, useState } from 'react'

function Header() {
  const { theme, setTheme } = useTheme()
  const menuRef = useRef<HTMLUListElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev: boolean) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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

      <div className={'relative'}>
        <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <ul
            ref={menuRef}
            className={`flex ${isMenuOpen ? 'absolute left-10 top-5 flex-col justify-end gap-4 bg-background p-4 shadow-md md:hidden' : 'justify-center gap-8'}`}
          >
            <li>
              <AnchorLink href="#home">
                <p className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
                  Home
                </p>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">
                <p className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
                  About Me
                </p>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#projects">
                <p className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
                  Projects
                </p>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">
                <p className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
                  Contact Me
                </p>
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={'flex items-center justify-center gap-3'}>
        <ThemeButton
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          variant="outline"
          size="icon"
          className={'hover:text-accent'}
        >
          {theme === 'dark' ?
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          : <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          }
          <span className="sr-only">Toggle theme</span>
        </ThemeButton>

        <Menu
          className={`hover:text-accent md:hidden ${isMenuOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <X
            className="hover:text-accent md:hidden"
            onClick={closeMenu}
          />
        )}
      </div>
    </div>
  )
}

export default Header
