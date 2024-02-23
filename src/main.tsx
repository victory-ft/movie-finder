import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.js";
import Home from "./routes/home.js";
import Movies from "./routes/movies.js";
import Series from "./routes/series.js";
import Profile from "./routes/profile.js";
import ErrorPage from "./error-page.jsx";
import "./main.scss";
import Details from "./routes/details.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/movies",
				element: <Movies />,
			},
			{
				path: "/series",
				element: <Series />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/details/:media/:id",
				element: <Details />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <App /> */}
	</React.StrictMode>,
);
