import UserCard from "./UserCard"
import type { User, CategoryType } from "../types/Types"

type UserListProps = {
	users: User[]
	category?: CategoryType
}

const UserList = ({ users, category }: UserListProps) => {
	if (!users || users.length === 0) {
		return <p>Inga användare hittades.</p>
	}

	return (
		<div>
			{users.map((user) => (
				<UserCard key={user.id} user={user} category={category} />
			))}
		</div>
	)
}

export default UserList