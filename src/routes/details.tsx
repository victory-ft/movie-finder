import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Loader from "../components/loader";
import YouTubeEmbed from "../components/youtubeEmbed";
import ShowTab from "../components/showtab";
import SeasonTab from "../components/seasonTab";
import MultipleObserver from "../components/multipleObserver";
import axios from "axios";
import AUTH from "../../variables";
import star from "/icons/star.svg";
import "../styles/details.scss";
import SeasonInfo from "../components/seasonInfo";

const Details = () => {
	// const auth: string = AUTH;

	let { id, media: mediaType } = useParams();

	const [media, setMedia] = useState<any>();
	const [logo, setLogo] = useState<any>();
	const [cast, setCast] = useState([]);
	const [writer, setWriter] = useState<any>();
	const [director, setDirector] = useState<any>();
	const [videos, setVideos] = useState<any>();
	const [similar, setSimilar] = useState<any>();
	const [isLoading, setIsLoading] = useState(true);
	const [isLogoLoading, setIsLogoLoading] = useState(true);
	const [isCreditLoading, setIsCreditLoading] = useState(true);
	const [isVideoLoading, setIsVideoLoading] = useState(true);
	const [isSimilarLoading, setIsSimilarLoading] = useState(true);

	const [seasonModal, showSeasonModal] = useState(false);

	const [seasonData, setSeasonData] = useState({});

	const ref = useRef<any>(null);

	const options = {
		method: "GET",
		url: `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	};

	// console.log("Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y" + "sjsjsj");

	const creditOptions = {
		method: "GET",
		url: `https://api.themoviedb.org/3/${mediaType}/${id}/credits?language=en-US`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	};

	const logoOptions = {
		method: "GET",
		url: `https://api.themoviedb.org/3/${mediaType}/${id}/images?include_image_language=en%2Cnull`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	};

	const videoOptions = {
		method: "GET",
		url: `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=en-US`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	};

	const similarOptions = {
		method: "GET",
		url: `https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?language=en-US&page=1`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await axios.request(options);
				setMedia(response.data);
				// console.log(response.data);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}

			try {
				setIsLogoLoading(true);
				const response = await axios.request(logoOptions);
				setLogo(response.data.logos[0]);
				setIsLogoLoading(false);
			} catch (error) {
				console.error(error);
			}

			try {
				setIsCreditLoading(true);
				const response = await axios.request(creditOptions);
				// console.log(response.data);
				setCast(response.data.cast.slice(0, 4));
				const filterWriter = response.data.crew.filter((writer: any) => {
					return writer.department === "Writing";
				});
				setWriter(
					filterWriter.reduce((accumulator: any, current: any) => {
						if (!accumulator.find((item: any) => item.name === current.name)) {
							accumulator.push(current);
						}
						return accumulator.slice(0, 3);
					}, []),
				);
				setDirector(
					response.data.crew.filter((writer: any) => {
						return writer.department === "Directing";
					}),
				);

				setIsCreditLoading(false);
			} catch (error) {
				console.error(error);
			}

			try {
				setIsVideoLoading(true);
				const response = await axios.request(videoOptions);
				const filterVideos = response.data.results.filter((video: any) => {
					return (
						(video.site === "YouTube" && video.type === "Trailer") ||
						(video.site === "YouTube" && video.type === "Clip")
					);
				});
				// console.log(filterVideos.slice(0, 3));
				setVideos(filterVideos);
				setIsVideoLoading(false);
			} catch (error) {
				console.error(error);
			}

			try {
				setIsSimilarLoading(true);
				const response = await axios.request(similarOptions);
				setSimilar(response.data.results);
				setIsSimilarLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [id]);

	useEffect(() => {
		let closeModal = (e: any) => {
			if (!ref.current.contains(e.target)) {
				showSeasonModal(false);
			}
		};
		document.addEventListener("mousedown", closeModal);
		return () => {
			document.removeEventListener("mousedown", closeModal);
		};
	});

	function toHoursAndMinutes(totalMinutes: number) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return `${hours}h ${minutes}m`;
	}

	function kFormatter(num: number): string {
		if (num < 1000) {
			return num.toString();
		} else {
			return (Math.round(num / 100) / 10).toFixed(1) + "k";
		}
	}

	function displaySeasonModal(seasonData: Object) {
		setSeasonData({ ...seasonData });
		// console.log({ ...seasonData });
		showSeasonModal(!seasonModal);
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="details-page">
					<img
						src={`https://image.tmdb.org/t/p/w1280${media.backdrop_path}`}
						alt={media.name ? media.name : media.title}
						className="background-image"
					/>
					<div className="media-info">
						{isLogoLoading ? (
							<h3>Loading...</h3>
						) : logo ? (
							<img
								className="media-logo"
								src={`https://image.tmdb.org/t/p/w300${logo.file_path}`}
								alt={media.name ? media.name : media.title}
							/>
						) : (
							<h1 className="media-title">
								{media.name ? media.name : media.title}
							</h1>
						)}

						<div className="media-docs">
							<span className="doc">
								{mediaType === "tv"
									? media.first_air_date.slice(0, 4)
									: media.release_date.slice(0, 4)}
							</span>
							<span className="doc">|</span>
							<span className="doc">
								{mediaType === "tv" ? "TV Series" : "Movie"}
							</span>

							<span className="doc">|</span>
							<span className="doc">
								{mediaType === "tv"
									? `${media.number_of_seasons} ${
											media.number_of_seasons == 1 ? "season" : "seasons"
									  }`
									: toHoursAndMinutes(media.runtime)}
							</span>
							<span className="doc">|</span>
							<span className="doc">
								{media.genres.map((genre: any, index: number) => {
									return (index ? ", " : "") + genre.name;
								})}
							</span>
						</div>
						<p className="overview">{media.overview}</p>
						{media.tagline && <p className="tagline">{`${media.tagline}`}</p>}
					</div>
					<div className="more-content">
						{isCreditLoading ? (
							<h2>Loading...</h2>
						) : (
							<div className="credits">
								{media.production_companies.length > 0 && (
									<>
										<h2 className="credit-header studio">Produced by</h2>
										<div className="studio">
											{media.production_companies.map(
												(company: any, index: number) => {
													if (company.logo_path) {
														return (
															<img
																src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
																alt={company.name}
																key={index}
															></img>
														);
													} else {
														return (
															<span className="credit-header" key={index}>
																{company.name}
															</span>
														);
													}
												},
											)}
										</div>
									</>
								)}
								{director[0] && (
									<h2>
										<span className="credit-header">Director:</span>{" "}
										{director[0].name}
									</h2>
								)}
								{writer.length > 0 && (
									<h2>
										<span className="credit-header">Writer(s):</span>{" "}
										{writer.map((actor: any, index: number) => {
											return (index ? ", " : "") + actor.name;
										})}
									</h2>
								)}
								{cast.length > 0 && (
									<h2>
										<span className="credit-header">Starring: </span>
										{cast.map((actor: any, index: number) => {
											return (index ? ", " : "") + actor.name;
										})}
									</h2>
								)}
								{mediaType === "movie" ? (
									<h2>
										<span className="credit-header">Release Date:</span>{" "}
										{new Date(media.release_date).toLocaleDateString("en-GB", {
											day: "numeric",
											month: "long",
											year: "numeric",
										})}
									</h2>
								) : (
									<h2>
										<span className="credit-header">First Aired:</span>{" "}
										{new Date(media.first_air_date).toLocaleDateString(
											"en-GB",
											{ day: "numeric", month: "long", year: "numeric" },
										)}
									</h2>
								)}

								{mediaType === "tv" && media.last_air_date && (
									<h2>
										<span className="credit-header">Last Aired:</span>{" "}
										{new Date(media.last_air_date).toLocaleDateString("en-GB", {
											day: "numeric",
											month: "long",
											year: "numeric",
										})}{" "}
										{media.status === "Ended" ? "(Ended)" : "(Ongoing)"}
									</h2>
								)}
							</div>
						)}

						<div className="rating-container">
							<p className="rating-header">Rating</p>
							<div className="rating-box">
								<img src={star} alt="star" />
								<p className="rating-top">
									{Math.round(media.vote_average * 10) / 10}
								</p>
								<p className="rating-bottom">/10</p>
								<p className="rating-total">
									{kFormatter(media.vote_count)}{" "}
									<span className="votes">votes</span>
								</p>
							</div>
						</div>
						{isVideoLoading ? (
							<h2>Loading...</h2>
						) : (
							videos.length > 0 && (
								<>
									<h1>Trailers & Clips</h1>
									<div className="slider-container">
										<div className="youtube-vids">
											<Swiper
												direction={"horizontal"}
												slidesPerView={1}
												spaceBetween={30}
												mousewheel={true}
												pagination={{
													clickable: true,
													el: ".swiper-pagination",
													renderBullet: (index, className) => {
														return (
															'<span class="' +
															className +
															'">' +
															"" +
															"</span>"
														);
													},
												}}
												modules={[Mousewheel, Pagination]}
												className="mySwiper"
												breakpoints={{
													650: {
														slidesPerView: 2,
													},
													1100: {
														slidesPerView: 3,
													},
													1800: {
														slidesPerView: 4,
													},
												}}
											>
												{videos.map((video: any) => {
													return (
														<SwiperSlide key={video.key}>
															<YouTubeEmbed
																embedId={video.key}
																name={video.name}
															/>
														</SwiperSlide>
													);
												})}
											</Swiper>
											<div className="swiper-pagination" />
										</div>
									</div>
								</>
							)
						)}

						{seasonModal && <SeasonInfo ref={ref} season={seasonData} />}

						{mediaType === "tv" && media.seasons && (
							<div className="season-container">
								<h1>Seasons</h1>
								<Swiper
									direction={"horizontal"}
									slidesPerView={2}
									spaceBetween={20}
									mousewheel={{ releaseOnEdges: true }}
									pagination={{
										clickable: true,
										el: ".swiper-pagination",
										renderBullet: (index, className) => {
											return (
												'<span class="' +
												className +
												" " +
												index +
												'">' +
												"" +
												"</span>"
											);
										},
									}}
									modules={[Mousewheel, Pagination]}
									breakpoints={{
										450: {
											slidesPerView: 2,
										},
										650: {
											slidesPerView: 3,
										},

										850: {
											slidesPerView: 4,
										},

										1070: {
											slidesPerView: 5,
										},

										1320: {
											slidesPerView: 6,
										},

										1520: {
											slidesPerView: 7,
										},

										1720: {
											slidesPerView: 8,
										},

										1920: {
											slidesPerView: 9,
										},

										2250: {
											slidesPerView: 10,
										},
									}}
									className="mySwiper"
								>
									{media.seasons.map((season: any) => {
										return (
											<SwiperSlide key={season.id}>
												<SeasonTab
													id={season.id}
													name={season.name}
													image={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
													season_number={season.season_number}
													air_date={season.air_date}
													episode_count={season.episode_count}
													displaySeasonModal={() =>
														displaySeasonModal({
															image: `https://image.tmdb.org/t/p/w500${season.poster_path}`,
															seasonNumber: season.season_number,
															overview: season.overview,
															episodeCount: season.episode_count,
															airDate: season.air_date,
															name: season.name,
														})
													}
													// endYear="2019"
												/>
											</SwiperSlide>
										);
									})}
								</Swiper>
								<div className="swiper-pagination" />
							</div>
						)}

						{isSimilarLoading ? (
							<Loader />
						) : (
							<div className="show-tabs">
								<h1>You May Also Like</h1>
								<MultipleObserver>
									{similar.map((media: any) => {
										return (
											<ShowTab
												key={media.id}
												id={media.id}
												name={mediaType === "movie" ? media.title : media.name}
												image={`https://image.tmdb.org/t/p/w300${media.poster_path}`}
												showType={mediaType === "movie" ? "Movie" : "TV Series"}
												releaseYear={
													mediaType === "movie"
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
					</div>
				</main>
			)}
		</>
	);
};

export default Details;
