import { MapPin } from "lucide-react"
import type { User } from "../../types/Types"

type UserAddressViewProps = {
	user: User
}
// Visar adressinformation formaterad i två rader med platsikon
const UserAddressView = ({ user }: UserAddressViewProps) => {
	return (
		<div className="space-y-1.5">
			<div className="flex items-center gap-2 text-zinc-400">
				<MapPin size={13} className="text-zinc-500" />
				<p className="text-zinc-200">{user.profile.address.street}</p>
			</div>
			<p className="pl-5 text-zinc-500">
				{user.profile.address.zipCode} {user.profile.address.city}
			</p>
		</div>
	)
}

export default UserAddressView