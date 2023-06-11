import { Link } from "react-router-dom";
import { logo2 } from "../../assets";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FooterComponent } from "../../components";
import {
	appStore,
	playStore,
	mastercard,
	ae,
	visa,
	visaElectron,
	payPal,
	twitter,
	instagram,
	facebook,
	youtube,
} from "../../assets";
import { Pay } from "../../components/footerComponents/FooterComponent";

const Footer = () => {
	return (
		<footer className="bg-[#212B36] py-4">
			<div className="px-16 md:px-20 lg:px-36 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
				<div className="flex flex-col flex-1 gap-6">
					<Link to="/">
						<img
							src={logo2}
							alt="logo"
							className="w-44"
						/>
					</Link>
					<div className="flex items-center gap-4">
						<AiOutlineHome
							size={25}
							color="#3056D3"
						/>
						<p className="text-xl text-tertiary font-semibold">
							Shop 009A ,Level 4, wp A, <br /> Demo Park,Yaounde
						</p>
					</div>
					<div className="flex items-center gap-4">
						<AiOutlinePhone
							size={25}
							color="#3056D3"
						/>
						<p className="text-xl text-tertiary font-semibold">
							+237-613-555-0182
						</p>
					</div>
					<div className="flex items-center gap-4">
						<AiOutlineMail
							size={25}
							color="#3056D3"
						/>
						<p className="text-xl text-tertiary font-semibold">
							contact@yourmail.com
						</p>
					</div>
				</div>
				<div className="flex-1">
					<FooterComponent title="my account" />
					<div className="footerLink">
						<Link to="/">my profile</Link>
						<Link to="/">my order history</Link>
						<Link to="/">order tracking</Link>
						<Link to="/">shopping cart</Link>
					</div>
				</div>
				<div className="flex-1 ">
					<FooterComponent title="shop departments" />
					<div className="footerLink">
						<Link to="/">Computers & Accessories</Link>
						<Link to="/">Smartphones & Tablets</Link>
						<Link to="/">TV, Video & Audio</Link>
						<Link to="/">Cameras, Photo & Video</Link>
					</div>
				</div>
				<div className="flex-1">
					<FooterComponent title="download app" />
					<div className="grid grid-cols-1 gap-8">
						<span className="block h-[5rem]">
							<a
								href="#"
								aria-label="link to app store"
							>
								<img
									src={appStore}
									alt="link"
									className="rounded w-fit h-full object-cover"
								/>
							</a>
						</span>
						<span className="block h-[5rem]">
							<a
								href="#"
								aria-label="link to play store"
							>
								<img
									src={playStore}
									alt="link"
									className="rounded w-fit h-full object-cover"
								/>
							</a>
						</span>
					</div>
				</div>
			</div>
			<hr className="border border-tertext-tertiary w-full" />
			<div className="px-16 md:px-20 lg:px-36 ">
				<div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mt-4">
					<div className="flex items-center justify-center gap-4">
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={facebook}
								alt="facebook"
								className="w-8"
							/>
						</a>
						<a
							href="https://www.twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={twitter}
								alt="twitter"
								className="w-8"
							/>
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={instagram}
								alt="instagram"
								className="w-8"
							/>
						</a>
						<a
							href="https://www.youtube.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={youtube}
								alt="youtube"
								className="w-8"
							/>
						</a>
					</div>

					<div className="flex items-center justify-center gap-4 flex-wrap my-8">
						<Pay cardImg={mastercard} />
						<Pay cardImg={ae} />
						<Pay cardImg={visa} />
						<Pay cardImg={payPal} />
						<Pay cardImg={visaElectron} />
					</div>
				</div>
				<p className="text-lg text-center text-tertiary">
					Copyright &copy; <span>{new Date().getFullYear()}</span>{" "}
					Done by NjimsRane with{" "}
					<span className="text-[crimson]">&hearts;</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
