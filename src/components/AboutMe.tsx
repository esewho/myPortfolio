export default function AboutMe() {
	return (
		<section className="w-full py-32">
			<h2 className="font-mono text-3xl text-white mb-16 text-center">
				About Me
			</h2>

			<div className="flex flex-col md:flex-row items-center gap-16 px-6">
				{/* CONTENEDOR IMAGEN (LIBRE) */}
				<div className="w-full md:w-1/2 flex justify-center">
					<img
						src="/falloutNerd-removebg-preview.png"
						alt="Fallout nerd"
						className="w-80 md:w-[420px] lg:w-[480px]
							drop-shadow-[0_0_35px_rgba(34,197,94,0.35)] mask-b-from-20% mask-b-to-100% "
					/>
				</div>

				{/* CONTENEDOR TEXTO (CONTROLADO) */}
				<div className="w-full md:w-1/2 max-w-xl">
					<p className="text-gray-300 leading-relaxed mb-8">
						Soy desarrollador <span className="text-green-400">Full Stack</span>{" "}
						con enfoque en aplicaciones web modernas. Me gusta entender cómo
						funcionan las cosas por dentro y mejorar continuamente mi forma de
						trabajar.
					</p>

					<ul className="font-mono text-green-400 space-y-2">
						<li>⚡ React / TypeScript / HTML</li>
						<li>⚡ Node.js / Express / NestJS</li>
						<li>⚡ SQL / Prisma / Sequelize</li>
						<li>⚡ Git / GitHub</li>
						<li>⚡ TailwindCSS / CSS</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
