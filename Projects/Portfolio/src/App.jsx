import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Pages/Root/Portfolio'
import Restaurant from './Pages/Restaurant/Restaurant'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Portfolio />} />
				<Route path='restaurant' element={<Restaurant />} />
			</Routes>
		</BrowserRouter>
	)
}
