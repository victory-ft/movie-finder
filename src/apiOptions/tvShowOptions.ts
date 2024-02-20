import AUTH from "../../variables";

const auth = AUTH;

const showLink =
	"https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";

const shows: Object = {
	actionAdventure: {
		method: "GET",
		url: `${showLink}&with_genres=10759`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	animation: {
		method: "GET",
		url: `${showLink}&with_genres=16`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	comedy: {
		method: "GET",
		url: `${showLink}&with_genres=35`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	documentary: {
		method: "GET",
		url: `${showLink}&with_genres=99`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	drama: {
		method: "GET",
		url: `${showLink}&with_genres=18`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	family: {
		method: "GET",
		url: `${showLink}&with_genres=10751`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	news: {
		method: "GET",
		url: `${showLink}&with_genres=10763`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	scifiFantasy: {
		method: "GET",
		url: `${showLink}&with_genres=10765`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	soap: {
		method: "GET",
		url: `${showLink}&with_genres=10766`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},
};

export default shows;
