import { useEffect, useState } from "react"

export default function FalloutClock() {
	const [time, setTime] = useState("")

	useEffect(() => {
		const update = () => {
			const now = new Date()
			setTime(
				now.toLocaleTimeString("es-ES", {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
				})
			)
		}

		update()
		const interval = setInterval(update, 1000)
		return () => clearInterval(interval)
	}, [])

	return <span>{time}</span>
}
