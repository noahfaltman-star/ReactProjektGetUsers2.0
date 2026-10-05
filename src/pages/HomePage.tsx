import { useParams } from "react-router-dom"
import type { CategoryType } from "../types/Types"
import Users from "../components/Users"

const HomePage = () => {
	const { category = "profile" } = useParams<{ category: CategoryType }>()

	return (
		<section>
			<Users category={category as CategoryType} />
		</section>
	)
}

export default HomePage