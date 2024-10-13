import { Download } from 'lucide-react'
import profileImg from '/personal-pic.png'
import Button from './ui/Button.tsx'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MyResume from '../assets/Resume.pdf'

export default function Hero() {
  return (
    <div
      id={'home'}
      className="flex flex-col items-center gap-9 px-4"
    >
      <img
        src={profileImg}
        alt="pesonal-picture"
        className="mt-[30px] w-[240px] rounded-full border-2 border-accent"
      />
      <h1 className="mt-12 w-full max-w-sm text-center text-2xl font-bold sm:max-w-xl sm:text-4xl lg:max-w-4xl lg:text-6xl">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          I'm Taha Zoabi,
        </span>{' '}
        Software Engineering Student.
      </h1>
      <p className="text-md w-full text-center leading-6 sm:leading-10 md:text-lg">
        Aspiring software engineer dedicated to learning and mastering
        innovative technologies.
      </p>
      <div className="mb-12 flex items-center gap-6">
        <AnchorLink href={'#contact'}>
          <Button className="rounded-lg bg-custom-gradient px-5 py-4 text-sm font-semibold ring-2 ring-inset ring-transparent transition-all hover:ring-foreground sm:px-10">
            Contact me
          </Button>
        </AnchorLink>
        <Button className="flex items-center gap-2 rounded-lg px-5 py-4 text-sm font-semibold ring-2 ring-inset ring-foreground transition-all hover:ring-accent sm:px-10">
          <a
            href={MyResume}
            download="Resume.pdf"
          >
            Resume
          </a>
          <Download className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
