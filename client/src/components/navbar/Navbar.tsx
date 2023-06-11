import { logo1 } from "../../assets";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useShoppingCart } from "../../context/ProductContext";

const Menu = () => {
	return (
		<>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? "text-primary"
						: "text-secondary duration-500 transition-all hover:text-primary"
				}
			>
				home
			</NavLink>
			<NavLink
				to="/shop"
				className={({ isActive }) =>
					isActive
						? "text-primary"
						: "text-secondary duration-500 transition-all hover:text-primary"
				}
			>
				shop
			</NavLink>
			<NavLink
				to="/products"
				className={({ isActive }) =>
					isActive
						? "text-primary"
						: "text-secondary duration-500 transition-all hover:text-primary"
				}
			>
				products
			</NavLink>
			<NavLink
				to="/blog"
				className={({ isActive }) =>
					isActive
						? "text-primary"
						: "text-secondary duration-500 transition-all hover:text-primary"
				}
			>
				blog
			</NavLink>
			<NavLink
				to="/accessories"
				className={({ isActive }) =>
					isActive
						? "text-primary"
						: "text-secondary duration-500 transition-all hover:text-primary"
				}
			>
				accessories
			</NavLink>
			<NavLink
				to="/contact"
				className={({ isActive }) =>
					isActive
						? "text-primary"
						: "text-secondary duration-500 transition-all hover:text-primary"
				}
			>
				contact
			</NavLink>
		</>
	);
};

const user = !false;

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const hangleToggle = () => {
		setToggleMenu(!toggleMenu);
	};

	const { cartQuantity } = useShoppingCart();
	return (
		<nav className="relative flex justify-between items-center  gap-4 px-16 py-8 md:px-20 lg:px-36 shadow bg-white">
			<div className="flex justify-between items-center w-full">
				<Link to="/">
					<img
						src={logo1}
						alt="logo"
						className="w-44"
					/>
				</Link>
				<div className="hidden lg:flex items-center gap-8 capitalize text-2xl font-semibold">
					<Menu />
					{user ? (
						<Link
							to="/login"
							className="w-[7rem] bg-primary py-1 text-2xl capitalize font-bold text-white tracking-wider rounded text-center"
						>
							<button className="capitalize">login</button>
						</Link>
					) : (
						<Link
							to="/"
							className="w-[7rem] bg-[crimson] py-1 text-2xl capitalize font-bold text-white tracking-wider rounded text-center"
						>
							<button className="capitalize">logout</button>
						</Link>
					)}
				</div>
				<div className="border-[1.5px] border-white hover:border-[1.5px] hover:border-primary p-1 rounded transition-all duration-500 lg:hidden">
					{toggleMenu ? (
						<AiOutlineClose
							size={28}
							color="#637381"
							className="cursor-pointer"
							onClick={hangleToggle}
						/>
					) : (
						<RxHamburgerMenu
							size={28}
							color="#637381"
							className="cursor-pointer"
							onClick={hangleToggle}
						/>
					)}
				</div>
			</div>
			<button className="relative block">
				<GiShoppingCart
					size={28}
					color="#637381"
				/>
				{cartQuantity > 0 && (
					<span className="absolute bottom-0  bg-[crimson] h-8 w-8 rounded-full text-white flex justify-center items-center right-0 translate-x-[25%] translate-y-[25%] text-sm">
						{cartQuantity}
					</span>
				)}
			</button>
			{toggleMenu && (
				<div className="scale-up-center absolute z-[9999] top-32 right-8 bg-white shadow w-[20rem] p-6 flex flex-col gap-8 capitalize text-2xl font-semibold lg:hidden">
					<Menu />
					{user ? (
						<Link
							to="/login"
							className="w-[7rem] bg-primary py-1 text-2xl capitalize font-bold text-white tracking-wider rounded text-center"
						>
							<button className="capitalize">login</button>
						</Link>
					) : (
						<Link
							to="/"
							className="w-[7rem] bg-[crimson] py-1 text-2xl capitalize font-bold text-white tracking-wider rounded text-center"
						>
							<button className="capitalize">logout</button>
						</Link>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
