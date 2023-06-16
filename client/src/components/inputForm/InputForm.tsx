import { InputFormProps } from "../../types/types";

const InputForm = ({
	label,
	onChange,
	errorMessage,
	...inputProps
}: InputFormProps) => {
	return (
		<div className="relative z-0 group w-full">
			<input
				className="block w-full py-3 px-2 text-lg bg-transparent appearance-none focus:outline-none z-10 text-white peer"
				{...inputProps}
				onChange={onChange}
				id={label}
			/>
			<label
				htmlFor={label}
				className="absolute text-xl text-tertiary capitalize tracking-wider font-semibold duration-300 transition-all transform origin-[0] -translate-y-0 top-3 px-2 -z-10 peer-placeholder-shown:translate-y-0 peer-focus:text-primary peer-focus:-translate-y-7 peer-focus:text-base peer-focus:left-0 peer-focus:px-0 peer-valid:text-primary peer-valid:-translate-y-7 peer-valid:text-base peer-valid:left-0 peer-valid:px-0 peer-invalid:text-[crimson]"
			>
				{label}
			</label>
			<i className="absolute bottom-0 bg-primary w-full h-[2px] transition-all duration-500 rounded peer-focus:h-[2.8rem] peer-valid:h-[2.8rem] peer-invalid:bg-[crimson] -z-[9]"></i>
			<small className="text-[crimson] capitalize px-2 tracking-wide hidden peer-focus:in absolute -bottom-4">
				{errorMessage}
			</small>
		</div>
	);
};

export default InputForm;
