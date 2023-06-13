import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { ErrorPage, Login, Signup } from "./pages";
import { Footer, Header, Services } from "./layouts";
import Loader from "./utilities/Loader";

const Home = lazy(() => import("./pages/home/Home"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Products = lazy(() => import("./pages/products/Products"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Accessories = lazy(() => import("./pages/accessories/Accessories"));

const App = () => {
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
			element: <Suspense fallback={<Loader />}>{<Layout />}</Suspense>,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/shop/",
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
