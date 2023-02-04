import Header from './Containers/Header'

import Main from './Containers/Main/Main'
import Footer from './Containers/Footer'
import ScrollOnTopBtn from './Containers/ScrollOnTopBtn'
import { useRef } from 'react'

export default function Portfolio() {
	const refAboutMe = useRef()
	const refProjects = useRef()

	const ScrollToAboutMe = () => {
		refAboutMe.current.scrollIntoView({ behavior: 'smooth' })
	}
	const ScrollToProjects = () => {
		refProjects.current.scrollIntoView({ behavior: 'smooth' })
	}
	const ScrollToTop = () => {
		refAboutMe.current.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<div className='relative h-[100%]'>
			<Header
				ScrollToAboutMe={ScrollToAboutMe}
				ScrollToProjects={ScrollToProjects}
			/>
			<Main
				refAboutMe={refAboutMe}
				refProjects={refProjects}
			/>
			<Footer />

			<ScrollOnTopBtn ScrollToTop={ScrollToTop} />
		</div>
	)
}
