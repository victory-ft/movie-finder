import { useEffect, useState } from "react";
import Loader from "../components/loader";
import axios from "axios";
import ShowTab from "../components/showtab";
import arrowIcon from "/icons/arrow-right.svg";
import options from "../apiOptions";

const Movies = () => {
	const apiOptions: any = options;

	const [isActionLoading, setIsActionLoading] = useState(true);
	const [isAdventureLoading, setIsAdventureLoading] = useState(true);
	const [isAnimationLoading, setIsAnimationLoading] = useState(true);
	const [isComedyLoading, setIsComedyLoading] = useState(true);
	const [isDramaLoading, setIsDramaLoading] = useState(true);
	const [isFantasyLoading, setIsFantasyLoading] = useState(true);
	const [isRomanceLoading, setIsRomanceLoading] = useState(true);
	const [isScienceLoading, setIsScienceLoading] = useState(true);

	const [action, setAction] = useState([]);
	const [adventure, setAdventure] = useState([]);
	const [animation, setAnimation] = useState([]);
	const [comedy, setComedy] = useState([]);
	const [drama, setDrama] = useState([]);
	const [fantasy, setFantasy] = useState([]);
	const [romance, setRomance] = useState([]);
	const [science, setScience] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.request(apiOptions.movies.action);
				setAction(response.data.results);
				setIsActionLoading(false);
			} catch (error) {
				setIsActionLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.movies.adventure);
				setAdventure(response.data.results);
				setIsAdventureLoading(false);
			} catch (error) {
				setIsAdventureLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.movies.animation);
				setAnimation(response.data.results);
				setIsAnimationLoading(false);
			} catch (error) {
				setIsActionLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.movies.comedy);
				setComedy(response.data.results);
				setIsComedyLoading(false);
			} catch (error) {
				setIsComedyLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.movies.drama);
				setDrama(response.data.results);
				setIsDramaLoading(false);
			} catch (error) {
				setIsDramaLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.movies.fantasy);
				setFantasy(response.data.results);
				setIsFantasyLoading(false);
			} catch (error) {
				setIsFantasyLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.movies.romance);
				setRomance(response.data.results);
				setIsRomanceLoading(false);
			} catch (error) {
				setIsRomanceLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.movies.scienceFiction);
				setScience(response.data.results);
				setIsScienceLoading(false);
			} catch (error) {
				setIsScienceLoading(false);
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<h1 className="home-header">
				<span>C</span>
				<span>I</span>
				<span>N</span>
				<span>E</span>
				<span>X</span>
				<span>I</span>
				<span>T</span>
				<span>Y</span>
			</h1>

			{isActionLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Action</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<div className="tab-container">
						{action.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}

			{isAdventureLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Adventure</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<div className="tab-container">
						{adventure.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}

			{isAnimationLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Animation</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<div className="tab-container">
						{animation.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}

			{isComedyLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Comedy</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<div className="tab-container">
						{comedy.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}

			{isDramaLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Drama</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<div className="tab-container">
						{drama.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}

			{isFantasyLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Fantasy</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<div className="tab-container">
						{fantasy.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}

			{isRomanceLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Romance</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<div className="tab-container">
						{romance.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}

			{isScienceLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Science Fiction</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<div className="tab-container">
						{science.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.title}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Movie"
									releaseYear={movie.release_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Movies;
