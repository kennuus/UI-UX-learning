import Home from './Containers/Home'
import Sheet from './Containers/Sheet/Sheet'
import { useRef } from 'react'
import Header from './Containers/Header'

function App() {
	const refSheet = useRef()
	const refPhotos = useRef()
	const refHome = useRef()
	const refReviews = useRef()
	const refContacts = useRef()

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
	const ScrollToContacts = () => {
		refContacts.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className='flex justify-center'>
			<Home toMain={ScrollToMain} refHome={refHome} />
			<Header
				toPhotos={ScrollToPhotos}
				toHome={ScrollToHome}
				toReviews={ScrollToReviews}
				toContacts={ScrollToContacts}
			/>

			<Sheet
				refSheet={refSheet}
				refPhotos={refPhotos}
				refReviews={refReviews}
				refContacts={refContacts}
			/>
		</div>
	)
}

export default App
