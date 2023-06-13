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
		<div className="bg-[#fff] shadow-sm overflow-scroll blogPost h-fit lg:h-[43rem] relative">
			<img
				src={blogImg}
				alt="blog picture"
				className="md:h-[20rem]  lg:h-[25rem]  w-full object-cover"
			/>
			<div className="px-4 py-4">
				<h3 className="my-4 text-4xl text-secondary font-bold lg:w-[30ch]">
					{blogTitle}
				</h3>

				<p className=" lg:w-[70ch] leading-normal text-lg text-secondary">
					{blogDesc}
				</p>
				<span className="absolute bottom-4 right-2 text-tertiary">
					{blogDate}
				</span>
			</div>
		</div>
	);
};

export default BlogPost;
