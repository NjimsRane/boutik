import { Link } from "react-router-dom";

type HeroComponentsProps = {
	img1: string;
	title: string;
	subtitle: string;
	link: string;
};

const HeroComponents = ({
	img1,
	title,
	subtitle,
	link,
}: HeroComponentsProps) => {
	return (
		<div
			className="bg-cover bg-center h-[20rem] md:h-[22rem] lg:h-[26.2rem] w-[full] relative"
			style={{
				backgroundImage: `url(${img1})`,
			}}
		>
			<div className="absolute top-[50%] right-6 text-[#090E34] ">
				<h2 className="text-3xl capitalize font-bold mb-2 leading-normal ">
					<Link
						to="/"
						className=" duration-500 transition-all hover:text-[#3056D3]"
					>
						{title}
						<span className="block text-right">{subtitle}</span>
					</Link>
				</h2>
				<Link
					className="capitalize text-2xl font-semibold text-right block duration-500 transition-all hover:text-[#3056D3]"
					to="/shop"
				>
					{link}
				</Link>
			</div>
		</div>
	);
};

export default HeroComponents;
