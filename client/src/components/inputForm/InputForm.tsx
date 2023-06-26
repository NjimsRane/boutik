import { useState } from "react";
import { InputFormProps } from "../../types/types";

const InputForm = ({
	label,
	onChange,
	errorMessage,
	...inputProps
}: InputFormProps) => {
	const [focused, setFocused] = useState(false);

	const handlefocused = () => {
		setFocused(true);
	};

	return (
		<div className="w-full relative mt-8">
			<input
				className="relative bg-transparent w-full text-white outline-none peer p-2 z-10"
				{...inputProps}
				onChange={onChange}
				onBlur={handlefocused}
				focused={focused.toString()}
				// onFocus={() =>
				// 	inputsProps.name === "confirmPassword" && setFocused(true)
				// }
			/>
			<span className="absolute left-0 top-0 capitalize text-xl text-primary w-full p-2 transition-all duration-500  peer-focus:-top-7  peer-focus:px-0 peer-focus:text-tertiary peer-focus:text-base  peer-valid:-top-7  peer-valid:px-0 peer-valid:text-tertiary peer-valid:text-base ">
				{label}
			</span>
			<i className="absolute left-0 bottom-0 w-full rounded bg-primary h-[0.12rem] transition-all duration-500 peer-focus:h-10 peer-valid:h-10"></i>
			<small className="text-red-500 px-2 absolute left-0 top-10 hidden">
				{errorMessage}
			</small>
		</div>
	);
};

export default InputForm;
