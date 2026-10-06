import { Link } from "react-router-dom"
import { User, MapPin, Sliders } from "lucide-react"

const NavBar = () => {
	// Konfiguration av navigationslänkar med ikon och mål-URL
	const links = [
		{ to: "/profile", label: "Profil", icon: User },
		{ to: "/address", label: "Adress", icon: MapPin },
		{ to: "/settings", label: "Inställningar", icon: Sliders },
	]

	return (
		<nav className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 p-1">
			{/* Renderar en länk per konfigurationsobjekt */}
			{links.map(link => {
				const Icon = link.icon

				return (
					<Link
						key={link.to}
						to={link.to}
						className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs tracking-wider uppercase text-zinc-400 transition-all duration-200 hover:bg-zinc-800 hover:text-zinc-100"
					>
						<Icon size={13} className="text-zinc-500" />
						<span>{link.label}</span>
					</Link>
				)
			})}
		</nav>
	)
}

export default NavBar
