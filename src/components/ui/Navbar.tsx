import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useRef } from 'react'
import { NAV_LINKS } from '../../lib/constants.ts'
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
        {NAV_LINKS.map((link) => (
          <li onClick={onNavItemClick}>
            <AnchorLink href={`#${link}`}>
              <p className="from-primary to-secondary text-xl capitalize hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">
                {link}
              </p>
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
