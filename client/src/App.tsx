import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from "react-router-dom";
import {
	Accessories,
	Contact,
	Home,
	Products,
	Shop,
	Blog,
	ErrorPage,
	Login,
	Signup,
} from "./pages";
import { Footer, Header, Services } from "./layouts";

const App = () => {
	// fake login
	// const fakeLogin = false;

	const Layout = () => {
		return (
			<>
				<Header />
				<Outlet />
				<Services />
				<Footer />
			</>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/shop",
					element: <Shop />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
				{
					path: "/products",
					element: <Products />,
				},
				{
					path: "/accessories",
					element: <Accessories />,
				},
				{
					path: "/blog",
					element: <Blog />,
				},
			],
		},
		{
			path: "*",
			element: <ErrorPage />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
