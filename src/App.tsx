import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"

function App() {
	return (
		<div>
			<header>
				<h1>Personalöversikt</h1>
				<Navbar />
			</header>

			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
