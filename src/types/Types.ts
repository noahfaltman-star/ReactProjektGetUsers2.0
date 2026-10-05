export type CategoryType = "profile" | "address" | "settings"

export interface User {
	id: number
	username: string
	roles: string[]
	settings: {
		theme: string
	}
	profile: {
		name: string
		email: string
		address: {
			street: string
			city: string
			zipCode: string
		}
	}
}
