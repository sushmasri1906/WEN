"use client";

import { signOut } from "next-auth/react";

export default function Dashboard({ email }: { email: string }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-pink-700">
			<h1 className="text-3xl font-bold mb-4">Welcome to WEN CMS 👋</h1>

			{email && <p className="mb-6">Logged in as: {email}</p>}

			<button
				onClick={() => signOut({ callbackUrl: "/login" })}
				className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
				Sign Out
			</button>
		</div>
	);
}
