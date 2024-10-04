import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
	pages: {
		signIn: '/signin',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user
			const isOnNotes = nextUrl.pathname.startsWith('/notes')
			if (isOnNotes) {
				if (isLoggedIn) return true
				return false
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/notes', nextUrl))
			}
			return true
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			  }
			return session;
		  },
	},
	providers: [],
} satisfies NextAuthConfig
