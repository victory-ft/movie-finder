import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
	const [search, setSearch] = useState<String>("");
	console.log(encodeURIComponent(search.trim()));
	const navigate = useNavigate();

	function handleKeyDown(e: any) {
		if (e.key === "Enter") {
			navigateFunc();
		}
	}

	function navigateFunc() {
		navigate(`/search/${encodeURIComponent(search.trim())}`);
	}

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
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</nav>
	);
};

export default Navbar;
