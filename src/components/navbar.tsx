import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to={`/`}>Home</NavLink>
				</li>
				<li>
					<NavLink to={`movies`}>Movies</NavLink>
				</li>
				<li>
					<NavLink to={`series`}>Series</NavLink>
				</li>
				<li>
					<NavLink to={`profile`}>Profile</NavLink>
				</li>
			</ul>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search..."
				className="nav-search"
			/>
		</nav>
	);
};

export default Navbar;
