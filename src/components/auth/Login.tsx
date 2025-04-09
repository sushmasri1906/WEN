"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 px-4">
			<h1 className="text-4xl font-bold text-pink-700 mb-8">
				Welcome to WEN CMS 💼
			</h1>
			<p className="text-pink-600 mb-6 text-center max-w-md">
				Women Entrepreneurship Network – please sign in to manage content and
				publish blogs.
			</p>

			<button
				onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
				className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
				Sign in with Google
			</button>
		</div>
	);
}
