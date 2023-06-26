import { useEffect, useState } from "react";
import { BlogTitle, ProductItem } from "../../components";
// import FilterBtn from "../../components/products/FilterBtn";
import storeItems from "../../data/items.json";

const Products = () => {
	// const [selectedProducts, setSelectedProducts] = useState([]);
	// const [filteredProducts, setFilteredProducts] = useState(storeItems);

	const filters = [
		"shoes",
		"watches",
		"bags",
		"trousers",
		"shirt",
		"pullover",
		"T-shirt",
		"jackets",
		"accessories",
	];
	// console.log(filteredProducts.map((product) => product.category));

	// const handleFilterButton = (selectedCategory) => {
	// 	if (selectedProducts.includes(selectedCategory)) {
	// 		let filters = selectedProducts.filter(
	// 			(el) => el !== selectedCategory
	// 		);
	// 		setSelectedProducts(filters);
	// 	} else {
	// 		setSelectedProducts([...selectedProducts, selectedCategory]);
	// 	}
	// };

	// const filtersItems = () => {
	// 	if (selectedProducts.length > 0) {
	// 	}
	// };

	// useEffect(() => {
	// 	// filtersItems();
	// }, [selectedProducts]);

	useEffect(() => {
		document.title = "Products | Boutik";
	}, []);

	return (
		<div className="px-16 md:px-20 lg:px-36">
			<BlogTitle title="store" />
			<div className="flex items-center justify-center gap-4 flex-wrap my-16">
				{filters.map((filter, index) => (
					<>
						{/* <FilterBtn
							key={index}
							title={filter}
							// onChange={handleFilterButton}
						/> */}
					</>
				))}
			</div>
			<div className="homeProduct">
				{storeItems.map((item) => (
					<div key={item.id}>
						<ProductItem {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
