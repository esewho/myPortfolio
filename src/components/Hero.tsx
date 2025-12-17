import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const roles = ["Full Stack Developer", "Autodidacta", "Problem Solver"]

export default function Hero() {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % roles.length)
		}, 2000)

		return () => clearInterval(interval)
	}, [])

	return (
		<section className="flex flex-col items-center justify-center flex-1 text-center px-4">
			{/* Nombre */}
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className=" font-mono text-5xl md:text-6xl font-bold text-white flex items-center gap-3"
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

			{/* Texto dinámico */}
			<motion.p
				key={roles[index]}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className=" font-mono mt-4 text-xl md:text-2xl text-green-400"
			>
				{roles[index]}
			</motion.p>
		</section>
	)
}
