import { Mail } from "lucide-react"
import type { User } from "../../types/Types"

type UserProfileViewProps = {
	user: User
}

const UserProfileView = ({ user }: UserProfileViewProps) => {
	return (
		<div className="flex items-center gap-2.5">
			<Mail size={13} className="text-zinc-500" />
			<a
				href={`mailto:${user.profile.email}`}
				className="truncate text-zinc-300 transition-colors hover:text-white hover:underline"
			>
				{user.profile.email}
			</a>
		</div>
	)
}

export default UserProfileView