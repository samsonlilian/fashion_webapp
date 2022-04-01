import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FashionDetail, Home, SignUp } from './pages'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/fashion/:id' element={<FashionDetail />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
