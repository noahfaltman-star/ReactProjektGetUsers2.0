import { AtSign } from "lucide-react"
import type { User, CategoryType } from "../types/Types"
import UserProfileView from "./views/UserProfileView"
import UserAddressView from "./views/UserAddressView"
import UserSettingsView from "./views/UserSettingsView"

type UserCardProps = {
	user: User
	category?: CategoryType
}

const UserCard = ({ user, category = "profile" }: UserCardProps) => {
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
				{category === "address" && <UserAddressView user={user} />}
				{category === "settings" && <UserSettingsView user={user} />}
				{category === "profile" && <UserProfileView user={user} />}
			</div>
		</article>
	)
}

export default UserCard