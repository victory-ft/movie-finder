import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
	return (
		<footer className="footer-distributed">
			<div className="footer-right">
				<a href="#">
					<i className="fa fa-facebook"></i>
				</a>
				<a href="#">
					<i className="fa fa-twitter"></i>
				</a>
				<a href="#">
					<i className="fa fa-linkedin"></i>
				</a>
				<a href="#">
					<i className="fa fa-github"></i>
				</a>
			</div>

			<div className="footer-left">
				<p className="footer-links">
					<a className="link-1" href="#">
						Home
					</a>

					<a href="#">Movies</a>

					<a href="#">Series</a>

					<a href="#">Profile</a>

					{/* <a href="#">Contact</a> */}
				</p>

				<p>
					Made by Victory Fatoyinbo &copy; 2024. Movie &amp; TV Series data from{" "}
					<a href="https://www.themoviedb.org" target="_blank">
						TMDB
					</a>
					.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
