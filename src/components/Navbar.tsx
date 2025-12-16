export default function Navbar() {
	return (
		<div className="flex flex-row ">
			<div className="bg-gray-800 p-4 w-full ">
				<ul className="flex space-x-4 items-center justify-around">
					<li>
						<a href="/home" className="text-white hover:text-gray-400">
							Home
						</a>
					</li>
					<li>
						<a href="/about" className="text-white hover:text-gray-400">
							About
						</a>
					</li>
					<li>
						<a href="/projects" className="text-white hover:text-gray-400">
							Projects
						</a>
					</li>
					<li>
						<a href="/contact" className="text-white hover:text-gray-400">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
