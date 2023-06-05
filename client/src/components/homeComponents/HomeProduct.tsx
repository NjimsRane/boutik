import storeItems from "../../data/items.json";
import { ProductItem } from "../../components";

const HomeProduct = () => {
	// console.log(storeItems.map(item => item.lists[2]));

	return (
		<div className="homeProduct">
			{storeItems.map(item => (
				<div key={item.lists[2].id}>
					<ProductItem {...item.lists[2]} />
				</div>
			))}
		</div>
	);
};

export default HomeProduct;
