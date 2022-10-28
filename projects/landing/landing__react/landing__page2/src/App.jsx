import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience'
import Blog from './components/Blog/Blog'
import Testimonials from './components/Testimonials/Testimonials'
import Education from './components/Education/Education'

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Experience />
      <Blog />
      <Testimonials />
      <Education />
    </div>
  )
}

export default App