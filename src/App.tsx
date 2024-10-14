import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  ThemeProvider
} from './lib/projects.ts'

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
