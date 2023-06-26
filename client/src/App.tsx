import { Route, Routes, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ErrorPage, Login, Signup } from "./pages";
import { Footer, Header, Services } from "./layouts";
import Loader from "./utilities/Loader";

const Home = lazy(() => import("./pages/home/Home"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Products = lazy(() => import("./pages/products/Products"));
const Product = lazy(() => import("./pages/products/Product"));
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

	return (
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback={<Loader />}>{<Layout />}</Suspense>
				}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/shop"
					element={<Shop />}
				/>
				<Route
					path="/shop:id"
					element={<Shop />}
				/>
				<Route
					path="/products"
					element={<Products />}
				/>
				<Route
					path="/products/:id"
					element={<Product />}
				/>
				<Route
					path="/blog"
					element={<Blog />}
				/>
				<Route
					path="/accessories"
					element={<Accessories />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Route>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/register"
				element={<Signup />}
			/>
			<Route
				path="*"
				element={<ErrorPage />}
			/>
		</Routes>
	);
};

export default App;
