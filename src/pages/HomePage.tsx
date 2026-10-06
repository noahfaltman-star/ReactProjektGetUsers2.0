import { useParams } from "react-router-dom"
import type { CategoryType } from "../types/Types"
import Users from "../components/Users"

const HomePage = () => {
	const { category = "profile" } = useParams<{ category: CategoryType }>()

	return (
		<section className="space-y-8">
			{/* Typografisk rubrik med modern byråkänsla */}
			<div className="flex flex-col gap-2 border-b border-zinc-850 pb-6 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
						Katalog — Index
					</p>
					<h2 className="mt-1 text-2xl font-light tracking-tight text-zinc-100 sm:text-3xl">
						Medarbetare & Roller
					</h2>
				</div>
				<span className="font-mono text-[11px] text-zinc-500">
					AKTIV VY: <strong className="font-semibold text-zinc-300 uppercase">{category}</strong>
				</span>
			</div>

			<Users category={category as CategoryType} />
		</section>
	)
}

export default HomePage