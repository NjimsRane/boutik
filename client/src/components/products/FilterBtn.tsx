type FilterBtnProps = {
	title: string;
};

const FilterBtn = ({ title }: FilterBtnProps) => {
	return (
		<>
			<button className="bg-[#3056D3] text-white capitalize font-semibold p-2 w-[8rem] rounded-sm duration-500 transition-all hover:bg-[#212B36] text-xl">
				{title}
			</button>
		</>
	);
};

export default FilterBtn;
