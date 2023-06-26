import { useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/ProductContext";
import { useEffect } from "react";
import { blog2, blog3, blog4, blog5 } from "../../assets";
import formatCurrency from "../../utilities/formatCurrency";
import { BlogTitle, ProductItem } from "../../components";
import storeItems from "../../data/items.json";

const Product = () => {
	const { increaseCartQuantity } = useShoppingCart();
	const { id } = useParams();

	const product = storeItems.find((item) => {
		return item.id === Number(id);
	});

	const { companyName, price, imgUrl, category } = product;

	useEffect(() => {
		document.title = "Product | Boutik";
	}, []);

	return (
		<div className="">
			<div className="flex flex-col lg:flex-row gap-8 my-8 px-16 md:px-36 lg:px-80">
				<div className="flex-1">
					<img
						src={imgUrl}
						alt={category}
						className="w-full object-cover h-[30rem]"
					/>
					<div className="flex justify-between mt-4">
						<div className="smallImg">
							<img
								src={blog2}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="smallImg">
							<img
								src={blog3}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="smallImg">
							<img
								src={blog4}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="smallImg">
							<img
								src={blog5}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-4 px-4">
					<h6 className="text-tertiary text-xl capitalize">
						<span>{companyName}</span>
					</h6>
					<h3 className="py-4 text-secondary font-semibold text-3xl capitalize">
						{category}
					</h3>
					<h2 className="text-secondary font-bold text-4xl capitalize">
						{formatCurrency(price)}
					</h2>
					<div>
						<button
							className="bg-primary p-2 rounded-md text-lg w-[10rem]  text-white uppercase mt-4 transition-all duration-500 hover:bg-[#212B36] "
							onClick={() => increaseCartQuantity(id)}
						>
							add to cart
						</button>
					</div>

					<h4 className="py-4 text-secondary font-bold text-3xl capitalize">
						products details
					</h4>
					<span className="lg:w-[50ch] text-xl leading-normal">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. In consectetur architecto laudantium rem delectus
						quia id neque odit sit aspernatur minus culpa amet,
						autem omnis reprehenderit! Est, eius accusantium? Rem?
					</span>
				</div>
			</div>

			<div className="px-16 md:px-20 lg:px-36">
				<div className="my-16">
					<BlogTitle title="related products" />
				</div>

				<div className="homeProduct my-8">
					{storeItems
						.filter((item) => item.category === `${category}`)
						.map((item) => (
							<div key={item.id}>
								<ProductItem {...item} />
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Product;
