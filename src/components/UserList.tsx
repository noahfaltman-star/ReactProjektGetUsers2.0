import UserCard from "./UserCard"
import type { User} from "../types/Types"

type UserListProps = {
	users: User[]
}

const UserList = ({ users}: UserListProps) => {
	if (!users || users.length === 0) {
		return <p>Inga användare hittades.</p>
	}

	return (
		<div>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	)
}

export default UserList