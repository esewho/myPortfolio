import Navbar from "./components/Navbar"

function App() {
	return (
		<>
			<Navbar />
			<div className="p-4">
				<h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
				<p className="mt-2 text-gray-600">
					This is a simple portfolio website built with React and Tailwind CSS.
				</p>
			</div>
		</>
	)
}

export default App
