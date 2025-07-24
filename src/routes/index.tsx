import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navigation */}
			<header className="bg-white shadow">
				<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold text-gray-800">
						TanStack Router Quickstart
					</h1>
					<a
						href="https://github.com/junminhong/tanstack-router-quickstart"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center"
					>
						<img
							src="https://img.shields.io/github/stars/junminhong/tanstack-router-quickstart?style=social"
							alt="GitHub stars"
							className="h-6"
						/>
					</a>
				</nav>
			</header>

			{/* Hero */}
			<section className="relative flex-grow overflow-hidden">
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-blue-500 blur-3xl opacity-50"
				/>
				<div className="relative z-10 flex flex-col items-center justify-center text-center py-20 container mx-auto px-6">
					<h2 className="text-5xl font-extrabold text-white mb-4">
						Quickstart with TanStack Router
					</h2>
					<p className="text-lg text-white/75 mb-8 max-w-xl">
						Type‑safe routing, file‑based routes, one‑click setup — make React
						navigation seamless.
					</p>
					<div className="flex space-x-4">
						<a
							href="https://tanstack.com/start/latest"
							className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
						>
							Get Started
						</a>
						<a
							href="https://tanstack.com/start/latest/docs/framework/react/overview"
							target="_blank"
							rel="noreferrer"
							className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-indigo-600 transition"
						>
							View Docs
						</a>
					</div>
				</div>
			</section>

			{/* Features */}
			<section id="features" className="py-20 bg-gray-50">
				<div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
					{[
						{
							icon: "⚡",
							title: "Blazing Fast",
							desc: "Powered by Vite for instant startup and HMR.",
						},
						{
							icon: "🔒",
							title: "Type‑Safe",
							desc: "Auto‑generated route types ensure full TypeScript support.",
						},
						{
							icon: "🗂️",
							title: "File‑Based Routing",
							desc: "Routes mirror your folder structure for clarity.",
						},
					].map((item) => (
						<div key={item.title} className="bg-white rounded-xl shadow p-6">
							<div className="text-4xl mb-4">{item.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
							<p className="text-gray-600">{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white shadow-inner">
				<div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
					<p>© 2025 Jasper. All rights reserved.</p>
					<div className="space-x-4 mt-2 md:mt-0">
						<a
							href="https://github.com/junminhong/tanstack-router-quickstart"
							className="hover:underline"
						>
							GitHub
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
