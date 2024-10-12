import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useRef } from 'react'

type NavbarProps = {
  ulStyles: string
  navStyles: string
  onNavItemClick?: () => void
}

function Navbar({ ulStyles, navStyles, onNavItemClick }: NavbarProps) {
  const menuRef = useRef<HTMLUListElement>(null)

  return (
    <nav className={navStyles}>
      <ul
        ref={menuRef}
        className={ulStyles}
      >
        <li onClick={onNavItemClick}>
          <AnchorLink href="#home">
            <p className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
              Home
            </p>
          </AnchorLink>
        </li>
        <li onClick={onNavItemClick}>
          <AnchorLink href="#about">
            <p className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
              About Me
            </p>
          </AnchorLink>
        </li>
        <li onClick={onNavItemClick}>
          <AnchorLink href="#projects">
            <p className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
              Projects
            </p>
          </AnchorLink>
        </li>
        <li onClick={onNavItemClick}>
          <AnchorLink href="#contact">
            <p className="from-primary to-secondary text-xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
              Contact Me
            </p>
          </AnchorLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
