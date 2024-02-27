import { useEffect, useState } from "react";
import MultipleObserver from "../components/multipleObserver";
import ShowTab from "../components/showtab";
import Loader from "../components/loader";
import Footer from "../components/footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import AUTH from "../../variables";

const Search = () => {
	let { id: searchTerm } = useParams();
	const auth: string = AUTH;

	const options = {
		method: "GET",
		url: `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	};

	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// window.scrollTo(0, 0);
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await axios.request(options);
				const filterResults = response.data.results.filter((result: any) => {
					return result.media_type === "tv" || result.media_type === "movie";
				});
				setResults(filterResults);
				console.log(filterResults);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [searchTerm]);

	return (
		<>
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

			{isLoading ? (
				<Loader />
			) : (
				<div className="show-tabs">
					<div className="tab-info">
						<h2>Results for {`"${decodeURIComponent(searchTerm)}"`}</h2>
						<button className="secondary">{/* <p>See all</p> */}</button>
					</div>
					<MultipleObserver>
						{results.map((media: any) => {
							return (
								<ShowTab
									key={media.id}
									id={media.id}
									name={media.media_type === "movie" ? media.title : media.name}
									image={`https://image.tmdb.org/t/p/w300${media.poster_path}`}
									showType={
										media.media_type === "movie" ? "Movie" : "TV Series"
									}
									releaseYear={
										media.media_type === "movie"
											? media.release_date.slice(0, 4)
											: media.first_air_date.slice(0, 4)
									}
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

export default Search;
