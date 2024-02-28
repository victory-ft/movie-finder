import React from "react";
import tmdb from "/images/tmdb.svg";
import Footer from "../components/footer";

const About = () => {
	return (
		<main className="about-content">
			<p className="about-text">Made by Victory Fatoyinbo using React + TS</p>
			<p className="about-text">
				All movie and TV series data used, including actor, director and studio
				names, synopses, release dates, trailers and poster art is supplied by
				The Movie Database (TMDb).
			</p>
			<img src={tmdb} alt="TMDB Logo" />
			<p className="tagline">
				This site makes use of the TMDb API but is not endorsed or certified by
				TMDb.
			</p>
			<Footer className="foott" />
		</main>
	);
};

export default About;
