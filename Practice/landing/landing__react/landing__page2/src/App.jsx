/*components*/
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

/* router */
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  /* const refServices = useRef(null)
  const refPortfolios = useRef(null)
  const refExperience = useRef(null)
  const refBlog = useRef(null)
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior:'smooth'
    })
    ref.ref.scrollIntoView({behavior: 'smooth'});
  } */

  return (
    <Router className='app'>
      {/* <Route path="/" exact element={<Header/>} /> */}
      <Header/>

      {/* <Route path="/hero" exact element={<Hero/>} /> */}
      <Hero />

      {/* <Route path="/services" element={<Services/>} /> */}
      <Services/>

      {/* <Route path="/portfolio" element={<Portfolio/>} /> */}
      <Portfolio/>

      {/* <Route path="/experience" element={<Experience/>} /> */}
      <Experience/>

      {/* <Route path="/blog" element={<Blog/>} /> */}
      <Blog/>

      {/* <Route path="/testimonials" exact element={<Testimonials/>} /> */}
      <Testimonials />

      {/* <Route path="/education" exact element={<Education/>} /> */}
      <Education />

      {/* <Route path="/contact" exact element={<Contact/>} /> */}
      <Contact />
      <Routes>
        <Route path="/" element={<Footer/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App