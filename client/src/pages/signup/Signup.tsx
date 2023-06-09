import { Link, useNavigate } from "react-router-dom";
import { gal2, facebook, gmail } from "../../assets";
import { FormDetails, InputForm } from "../../components";
import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import axios from "axios";

const Signup = () => {
	const [values, setValues] = useState({
		fullname: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	useEffect(() => {
		document.title = "SignUp | Boutik";
	}, []);

	const [err, setErr] = useState(null);

	const inputs = [
		{
			id: 1,
			name: "fullname",
			type: "text",
			label: "fullname",
			required: true,
			// pattern: "^[A-Za-z0-9]$",
			errorMessage: "Please enter your full name",
		},
		{
			id: 2,
			name: "email",
			type: "email",
			label: "email",
			errorMessage: "Enter a valid email format",
			required: true,
		},
		{
			id: 3,
			name: "password",
			type: "password",
			label: "password",
			pattern:
				"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$^&*]{8,20}$",
			errorMessage:
				"Password should be 8-20 characters and includes at least 1 letter 1 number and 1 special character ",
			required: true,
		},
		{
			id: 4,
			name: "confirmPassword",
			type: "password",
			label: "confirm password",
			pattern: values.password,
			required: true,
			errorMessage: "Passwords don`t match",
		},
	];

	const hangleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleClick = async (e: FormEvent) => {
		e.preventDefault();
		try {
			await axios.post(
				"http://localhost:8080/api/auths/register",
				inputs
			);
			navigate("/login");
		} catch (err) {
			setErr(err);
		}
	};
	console.log(values);

	return (
		<div
			className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center items-center px-2"
			style={{
				backgroundImage: `linear-gradient(145deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(${gal2})`,
			}}
		>
			<div className="w-[32rem] h-fit bg-white rounded px-12 py-12 flex flex-col gap-4">
				<FormDetails
					title="sign up"
					desc="hello world"
				/>

				<form
					action="#"
					className="flex flex-col gap-8"
				>
					{inputs.map((input) => (
						<InputForm
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={hangleChange}
						/>
					))}

					<div className="text-right">
						<span>Already have an account ?</span>
						<Link
							to="/login"
							className="font-bold text-primary capitalize ml-2"
						>
							login
						</Link>
					</div>

					<input
						type="submit"
						value="signUp"
						className="w-[8rem] bg-primary py-2 text-2xl capitalize font-bold text-white tracking-wider rounded cursor-pointer"
						onClick={handleClick}
					/>
				</form>
				<div className="flex items-center gap-2">
					<hr className="w-[50%]" />
					<span className="text-[#637381]">or</span>
					<hr className="w-[50%]" />
				</div>
				<div className="flex justify-center gap-2">
					<a href="#">
						<img
							className="w-[2rem]"
							src={facebook}
							alt="link to facebook"
						/>
					</a>
					<a href="#">
						<img
							className="w-[2rem]"
							src={gmail}
							alt="link to gmail"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Signup;
