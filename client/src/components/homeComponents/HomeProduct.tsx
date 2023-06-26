import storeItems from "../../data/items.json";
import { ProductItem } from "../../components";

const HomeProduct = () => {
	return (
		<div className="homeProduct">
			{storeItems
				.filter((item) => item.category === "shirts")
				.map((item) => (
					<div key={item.id}>
						<ProductItem {...item} />
					</div>
				))}
		</div>
	);
};

export default HomeProduct;
