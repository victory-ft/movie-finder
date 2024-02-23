// import React from "react";
import { useEffect, useState } from "react";
import MultipleObserver from "../components/multipleObserver";
import Loader from "../components/loader";
import axios from "axios";
import ShowTab from "../components/showtab";
import arrowIcon from "/icons/arrow-right.svg";
import options from "../apiOptions/apiOptions";

import "../styles/home.scss";

const Home = () => {
	const apiOptions: any = options;
	// console.log(apiOptions);

	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [isTrendingLoading, setIsTrendingLoading] = useState(true);
	const [isTvShowLoading, setIsTvShowLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [tvShows, setTvShows] = useState([]);
	const [trending, setTrending] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchData = async () => {
			try {
				const response = await axios.request(apiOptions.popular);
				setMovies(response.data.results);
				setIsLoading(false);
			} catch (error) {
				// setIsLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.tvShow);
				setTvShows(response.data.results);
				setIsTvShowLoading(false);
			} catch (error) {
				// setIsTvShowLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.trending);
				setTrending(response.data.results);
				setIsTrendingLoading(false);
			} catch (error: any) {
				// setIsTrendingLoading(false);
				console.log(error.message);
				setErrorMessage(error.message);
			}
		};
		fetchData();
	}, []);

	return (
		<main className="home-main-content">
			<h1 className="home-header">
				<span>O</span>
				<span>T</span>
				<span>M</span>
				<span>O</span>
				<span>V</span>
				<span>I</span>
				<span>E</span>
				<span>S</span>
			</h1>
			<div className="home-tabs">
				<div className="home-tab">
					<div className="tab-pill">My List</div>
					<div className="tab-text">
						<p>See your list</p>
						<p>with one click</p>
						<img src={arrowIcon} alt="arrow" />
					</div>
				</div>
				<div className="home-tab">
					<div className="tab-text">
						<p>See what's new</p>
						<p>and add to your list</p>
						<img src={arrowIcon} alt="arrow" />
					</div>
					<div className="tab-pill">New</div>
				</div>
				<div className="home-tab">
					<div className="tab-pill">Soon</div>
					<div className="tab-text">
						<p>See what's coming soon</p>
						<img src={arrowIcon} alt="arrow" />
					</div>
				</div>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Popular Movies</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{movies.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									id={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}
			{isTvShowLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Popular TV Shows</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{tvShows.map((show: any) => {
							return (
								<ShowTab
									key={show.id}
									id={show.id}
									name={show.name}
									image={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
									showType="TV Series"
									releaseYear={show.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}
			{isTrendingLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Trending</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{trending.map((show: any) => {
							return (
								<ShowTab
									key={show.id}
									id={show.id}
									name={show.name ? show.name : show.title}
									image={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
									showType={show.media_type === "movie" ? "Movie" : "TV Series"}
									releaseYear={
										show.first_air_date
											? show.first_air_date.slice(0, 4)
											: show.release_date.slice(0, 4)
									}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}
		</main>
	);
};

export default Home;
