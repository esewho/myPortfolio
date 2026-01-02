export default function AboutMe() {
	return (
		<section className="w-full py-32">
			<h2 className="font-mono text-3xl text-white mb-16 text-center">
				About Me
			</h2>

			{/* CONTENEDOR PADRE */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-16 px-6 items-stretch">
				{/* CONTENEDOR IZQUIERDO */}
				<div
					className="w-full h-full max-h-[520px] flex flex-col lg:flex-row  justify-center items-center gap-8
					bg-green-400/5 p-6 rounded-xl border border-green-500/20"
				>
					<img
						src="/falloutNerd-removebg-preview.png"
						alt="Fallout nerd"
						className="w-80 md:w-[420px] lg:w-[480px]
						mask-b-from-20% mask-b-to-100%"
					/>

					<ul className="font-mono text-green-400 space-y-2">
						<li>⚡ React / TypeScript / HTML</li>
						<li>⚡ Node.js / Express / NestJS</li>
						<li>⚡ SQL / Prisma / Sequelize</li>
						<li>⚡ Git / GitHub</li>
						<li>⚡ TailwindCSS / CSS</li>
					</ul>
				</div>

				{/* CONTENEDOR DERECHO */}
				<div
					className="w-full h-full max-h-[520px] flex flex-col lg:flex-row justify-center items-center gap-8
					bg-gray-900/50 p-6 rounded-xl border border-green-500/20"
				>
					<img
						src="/pngegg.png"
						alt="conversation"
						className="mb-6 w-80 xl:w-[200px] lg:w-[200px]
						mask-b-from-20% mask-b-to-100%"
					/>

					<p className="text-gray-300 leading-relaxed">
						Soy desarrollador <span className="text-green-400">Full Stack</span>{" "}
						con enfoque en aplicaciones web modernas. Me gusta entender cómo
						funcionan las cosas por dentro y mejorar continuamente mi forma de
						trabajar.
					</p>
				</div>
			</div>
		</section>
	)
}
