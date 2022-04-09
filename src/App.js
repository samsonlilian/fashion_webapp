import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddNewItem, FashionDetail, Home, SignIn, SignUp } from './pages'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/fashion/:id' element={<FashionDetail />} />
				<Route path='/add' element={<AddNewItem />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
