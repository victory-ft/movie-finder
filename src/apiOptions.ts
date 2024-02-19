import movieOptions from "./movieOptions";

const auth =
	"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y";

const movieLink =
	"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const options: Object = {
	popular: {
		method: "GET",
		url: movieLink,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	tvShow: {
		method: "GET",
		url: "https://api.themoviedb.org/3/discover/tv?first_air_date.gte=2008-01-01&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	trending: {
		method: "GET",
		url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	movies: {
		...movieOptions,
	},
};

export default options;
