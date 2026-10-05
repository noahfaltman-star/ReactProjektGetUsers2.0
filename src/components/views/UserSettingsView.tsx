import { Sparkles, Shield } from "lucide-react"
import type { User } from "../../types/Types"

type UserSettingsViewProps = {
	user: User
}

const UserSettingsView = ({ user }: UserSettingsViewProps) => {
	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2 text-zinc-400">
					<Sparkles size={13} className="text-zinc-500" />
					<span>Tema</span>
				</div>
				<span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-300 uppercase">
					{user.settings.theme}
				</span>
			</div>

			<div className="space-y-1.5">
				<div className="flex items-center gap-2 text-zinc-400">
					<Shield size={13} className="text-zinc-500" />
					<span>Behörigheter</span>
				</div>
				<div className="flex flex-wrap gap-1 pl-5">
					{user.roles.map((role) => (
						<span
							key={role}
							className="rounded border border-zinc-800/80 bg-zinc-900/60 px-1.5 py-0.5 text-[10px] text-zinc-400"
						>
							{role}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default UserSettingsView