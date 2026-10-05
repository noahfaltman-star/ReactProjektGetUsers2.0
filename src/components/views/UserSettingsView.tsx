import { Sparkles, Shield } from "lucide-react"
import type { User } from "../../types/Types"

type UserSettingsViewProps = {
	user: User
}

const UserSettingsView = ({ user }: UserSettingsViewProps) => {
	return (
		<div>
			<div>
				<Sparkles size={14} />
				<span>Tema: {user.settings.theme}</span>
			</div>
			<div>
				<Shield size={14} />
				<span>Roller:</span>
				<ul>
					{user.roles.map((role) => (
						<li key={role}>{role}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default UserSettingsView