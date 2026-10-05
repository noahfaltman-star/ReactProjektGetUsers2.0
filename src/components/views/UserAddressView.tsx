import { MapPin } from "lucide-react"
import type { User } from "../../types/Types"

type UserAddressViewProps = {
	user: User
}

const UserAddressView = ({ user }: UserAddressViewProps) => {
	return (
		<div>
			<MapPin size={14} />
			<p>{user.profile.address.street}</p>
			<p>
				{user.profile.address.zipCode} {user.profile.address.city}
			</p>
		</div>
	)
}

export default UserAddressView