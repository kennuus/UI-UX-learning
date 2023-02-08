import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Pages/Portfolio/Portfolio'
import Restaurant from './Pages/Restaurant/Restaurant'
import Error from './Error'
import Loading from './Loading.jsx'
import { useState, useEffect } from 'react'

export default function App() {
	const [loading, setLoading] = useState(true)
	const setTheme = (themeName) => {
		themeName === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}

	useEffect(() => {
		async function loadCSS() {
			const root = document.querySelector('#root')
			root.style.height = '100vh'
			const currentURL = window.location.pathname
			let cssPath = ''

			if (currentURL === '/') {
				cssPath = './CSS/root.css'
			} else if (currentURL === '/Restaurant') {
				cssPath = './CSS/restaurant.css'
			} else setLoading(false)

			/* when websites starts */
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? setTheme('dark')
				: setTheme('light')

			/* at the time of work */
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.addEventListener('change', (e) => {
					e.matches ? setTheme('dark') : setTheme('light')
				})

			const css = await import(cssPath)

			const linkElement = document.createElement('link')
			linkElement.rel = 'stylesheet'
			linkElement.href = css.default
			document.head.appendChild(linkElement)

			await setLoading(false)
			root.style.height = 'max-content'
		}

		loadCSS()
	}, [])
	return loading === true ? (
		<Loading />
	) : (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Portfolio />} />
				<Route path='/Restaurant' element={<Restaurant />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}
