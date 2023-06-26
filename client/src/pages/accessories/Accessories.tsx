import { BlogTitle, ProductItem } from "../../components";
import storeItems from "../../data/items.json";
import { useEffect } from "react";

const Accessories = () => {
	// console.log(storeItems[7].lists);

	useEffect(() => {
		document.title = "Accessories | Boutik";
	}, []);

	return (
		<div className="mt-8 px-16 md:px-20 lg:px-36 ">
			<BlogTitle title="accessories" />
			<div className="homeProduct mt-16">
				{storeItems
					.filter((item) => item.category === "accessories")
					.map((item) => (
						<div key={item.id}>
							<ProductItem {...item} />
						</div>
					))}
			</div>
		</div>
	);
};

export default Accessories;
