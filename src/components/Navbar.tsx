import FalloutClock from "./FalloutClock"

export default function Navbar() {
	const navItems = ["home", "about", "projects", "contact"]
	return (
		<div className="sticky top-0 z-50 bg-black backdrop-blur-md border-b border-green-500">
			<div className="grid grid-cols-3 items-center px-6 py-4 font-mono">
				{/* ZONA IZQUIERDA – RELOJ / STATUS */}
				<div className="text-green-400 text-sm">
					{/* Placeholder */}
					<FalloutClock />
				</div>

				{/* ZONA CENTRAL – NAV */}
				<ul className="flex justify-center gap-8">
					{navItems.map((item) => (
						<li key={item}>
							<a
								href={`#${item}`}
								className="text-green-400 hover:text-green-600 transition"
							>
								{item.toUpperCase()}
							</a>
						</li>
					))}
				</ul>

				{/* ZONA DERECHA – INDICADOR */}
				<div className="text-green-400 text-sm text-right">
					<span>SYSTEM OK</span>
				</div>
			</div>
		</div>
	)
}
