import { MouseEventHandler } from "react";

type FilterBtnProps = {
	title: string;
	onChange: MouseEventHandler<HTMLButtonElement>;
};

const FilterBtn = ({ title, onChange }: FilterBtnProps) => {
	return (
		<>
			<button
				className="bg-primary text-white capitalize font-semibold p-2 w-[8rem] rounded-sm duration-500 transition-all hover:bg-[#212B36] text-xl active:bg-[#212B36]"
				onClick={onChange}
			>
				{title}
			</button>
		</>
	);
};

export default FilterBtn;
