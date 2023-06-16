import { useEffect } from "react";
import { Brands, Hero, HomeProducts } from "../../components";

const Home = () => {
	useEffect(() => {
		document.title = "Home | Boutik";
	}, []);

	return (
		<main className="flex flex-col gap-8">
			<Hero />
			<Brands />
			<HomeProducts />
		</main>
	);
};

export default Home;
