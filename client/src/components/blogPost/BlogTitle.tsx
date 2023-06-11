type BlogTitleProps = {
	title: string;
};

const BlogTitle = ({ title }: BlogTitleProps) => {
	return (
		<div className="relative my-8">
			<h2 className="text-4xl text-secondary font-bold capitalize  mb-8">
				{title}
			</h2>
			<hr className="absolute top-[120%] left-0 w-16 border-2 border-primary rounded-sm" />
		</div>
	);
};

export default BlogTitle;
