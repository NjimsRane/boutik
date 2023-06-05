import { BlogTitle, ProductItem } from "../../components";
import FilterBtn from "../../components/products/FilterBtn";
import storeItems from "../../data/items.json";

const Products = () => {
	return (
		<div className="px-16 md:px-20 lg:px-36">
			<BlogTitle title="store" />
			<div className="flex items-center justify-center gap-4 flex-wrap my-16">
				<FilterBtn title="shoes" />
				<FilterBtn title="watches" />
				<FilterBtn title="bags" />
				<FilterBtn title="trousers" />
				<FilterBtn title="shirt" />
				<FilterBtn title="pullover" />
				<FilterBtn title="T-shirt" />
				<FilterBtn title="jackets" />
				<FilterBtn title="accessories" />
			</div>
			<div className="homeProduct">
				{storeItems.map(item =>
					item.lists.map(item => (
						<div key={item.id}>
							<ProductItem {...item} />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Products;
