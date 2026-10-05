import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar"
import HomePage from "./pages/HomePage"

function App() {
	return (
		<div>
			<header>
				<h1>Personalöversikt</h1>
				<NavBar />
			</header>

			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/:category" element={<HomePage />} />
				</Routes>
			</main>
		</div>
	)
}

export default App