import { Download } from 'lucide-react'
import profileImg from '/personal-pic.png'
import Button from './Button.tsx'

export default function Hero() {
  return (
    <div className="flex w-screen flex-col items-center gap-9 px-4">
      <img
        src={profileImg}
        alt="pesonal-picture"
        className="border-accent mt-[30px] w-[240px] rounded-full border-2"
      />
      <h1 className="mt-12 w-full max-w-sm text-center text-2xl font-bold sm:max-w-xl sm:text-4xl lg:max-w-4xl lg:text-6xl">
        <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
          I'm Taha Zoabi,
        </span>{' '}
        Software Engineering Student.
      </h1>
      <p className="text-md w-full text-center leading-6 sm:leading-10 md:text-lg">
        Aspiring software engineer dedicated to learning and mastering
        innovative technologies.
      </p>
      <div className="mb-12 flex items-center gap-6">
        <Button className="hover:ring-foreground rounded-lg bg-custom-gradient px-5 py-4 text-sm font-semibold ring-2 ring-inset ring-transparent transition-all sm:px-10">
          Contact me
        </Button>
        <Button className="hover:ring-accent ring-foreground flex items-center gap-2 rounded-lg px-5 py-4 text-sm font-semibold ring-2 ring-inset transition-all sm:px-10">
          <span>Resume</span>
          <Download className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
