import { AtSign } from "lucide-react"
import type { User, CategoryType } from "../types/Types"
import UserProfileView from "./views/UserProfileView"
import UserAddressView from "./views/UserAddressView"
import UserSettingsView from "./views/UserSettingsView"

type UserCardProps = {
	user: User
	category?: CategoryType
	index?: number
}

const UserCard = ({ user, category = "profile", index = 1 }: UserCardProps) => {
	return (
		<article className="group relative flex min-h-[220px] flex-col justify-between bg-[#0e0e0e] p-6 transition-colors duration-300 hover:bg-[#141414]">
			<div>
				<header className="flex items-start justify-between border-b border-zinc-800/60 pb-5">
					<div className="space-y-1">
						<span className="font-mono text-[10px] tracking-wider text-zinc-600">
							№ {String(index).padStart(2, "0")}
						</span>
						<h3 className="text-base font-medium tracking-tight text-zinc-100 group-hover:text-white">
							{user.profile.name}
						</h3>
						<p className="flex items-center gap-1 font-mono text-xs text-zinc-500">
							<AtSign size={11} className="opacity-60" />
							<span>{user.username}</span>
						</p>
					</div>

					<div className="flex h-9 w-9 items-center justify-center rounded-sm border border-zinc-800 bg-zinc-900 font-mono text-xs font-semibold text-zinc-300 transition-colors group-hover:border-zinc-700 group-hover:text-white">
						{user.profile.name.charAt(0)}
					</div>
				</header>

				{/* Vyer */}
				<div className="pt-5 font-mono text-xs text-zinc-400">
					{category === "address" && <UserAddressView user={user} />}
					{category === "settings" && <UserSettingsView user={user} />}
					{category === "profile" && <UserProfileView user={user} />}
				</div>
			</div>

			{/* Subtil kantmarkör nere i hörnet vid hover */}
			<div className="mt-6 flex justify-end">
				<span className="font-mono text-[9px] tracking-widest text-zinc-700 uppercase transition-colors group-hover:text-zinc-500">
					STATUS // AKTIV
				</span>
			</div>
		</article>
	)
}

export default UserCard