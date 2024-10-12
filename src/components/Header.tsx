import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/theme-provider.tsx'
import { ThemeButton } from './ui/ThemeButton.tsx'

import { Sheet, SheetContent, SheetTrigger } from './ui/Sheet.tsx'
import Navbar from './ui/Navbar.tsx'
import { useState } from 'react'

function Header() {
  const { theme, setTheme } = useTheme()
  const [open, setIsOpen] = useState(false)

  function closeSheet() {
    setIsOpen(false)
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
      <Navbar
        styleNames={'hidden md:block'}
        styleNames2={'flex justify-center gap-8'}
      />

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

        <Sheet open={open}>
          <SheetTrigger>
            <Menu
              className={`hover:text-accent md:hidden`}
              onClick={() => setIsOpen(true)}
            />
          </SheetTrigger>
          <SheetContent className="w-[400px]">
            <Navbar
              onNavItemClick={closeSheet}
              styleNames={'block md:hidden'}
              styleNames2={
                'flex flex-col items-center justify-center gap-4 mt-10  p-3 '
              }
            />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Header
