import { BsTruck, BsWallet2 } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { ReactNode } from "react";
type ServiceProps = {
	illustration: ReactNode;
	title: string;
	desc: string;
};

const Service = ({ illustration, title, desc }: ServiceProps) => {
	return (
		<div className="px-16 md:px-20 lg:px-36 flex flex-col justify-center items-center gap-6 lg:border lg:border-b-0 py-16">
			<div className="w-20 h-20 rounded-full grid place-items-center shadow">
				<span className="text-4xl text-primary font-bold">
					{illustration}
				</span>
			</div>
			<h4 className="text-secondary capitalize text-4xl font-bold ">
				{title}
			</h4>
			<p className="text-center text-tertiary w-[30ch] text-2xl">
				{desc}
			</p>
		</div>
	);
};

const Services = () => {
	return (
		<div className="bg-white overflow-hidden  mt-20 flex flex-col  md:flex-row flex-wrap lg:flex-nowrap justify-center ">
			<Service
				illustration={<BsTruck />}
				title="Free delivery"
				desc="Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem."
			/>
			<Service
				illustration={<BsWallet2 />}
				title="Online Payment"
				desc="Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem."
			/>
			<Service
				illustration={<TfiReload />}
				title="Easy Return."
				desc="Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem."
			/>
		</div>
	);
};

export default Services;
