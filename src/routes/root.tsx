import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
function Root() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default Root;
