import UserCard from "./UserCard"
import type { User, CategoryType } from "../types/Types"

type UserListProps = {
	users: User[]
	category?: CategoryType
}

const UserList = ({ users, category }: UserListProps) => {
	// Skydd mot tom eller saknad lista
	if (!users || users.length === 0) {
		return (
			<div className="rounded-xl border border-dashed border-zinc-800 p-16 text-center font-mono text-xs text-zinc-500">
				INGA ANVÄNDARE FUNNA
			</div>
		)
	}

	return (
		<div className="grid grid-cols-1 gap-px border border-zinc-800 bg-zinc-800/80 sm:grid-cols-2 lg:grid-cols-3">
			{/* index är För att kunna skriva ut radnummer som № 01 */}
			{/* Skapar ett UserCard per användare i arrayen */}
			{users.map((user, idx) => (
				<UserCard key={user.id} user={user} category={category} index={idx + 1} />
			))}
		</div>
	)
}

export default UserList