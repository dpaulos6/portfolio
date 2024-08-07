import About from '@/components/About'
import Projects from '@/components/Projects'
import Navbar from '@/components/navbar'
import Hire from '@/components/Hire'
import config from '@/config.json'
import './globals.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col overflow-x-hidden">
        <About />
        <Projects />
        {config.open_to_hire && <Hire />}
      </div>
    </>
  )
}
