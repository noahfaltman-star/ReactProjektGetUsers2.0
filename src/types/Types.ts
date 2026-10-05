
export type User = {
	id: number
	profile: {
        address: {
            street: string
			city: string
			zipCode: string
		}
		email: string
		name: string
	}
	roles: []
	settings: {
        notifications: {
            email: boolean
			push: boolean
		}
		theme: string
	}
    username: string
}