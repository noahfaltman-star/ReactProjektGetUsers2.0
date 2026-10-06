import { useQuery } from "@tanstack/react-query"
import { Loader2, AlertCircle } from "lucide-react"
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
		return (
			<div className="flex flex-col items-center justify-center gap-3 py-24 text-zinc-500">
				<Loader2 size={20} className="animate-spin text-zinc-400" />
				<span className="font-mono text-xs tracking-widest uppercase">
					Laddar dataflöde...
				</span>
			</div>
		)
	}

	if (error) {
		return (
			<div className="flex items-center gap-3 rounded-lg border border-red-950/60 bg-red-950/20 p-5 font-mono text-xs text-red-400">
				<AlertCircle size={16} className="shrink-0 text-red-500" />
				<span>FEL VID DATAHÄMTNING: {error.message}</span>
			</div>
		)
	}

	return <>{users && <UserList users={users} category={category} />}</>
}

export default Users
