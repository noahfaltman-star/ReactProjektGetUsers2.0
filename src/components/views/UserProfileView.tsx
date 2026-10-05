import { Mail } from "lucide-react"
import type { User } from "../../types/Types"

type UserProfileViewProps = {
	user: User
}

const UserProfileView = ({ user }: UserProfileViewProps) => {
	return (
		<div>
			<Mail size={14} />
			<a href={`mailto:${user.profile.email}`}>{user.profile.email}</a>
		</div>
	)
}

export default UserProfileView