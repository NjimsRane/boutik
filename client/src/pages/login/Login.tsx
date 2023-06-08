import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { gal2 } from "../../assets";
import { FormDetails, InputForm } from "../../components";

const Login = () => {
	const [values, setValues] = useState({
		username: "",
		password: "",
	});

	const inputs = [
		{
			id: 1,
			name: "username",
			type: "text",
			label: "Username",
			errorMessage: "invalid username",
			pattern: "^[A-Za-z0-9]$",
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

	const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
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
			<div className="w-[32rem] h-[38rem] bg-white rounded px-12 py-14 flex flex-col gap-16">
				<FormDetails
					title="sign in"
					desc="welcome back"
				/>
				<form
					action="#"
					onSubmit={handleSubmit}
				>
					{inputs.map(input => (
						<div className="my-8">
							<InputForm
								key={input.id}
								{...input}
								value={values[inputs.name]}
								onChange={handleChange}
							/>
						</div>
					))}

					<div className="flex justify-between items-center capitalize my-8">
						<a
							href="#"
							className="duration-500 transition-all hover:text-[#3056d3]"
						>
							forgot password?
						</a>
						<Link
							to="/signup"
							className="font-bold text-[#3056d3]"
						>
							sign up
						</Link>
					</div>
					<input
						type="submit"
						value="login"
						className="w-[8rem] bg-[#3056d3] py-2 text-2xl capitalize font-bold text-white tracking-wider rounded cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default Login;
