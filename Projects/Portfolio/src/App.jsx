import Header from './Components/Header/Header'

import Main from './Components/Main/Main'

import Footer from './Components/Footer/Footer'

import ScrollOnTopBtn from './Components/ScrollOnTopBtn'
import ThemeSwitcher from './Components/ThemeSwitcher'

function App() {
	return (
		<div className='text-black dark:text-white dark:bg-black bg-white md:text-[18px] text-[22px]'>
			{/* <Header /> */}
			<Main />
			<Footer />

			<ScrollOnTopBtn />
			<ThemeSwitcher />
		</div>
	)
}

export default App
