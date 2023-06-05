import { BsStarFill, BsStar } from "react-icons/bs";

const FiveStars = () => {
	return (
		<div className="flex items-center gap-4 text-2xl">
			<BsStarFill className="text-[goldenrod]" />
			<BsStarFill className="text-[goldenrod]" />
			<BsStarFill className="text-[goldenrod]" />
			<BsStarFill className="text-[goldenrod]" />
			<BsStarFill className="text-[goldenrod]" />
		</div>
	);
};

const FourStars = () => {
	return (
		<div className="flex items-center gap-4 text-2xl">
			<BsStarFill className="text-[goldenrod]" />
			<BsStarFill className="text-[goldenrod]" />
			<BsStarFill className="text-[goldenrod]" />
			<BsStarFill className="text-[goldenrod]" />
			<BsStar className="text-[goldenrod]" />
		</div>
	);
};

const stars = Math.floor(Math.random() * 3) > 1 ? <FiveStars /> : <FourStars />;

const RandomStars = () => {
	return <div>{stars}</div>;
};

export default RandomStars;
