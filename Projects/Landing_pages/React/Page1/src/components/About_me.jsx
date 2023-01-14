/* about me */
import Hero from './About_me/Hero/Hero'
import Services from './About_me/Services/Services'
import Portfolio from './About_me/Portfolio/Portfolio'
import Experience from './About_me/Experience/Experience'
import Blog from './About_me/Blog/Blog'
import Testimonials from './About_me/Testimonials/Testimonials'
import Education from './About_me/Education/Education'
import Contact from './About_me/Contact/Contact'

/* header + footer */
import Header from './Header/Header'
import Footer from './Footer/Footer'

/* router */
import {
  useLoaderData
} from 'react-router-dom'

export default function About_me() {
  const {About_me, load_About_me} = useLoaderData()
  return (
    <div className='app'>
      <Header/>
      <main>
        <Hero />
        <Services/>
        <Portfolio/>
        <Experience/>
        <Blog/>
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer/>
    </div>
  )
}