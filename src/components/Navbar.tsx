import { Link } from "react-router-dom"
import { User, MapPin, Sliders } from "lucide-react"

const NavBar = () => {
	const links = [
		{ to: "/profile", label: "Profil", icon: User },
		{ to: "/address", label: "Adress", icon: MapPin },
		{ to: "/settings", label: "Inställningar", icon: Sliders },
	]

	return (
		<nav>
			{links.map((link) => {
				const Icon = link.icon

				return (
					<Link key={link.to} to={link.to}>
						<Icon size={16} />
						<span>{link.label}</span>
					</Link>
				)
			})}
		</nav>
	)
}

export default NavBar