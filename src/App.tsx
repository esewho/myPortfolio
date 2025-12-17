import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
	return (
		<>
			<Navbar />
			<div className="p-4 bg-black min-h-screen w-full">
				<Hero />
			</div>
		</>
	)
}

export default App
