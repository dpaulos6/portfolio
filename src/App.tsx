import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import { ThemeProvider } from './lib/theme-provider.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'

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
