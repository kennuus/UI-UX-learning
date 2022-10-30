import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience'
import Blog from './components/Blog/Blog'
import Testimonials from './components/Testimonials/Testimonials'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

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
      <Contact />
      <Footer />
    </div>
  )
}

export default App