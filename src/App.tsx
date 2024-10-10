import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import { ThemeProvider } from './lib/theme-provider.tsx'
import Projects from './components/Projects.tsx'

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <Header />
      <Hero />
      <About />
      <Projects />
    </ThemeProvider>
  )
}

export default App
