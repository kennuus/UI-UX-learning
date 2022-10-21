import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Experience />
    </div>
  )
}

export default App