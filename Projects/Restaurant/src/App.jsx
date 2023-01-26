import Home from './Containers/Home'
import Sheet from './Containers/Main/Sheet'
import { useRef } from 'react'
import Sidebar from './Containers/Sidebar'

function App() {
	const refSheet = useRef()
	const refPhotos = useRef()
	const refHome = useRef()
	const refReviews = useRef()

	const ScrollToMain = () => {
		refSheet.current.scrollIntoView({ behavior: 'smooth' })
	}
	const ScrollToPhotos = () => {
		refPhotos.current.scrollIntoView({ behavior: 'smooth' })
	}
	const ScrollToHome = () => {
		refHome.current.scrollIntoView({ behavior: 'smooth' })
	}
	const ScrollToReviews = () => {
		refReviews.current.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<div className='flex justify-center'>
			<Home toMain={ScrollToMain} refHome={refHome} />
			<Sidebar
				toPhotos={ScrollToPhotos}
				toHome={ScrollToHome}
				toReviews={ScrollToReviews}
			/>

			<Sheet
				refSheet={refSheet}
				refPhotos={refPhotos}
				refReviews={refReviews}
			/>
		</div>
	)
}

export default App
