import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar"
import HomePage from "./pages/HomePage"

function App() {
	return (
		<div className="min-h-screen bg-[#080808] font-sans text-zinc-100 antialiased selection:bg-zinc-100 selection:text-black">
			<header className="sticky top-0 z-30 border-b border-zinc-800/80 bg-[#080808]/85 backdrop-blur-md">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
					<div className="flex items-center gap-3">
						{/* Pulserande grön statusprick */}
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
						</span>

						<h1 className="text-sm font-medium tracking-tight text-zinc-100 uppercase">
							Personalöversikt
						</h1>
					</div>
					<NavBar />
				</div>
			</header>

			<main className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-16">
				<Routes>
					{/* Rotadressen renderar HomePage med förvald vy */}
					<Route path="/" element={<HomePage />} />
					{/* Fångar upp dynamiska kategorier som /profile, /address eller /settings */}
					<Route path="/:category" element={<HomePage />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
