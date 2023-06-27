import { useEffect } from "react";
import { Brands, Hero, HomeProducts, Testimonial } from "../../components";

const Home = () => {
	useEffect(() => {
		document.title = "Home | Boutik";
	}, []);

	return (
		<main className="flex flex-col gap-8">
			<Hero />
			<Brands />
			<HomeProducts />
			<Testimonial />
		</main>
	);
};

export default Home;
