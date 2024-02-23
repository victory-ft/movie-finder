// import AUTH from "../../variables";

// const auth = AUTH;

const showLink =
	"https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";

const shows: Object = {
	actionAdventure: {
		method: "GET",
		url: `${showLink}&with_genres=10759`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},

	animation: {
		method: "GET",
		url: `${showLink}&with_genres=16`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},

	comedy: {
		method: "GET",
		url: `${showLink}&with_genres=35`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},

	documentary: {
		method: "GET",
		url: `${showLink}&with_genres=99`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},

	drama: {
		method: "GET",
		url: `${showLink}&with_genres=18`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},

	family: {
		method: "GET",
		url: `${showLink}&with_genres=10751`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},

	news: {
		method: "GET",
		url: `${showLink}&with_genres=10763`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},

	scifiFantasy: {
		method: "GET",
		url: `${showLink}&with_genres=10765`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},

	soap: {
		method: "GET",
		url: `${showLink}&with_genres=10766`,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQyMmZmNzJhOTcyMTJjYTAyY2FjZjkyZjdhNDcyYiIsInN1YiI6IjY1Y2NkNTRiZTI2M2JiMDE4NjY5NTUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qmRyCr0sT_RMtVTAIF5SuWYbzzrxWq1HvpWKW4JvQ8Y",
		},
	},
};

export default shows;
