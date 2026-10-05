import { AtSign, Mail, MapPin, Sparkles, Shield } from "lucide-react"
import type { User } from "../types/Types"

type UserCardProps = {
	user: User
}

const UserCard = ({ user }: UserCardProps) => {
	return (
		<article>
			<header>
				<div>
					<h3>{user.profile.name}</h3>
					<p>
						<AtSign size={12} />
						<span>{user.username}</span>
					</p>
				</div>
			</header>

			<div>
				<Mail size={14} />
				<a href={user.profile.email}>{user.profile.email}</a>
			</div>

			<div>
				<MapPin size={14} />
				<p>{user.profile.address.street}</p>
				<p>
					{user.profile.address.zipCode}{" "}
					{user.profile.address.city}
				</p>
			</div>

			<div>
				<div>
					<Sparkles size={14} />
					<span>Tema: {user.settings.theme}</span>
				</div>
				<div>
					<Shield size={14} />
					<span>Roller:</span>
					<ul>
						{user.roles.map(role => (
							<li key={role}>{role}</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	)
}

export default UserCard
