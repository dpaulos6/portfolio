import { NAV_LINKS } from '@/lib/projects'
import { useRef } from 'react'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
        {NAV_LINKS.map((link, index) => (
          <li
            onClick={onNavItemClick}
            key={index}
          >
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
