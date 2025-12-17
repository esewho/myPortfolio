import { Route, Routes } from "react-router-dom"
import { LayoutApp } from "../components/LayoutApp"

export function IndexRoutes() {
	return (
		<Routes>
			<Route path="/" element={<LayoutApp />}>
				{/* Define your nested routes here */}
			</Route>
		</Routes>
	)
}
