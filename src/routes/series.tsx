import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../components/loader";
import MultipleObserver from "../components/multipleObserver";
import axios from "axios";
import ShowTab from "../components/showtab";
import options from "../apiOptions/apiOptions";

const Series = () => {
	const apiOptions: any = options;
	// console.log(apiOptions);

	const [isActionLoading, setIsActionLoading] = useState(true);
	const [isAnimationLoading, setIsAnimationLoading] = useState(true);
	const [isComedyLoading, setIsComedyLoading] = useState(true);
	const [isDramaLoading, setIsDramaLoading] = useState(true);
	const [isFamilyLoading, setIsFamilyLoading] = useState(true);
	const [isDocumentaryLoading, setIsDocumentaryLoading] = useState(true);
	const [isScienceLoading, setIsScienceLoading] = useState(true);
	const [isSoapLoading, setIsSoapLoading] = useState(true);
	const [isNewsLoading, setIsNewsLoading] = useState(true);

	const [action, setAction] = useState([]);
	const [animation, setAnimation] = useState([]);
	const [comedy, setComedy] = useState([]);
	const [drama, setDrama] = useState([]);
	const [documentary, setDocumentary] = useState([]);
	const [family, setFamily] = useState([]);
	const [science, setScience] = useState([]);
	const [soap, setSoap] = useState([]);
	const [news, setNews] = useState([]);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.request(apiOptions.shows.actionAdventure);
				setAction(response.data.results);
				setIsActionLoading(false);
			} catch (error) {
				setIsActionLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.shows.animation);
				setAnimation(response.data.results);
				setIsAnimationLoading(false);
			} catch (error) {
				setIsActionLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.shows.comedy);
				setComedy(response.data.results);
				setIsComedyLoading(false);
			} catch (error) {
				setIsComedyLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.shows.drama);
				setDrama(response.data.results);
				setIsDramaLoading(false);
			} catch (error) {
				setIsDramaLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.shows.documentary);
				setDocumentary(response.data.results);
				setIsDocumentaryLoading(false);
			} catch (error) {
				setIsDocumentaryLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.shows.family);
				setFamily(response.data.results);
				setIsFamilyLoading(false);
			} catch (error) {
				setIsFamilyLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.shows.scifiFantasy);
				setScience(response.data.results);
				setIsScienceLoading(false);
			} catch (error) {
				setIsScienceLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.shows.soap);
				setSoap(response.data.results);
				setIsSoapLoading(false);
			} catch (error) {
				setIsSoapLoading(false);
				console.error(error);
			}

			try {
				const response = await axios.request(apiOptions.shows.news);
				setNews(response.data.results);
				setIsNewsLoading(false);
			} catch (error) {
				setIsNewsLoading(false);
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
					<div
						className={`tab-container sh ${inView ? "in-view" : ""}`}
						ref={ref}
					>
						{action.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</div>
				</div>
			)}

			{/* {isAnimationLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Animation</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{animation.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)} */}

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
					<MultipleObserver>
						{animation.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
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
					<MultipleObserver>
						{comedy.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
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
					<MultipleObserver>
						{drama.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}

			{isDocumentaryLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Documentary</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{documentary.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}

			{isFamilyLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Family</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{family.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}

			{isScienceLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Sci-Fi & Fantasy</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{science.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}
			{isNewsLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>News</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{news.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}
			{isSoapLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Soap Opera</h2>
						<button className="secondary">
							<p>See all</p>
						</button>
					</div>
					<MultipleObserver>
						{soap.map((movie: any) => {
							return (
								<ShowTab
									key={movie.id}
									name={movie.name}
									image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									showType="Show"
									releaseYear={movie.first_air_date.slice(0, 4)}
									// endYear="2019"
								/>
							);
						})}
					</MultipleObserver>
				</div>
			)}
		</>
	);
};

export default Series;
