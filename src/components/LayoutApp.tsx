import { Outlet } from "react-router-dom"

export function LayoutApp() {
	return (
		<div className="flex flex-col min-h-screen">
			<Outlet />
		</div>
	)
}
