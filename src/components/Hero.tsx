import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import CodeTerminal from "./CodeTerminal"
import { Github, Mail, Contact } from "lucide-react"
import AboutMe from "./AboutMe"
import ProjectCard from "./ProjectCard"
import PipBoyFrame from "./PipBoyFrame"

const roles = ["Full Stack Developer", "Autodidacta", "Problem Solver"]

export default function Hero() {
	const [index, setIndex] = useState(0)
	const [isOn, setIsOn] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % roles.length)
		}, 2000)

		return () => clearInterval(interval)
	}, [])

	return (
		<section className="flex flex-col flex-1 px-6 gap-16">
			{/* BLOQUE SUPERIOR */}
			<div className="flex justify-center">
				{/* CONTENEDOR IMAGEN + TEXTO */}
				<div className="flex flex-col md:flex-row items-center gap-6">
					{/* IMAGEN (IZQUIERDA) */}
					<img
						src="./lolaso.png"
						alt="Alberto cartoon"
						className="w-56 md:w-64 drop-shadow-[0_0_25px_rgba(34,197,94,0.25)] mask-b-from-20% mask-b-to-90%"
					/>

					{/* TEXTO (DERECHA, PEGADO) */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="font-mono text-5xl md:text-6xl font-bold text-white flex items-center gap-3"
						>
							¡Hola! soy Alberto
							<motion.span
								animate={{ rotate: [0, 20, 0] }}
								transition={{ repeat: Infinity, duration: 1.2 }}
								className="inline-block origin-bottom-right"
							>
								👋
							</motion.span>
						</motion.h1>

						<motion.p
							key={roles[index]}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="font-mono mt-4 text-xl md:text-2xl text-green-400"
						>
							{roles[index]}
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="mt-4"
						>
							<div className="flex mt-6 space-x-4 gap-4">
								<a
									href="mailto: albertogfcb@gmail.com"
									className="text-green-400 hover:text-green-600 font-mono flex items-center gap-2"
								>
									<Mail />
									Contact Me
								</a>
								<a
									href="https://github.com/esewho"
									className="text-green-400 hover:text-green-600 font-mono flex items-center gap-2"
									target="_blank"
								>
									<Github />
									GitHub
								</a>
								<a
									href="https://wa.me/34722110848?text=Hola%20Alberto,%20he%20visto%20tu%20portfolio"
									target="_blank"
									rel="noopener noreferrer"
									className="text-green-400 hover:text-green-600 font-mono flex items-center gap-2"
								>
									<Contact />
									Let's Talk
								</a>

								<a
									href="https://www.linkedin.com/in/alberto-gal%C3%A1n-otero-97817b357/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-green-400 hover:text-green-600 font-mono flex items-center gap-2"
								>
									<Contact />
									LinkedIn
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* BLOQUE INFERIOR – TERMINAL */}

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className="w-full max-w-4xl mx-auto"
			>
				<button
					className="font-mono px-6 py-2 rounded
					border border-green-500 text-green-400
					hover:bg-green-500/10 transition cursor-pointer mb-4  "
					onClick={() => setIsOn((prev) => !prev)}
				>
					{isOn ? "POWER OFF" : "POWER ON"}
				</button>
				<PipBoyFrame isOn={isOn}>
					<CodeTerminal />
				</PipBoyFrame>
			</motion.div>
			{/* ABOUT ME SECTION */}
			<motion.div
				id="about"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8 }}
				className="w-full max-w-full mx-auto"
			>
				<AboutMe />
			</motion.div>
			{/* PROJECTS SECTION */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.0 }}
				className="w-full max-w-full mx-auto"
			>
				<section id="projects" className="w-full my-2">
					<h2 className="font-mono text-3xl text-white mb-16 text-center">
						Projects
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
						{/* Example Project Cards */}
						<ProjectCard
							project={{
								title: "Portfolio Website",
								description:
									"My personal portfolio website to showcase my projects and skills.",
								stack: ["React", "TypeScript", "TailwindCSS"],
								github: "esewho/portfolio",
								demo: "https://albertogalan.dev",
							}}
						/>
						<ProjectCard
							project={{
								title: "TalentGo",
								description:
									"A web application to find or create job offers easily and quickly.",
								stack: [
									"Node.js",
									"Express",
									"Sequelize",
									"PostgreSQL",
									"React",
									"TailwindCSS",
								],
								github: "esewho/talentgo",
							}}
						/>
						<ProjectCard
							project={{
								title: "E-commerce Platform",
								description:
									"An online platform for buying and selling products with payment integration.",
								stack: [
									"NestJS",
									"PostgreSQL",
									"React",
									"Stripe",
									"TailwindCSS",
									"TypeScript",
									"Prisma",
								],
								github: "esewho/e-commerce-platform",
								demo: "https://ecommerce.albertogalan.dev",
							}}
						/>
					</div>
				</section>
			</motion.div>
		</section>
	)
}
