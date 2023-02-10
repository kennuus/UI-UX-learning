import Header from './Containers/Header'
import Main from './Containers/Main/Main'
import Footer from './Containers/Footer'
import ScrollOnTopBtn from './Containers/ScrollOnTopBtn'
import ThemeSwitcher from './Containers/ThemeSwitcher'
import { useRef } from 'react'

export default function Portfolio() {
	const refAboutMe = useRef()
	const refProjects = useRef()
	const refTop = useRef()

	const ScrollToAboutMe = () => {
		refAboutMe.current.scrollIntoView({ behavior: 'smooth' })
	}
	const ScrollToProjects = () => {
		refProjects.current.scrollIntoView({ behavior: 'smooth' })
	}
	const ScrollToTop = () => {
		refTop.current.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<>
			<Main
				refAboutMe={refAboutMe}
				refProjects={refProjects}
				ScrollToProjects={ScrollToProjects}
				refTop={refTop}
			/>

			<div className='hidden pc:block fixed top-6 right-6'>
				<ThemeSwitcher />
			</div>

			<ScrollOnTopBtn ScrollToTop={ScrollToTop} />
			<Header
				ScrollToAboutMe={ScrollToAboutMe}
				ScrollToProjects={ScrollToProjects}
			/>
			<Footer />
		</>
	)
}
