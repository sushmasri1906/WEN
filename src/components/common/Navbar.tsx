"use client";

import Link from "next/link";

export default function PublicNavbar() {
	return (
		<nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
			<Link href="/" className="text-2xl font-bold text-pink-600">
				WEN✨
			</Link>

			<div className="flex items-center gap-6 text-sm font-medium text-pink-700">
				<Link href="/" className="hover:text-pink-500 transition">
					Home
				</Link>
				<Link href="/posts" className="hover:text-pink-500 transition">
					Posts
				</Link>
				<Link href="/about" className="hover:text-pink-500 transition">
					About
				</Link>
			</div>
		</nav>
	);
}
