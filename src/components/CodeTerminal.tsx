import { useEffect, useState } from "react"

const code = `
const developer = {
	name: "Alberto",
	stack: ["React", "Node", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "TailwindCSS"],
	mindset: "Autodidacta",
	build() {
		return "Always learning 🚀"
	}
}
`

export default function CodeTerminal() {
	const [displayed, setDisplayed] = useState("")
	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (index < code.length) {
			const timeout = setTimeout(() => {
				setDisplayed((prev) => prev + code[index])
				setIndex((prev) => prev + 1)
			}, 30)

			return () => clearTimeout(timeout)
		}
	}, [index])

	return (
		<div className="bg-black border border-green-500/30 rounded-lg p-4 font-mono text-green-400 text-sm shadow-lg">
			<pre>{displayed}</pre>
		</div>
	)
}
