export default function Navbar() {
	return (
		<div className="flex flex-row sticky top-0 z-50">
			<div className="bg-gray-900 p-4 w-full ">
				<ul className="flex space-x-4 items-center justify-around">
					<li>
						<a
							href="/home"
							className="text-green-400 hover:text-green-600 font-mono"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="/about"
							className="text-green-400 hover:text-green-600 font-mono"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="/projects"
							className="text-green-400 hover:text-green-600 font-mono"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="/contact"
							className="text-green-400 hover:text-green-600 font-mono"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
