// lib/auth.ts

import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

// List of allowed admin emails
const adminEmails = ["sushmasri1906@gmail.com", "harunath04@gmail.com"]; // ← Add yours here

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async signIn({ user }) {
			// Allow only if email is in the admin list
			return user.email ? adminEmails.includes(user.email) : false;
		},
		async redirect({ baseUrl }) {
			return `${baseUrl}/dashboard`;
		},
	},
	pages: {
		error: "/login?error=AccessDenied",
	},
};
