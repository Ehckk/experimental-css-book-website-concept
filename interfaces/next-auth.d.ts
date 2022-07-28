import { Session, JWT, User } from 'next-auth'

declare module 'next-auth' {
	interface User {
		username: string,
		discriminator: string,
		id: string,
		avatar: string,
		accentColor: number,
		banner: string,
		bannerColor: string,
		flags: number,
		premiumType: number,
		publicFlags: number,
		verified: boolean
	}
	interface Session {
		user: User
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: User
	}
}