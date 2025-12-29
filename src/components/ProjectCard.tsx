type Project = {
	title: string
	description: string
	stack: string[]
	github: string
	demo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition">
			<h3 className="text-white text-xl font-mono">{project.title}</h3>

			<p className="text-gray-400 mt-2">{project.description}</p>

			<div className="flex flex-wrap gap-2 mt-4">
				{project.stack.map((tech) => (
					<span key={tech} className="text-green-400 text-sm font-mono">
						#{tech}
					</span>
				))}
			</div>

			<div className="flex gap-4 mt-4 font-mono">
				<a
					href={project.github}
					target="_blank"
					className="text-green-400 hover:text-green-600"
				>
					GitHub
				</a>

				{project.demo && (
					<a
						href={project.demo}
						target="_blank"
						className="text-green-400 hover:text-green-600"
					>
						Demo
					</a>
				)}
			</div>
		</div>
	)
}
