import { motion, AnimatePresence } from "framer-motion"

type Props = {
	isOn: boolean
	children: React.ReactNode
}

export default function PipBoyFrame({ isOn, children }: Props) {
	return (
		<AnimatePresence>
			{isOn && (
				<motion.div
					initial={{ opacity: 0, scaleY: 0.9 }}
					animate={{ opacity: 1, scaleY: 1 }}
					exit={{ opacity: 0, scaleY: 0.9 }}
					transition={{ duration: 0.25 }}
					className="relative mx-auto w-full max-w-4xl origin-top"
				>
					{/* MARCO */}
					<div
						className="bg-black border-4 border-green-500 rounded-2xl p-4
						shadow-[0_0_40px_rgba(34,197,94,0.35)]"
					>
						{/* CRISTAL */}
						<div className="relative bg-green-500/10 rounded-xl overflow-hidden">
							{/* SCANLINES */}
							<div
								className="pointer-events-none absolute inset-0
								bg-[linear-gradient(rgba(0,0,0,0.25)_1px,transparent_1px)]
								bg-[size:100%_4px] opacity-30"
							/>

							{/* CONTENIDO */}
							<div className="relative p-6 font-mono text-green-400">
								{children}
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
