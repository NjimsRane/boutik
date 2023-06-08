import { Link } from "react-router-dom";
import { gal2, facebook, gmail } from "../../assets";
import { FormDetails, InputForm } from "../../components";

const Signup = () => {
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
					<InputForm />
					<InputForm />
					<InputForm />
					<InputForm />
					<div className="text-right">
						<span>Already have an account ?</span>
						<Link
							to="/login"
							className="font-bold text-[#3056d3] capitalize ml-2"
						>
							login
						</Link>
					</div>
					<input
						type="submit"
						value="signUp"
						className="w-[8rem] bg-[#3056d3] py-2 text-2xl capitalize font-bold text-white tracking-wider rounded cursor-pointer"
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
