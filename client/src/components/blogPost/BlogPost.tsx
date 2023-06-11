type BlogPostProps = {
	blogImg: string;
	blogTitle: string;
	blogDesc: string;
	blogDate: string;
};

const BlogPost = ({
	blogImg,
	blogTitle,
	blogDesc,
	blogDate,
}: BlogPostProps) => {
	return (
		<div className="bg-[#fff] shadow-sm h-[40rem] lg:h-[42rem] overflow-scroll blogPost">
			<img
				src={blogImg}
				alt="blog picture"
				className="md:h-[20rem]  lg:h-[25rem]  w-full object-cover"
			/>
			<div className="px-2 pb-4">
				<h3 className="my-4 text-4xl text-secondary font-bold lg:w-[30ch]">
					{blogTitle}
				</h3>
				<div className="flex justify-between">
					<p className=" lg:w-[60ch] leading-normal text-lg text-secondary">
						{blogDesc}
					</p>
					<span className="text-right text-tertiary self-end">
						{blogDate}
					</span>
				</div>
			</div>
		</div>
	);
};

export default BlogPost;
