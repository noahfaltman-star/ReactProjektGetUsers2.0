import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/FetchUsers"

import UserList from "./UserList"

const Users = () => {
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

	return (
		<>
			<UserList users={users} />
		</>
	)
}

export default Users
