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
			Authorization: process.env.AUTH,
		},
	},

	animation: {
		method: "GET",
		url: `${showLink}&with_genres=16`,
		headers: {
			accept: "application/json",
			Authorization: process.env.AUTH,
		},
	},

	comedy: {
		method: "GET",
		url: `${showLink}&with_genres=35`,
		headers: {
			accept: "application/json",
			Authorization: process.env.AUTH,
		},
	},

	documentary: {
		method: "GET",
		url: `${showLink}&with_genres=99`,
		headers: {
			accept: "application/json",
			Authorization: process.env.AUTH,
		},
	},

	drama: {
		method: "GET",
		url: `${showLink}&with_genres=18`,
		headers: {
			accept: "application/json",
			Authorization: process.env.AUTH,
		},
	},

	family: {
		method: "GET",
		url: `${showLink}&with_genres=10751`,
		headers: {
			accept: "application/json",
			Authorization: process.env.AUTH,
		},
	},

	news: {
		method: "GET",
		url: `${showLink}&with_genres=10763`,
		headers: {
			accept: "application/json",
			Authorization: process.env.AUTH,
		},
	},

	scifiFantasy: {
		method: "GET",
		url: `${showLink}&with_genres=10765`,
		headers: {
			accept: "application/json",
			Authorization: process.env.AUTH,
		},
	},

	soap: {
		method: "GET",
		url: `${showLink}&with_genres=10766`,
		headers: {
			accept: "application/json",
			Authorization: process.env.AUTH,
		},
	},
};

export default shows;
