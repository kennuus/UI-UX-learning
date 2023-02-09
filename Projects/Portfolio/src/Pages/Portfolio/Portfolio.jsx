import Header from './Containers/Header'
import Main from './Containers/Main/Main'
import Footer from './Containers/Footer'
import ScrollOnTopBtn from './Containers/ScrollOnTopBtn'
import ThemeSwitcher from './Containers/ThemeSwitcher'
import { useRef, useState } from 'react'

export default function Portfolio() {
	const refAboutMe = useRef()
	const refProjects = useRef()
	const [isProjectOpened, setIsProjectOpened] = useState(false)
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
		<div className='relative h-[100%] ' ref={refTop}>
			<Header
				ScrollToAboutMe={ScrollToAboutMe}
				ScrollToProjects={ScrollToProjects}
				isProjectOpened={isProjectOpened}
			/>
			<Main
				refAboutMe={refAboutMe}
				refProjects={refProjects}
				isProjectOpened={isProjectOpened}
				setIsProjectOpened={setIsProjectOpened}
				ScrollToProjects={ScrollToProjects}
			/>
			

			<ScrollOnTopBtn
				ScrollToTop={ScrollToTop}
				isProjectOpened={isProjectOpened}
			/>
			<Footer />
			<div className='hidden pc:block fixed top-6 right-6'>
				<ThemeSwitcher />
			</div>
		</div>
	)
}
