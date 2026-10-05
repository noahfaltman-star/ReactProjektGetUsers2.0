import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/FetchUsers"
import type { CategoryType } from "../types/Types"
import UserList from "./UserList"

type UsersProps = {
	category?: CategoryType
}

const Users = ({ category }: UsersProps) => {
	const {
		data: users,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["UserData"],
		queryFn: fetchUsers,
		staleTime: 300000,
	})

	if (isLoading) {
		return <p>Hämtar användare...</p>
	}

	if (error) {
		return <p>Ett fel uppstod: {error.message}</p>
	}

	return <>{users && <UserList users={users} category={category} />}</>
}

export default Users