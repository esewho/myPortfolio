export default function Navbar() {
	return (
		<div className="sticky top-0 z-50 bg-gray-900">
			<ul className="flex items-center justify-around p-4 font-mono">
				{["home", "about", "projects", "contact"].map((item) => (
					<li key={item} className="cursor-pointer">
						<a
							href={`#${item}`}
							className="text-green-400 hover:text-green-600 transition"
						>
							{item.toUpperCase()}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
