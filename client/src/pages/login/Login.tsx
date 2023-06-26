import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { gal2 } from "../../assets";
import { FormDetails, InputForm } from "../../components";

interface IUser {
	email: string;
	password: string;
}
interface Inputs {
	id: number;
	name: string;
	type: string;
	label: string;
	errorMessage: string;
	required: boolean;
	pattern?: string;
}
// type UserSubmitForm = {
// 	fullname: string;
// 	username: string;
// 	email: string;
// 	password: string;
// 	confirmPassword: string;
// 	acceptTerms: boolean;
// };

const Login = () => {
	const [values, setValues] = useState<IUser>({
		email: "",
		password: "",
	});

	useEffect(() => {
		document.title = "Login | Boutik";
	}, []);

	const inputs: Inputs[] = [
		{
			id: 1,
			name: "email",
			type: "email",
			label: "Email",
			errorMessage: "invalid email",
			required: true,
		},
		{
			id: 2,
			name: "password",
			type: "password",
			label: "password",
			errorMessage: "Incorrect password",
			pattern:
				"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$^&*]{8,20}$",
			required: true,
		},
	];

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	console.log(values);

	return (
		<div
			className="min-h-screen w-fulll bg-cover bg-center bg-no-repeat px-4 flex justify-center items-center"
			style={{
				backgroundImage: `linear-gradient(145deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${gal2})`,
			}}
		>
			<div className="w-[32rem] h-[38rem] bg-white rounded px-12 py-12 flex flex-col gap-16">
				<FormDetails
					title="sign in"
					desc="welcome back"
				/>
				<form
					action="#"
					onSubmit={handleSubmit}
					className="h-[30rem] relative flex flex-col gap-8"
				>
					{inputs.map((input) => (
						<InputForm
							key={input.id}
							{...input}
							value={values[inputs.name]}
							onChange={handleChange}
						/>
					))}

					<div className="flex justify-between items-center capitalize my-8">
						<a
							href="#"
							className="duration-500 transition-all hover:text-[#3056d3]"
						>
							forgot password?
						</a>

						<input
							type="submit"
							value="login"
							className="w-[8rem] bg-[#3056d3] py-2 text-2xl capitalize font-bold text-white tracking-wider rounded cursor-pointer"
						/>
					</div>
					<div className="text-center absolute bottom-0 left-[50%] -translate-x-[50%]">
						<span>Don`t have an account ?</span>
						<Link
							to="/register"
							className="font-bold text-[#3056d3] ml-2"
						>
							Sign up
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
