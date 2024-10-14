import Header from './sections/Header.tsx'
import Hero from './sections/Hero.tsx'
import About from './sections/About.tsx'
import { ThemeProvider } from './lib/theme-provider.tsx'
import Projects from './sections/Projects.tsx'
import Contact from './sections/Contact.tsx'

function App() {
  return (
    <main className={'mx-auto max-w-[1440px]'}>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
    </main>
  )
}

export default App
