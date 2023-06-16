import { BlogTitle } from "../../components";
import { BsHouse } from "react-icons/bs";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		document.title = "Contact | Boutik";
	}, []);

	return (
		<section className="px-16 md:px-20 lg:px-36 py-20 ">
			<div className="mx-auto ">
				<div className="-mx-4 flex flex-wrap lg:justify-between">
					<div className="w-full px-4 lg:w-1/2 xl:w-6/12">
						<div className="mb-12 max-w-[570px] lg:mb-0">
							<BlogTitle title="contact us" />
							<h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
								GET IN TOUCH WITH US
							</h2>
							<p className="mb-9 text-xl leading-relaxed text-tertiary">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eius tempor incididunt
								ut labore et dolore magna aliqua. Ut enim adiqua
								minim veniam quis nostrud exercitation ullamco
							</p>

							<div className="mb-8 flex items-center gap-4">
								<BsHouse className="text-7xl text-primary" />

								<div className="w-full">
									<h4 className="mb-1 text-xl font-bold text-dark">
										Our Location
									</h4>
									<p className="text-xl text-tertiary">
										99 S.t Jomblo Park Pekanbaru 28292.
										Indonesia
									</p>
								</div>
							</div>

							<div className="mb-8 flex items-center gap-4">
								<AiOutlinePhone className="text-7xl text-primary" />
								<div className="w-full">
									<h4 className="mb-1 text-xl font-bold text-dark">
										Phone Number
									</h4>
									<p className="text-xl text-tertiary">
										(+62)81 414 257 9980
									</p>
								</div>
							</div>

							<div className="mb-8 flex items-center gap-4">
								<AiOutlineMail className="text-7xl text-primary" />
								<div className="w-full">
									<h4 className="mb-1 text-xl font-bold text-dark">
										Email Address
									</h4>
									<p className="text-xl text-tertiary">
										info@yourdomain.com
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
						<div className="relative h-full rounded-lg bg-white p-8 shadow-lg sm:p-12">
							<form name="contactForm">
								<div className="mb-6">
									<input
										type="text"
										name="username"
										placeholder="Your Name"
										className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-tertiary outline-none focus:border-primary focus-visible:shadow-none"
									/>
								</div>
								<div className="mb-6">
									<input
										name="email"
										type="email"
										placeholder="Your Email"
										className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-tertiary outline-none focus:border-primary focus-visible:shadow-none"
									/>
								</div>
								<div className="mb-6">
									<input
										name="phone number"
										type="text"
										placeholder="Your Phone"
										className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-tertiary outline-none focus:border-primary focus-visible:shadow-none"
									/>
								</div>
								<div className="mb-6">
									<textarea
										placeholder="Your Message"
										className="border-[f0f0f0] w-full h-[10rem] resize-none rounded border py-3 px-[14px] text-base text-tertiary outline-none focus:border-primary focus-visible:shadow-none"
									></textarea>
								</div>
								<div>
									<button
										type="submit"
										className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
