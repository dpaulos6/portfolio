// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useRef } from 'react'

type NavbarProps = {
  styleNames: string
  styleNames2: string
}

function Navbar({ styleNames2, styleNames }: NavbarProps) {
  const menuRef = useRef<HTMLUListElement>(null)

  return (
    <nav className={styleNames}>
      <ul
        ref={menuRef}
        className={styleNames2}
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
  )
}

export default Navbar
