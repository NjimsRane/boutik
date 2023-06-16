import { BlogPost, BlogGallery, BlogTitle } from "../../components";
import { blog1, blog2, blog3, blog4, blog5, blog6 } from "../../assets";
import { gal1, gal2, gal3, gal4, gal5, gal6, gal7 } from "../../assets";
import { useEffect } from "react";

const Blog = () => {
	useEffect(() => {
		document.title = "Blog | Boutik";
	}, []);

	const reveal = () => {
		const reveals = document.querySelectorAll(".reveal");

		for (let i = 0; i < reveals.length; i++) {
			const windowHeight = window.innerHeight;
			const revealTop = reveals[i].getBoundingClientRect().top;
			const revealPoint = 150;
			revealTop < windowHeight - revealPoint
				? reveals[i].classList.add("active")
				: reveals[i].classList.remove("active");
		}
	};

	window.addEventListener("scroll", reveal);
	return (
		<div className="px-16 md:px-20 lg:px-36 my-8 overflow-hidden flex flex-col gap-8">
			<div>
				<BlogTitle title="post" />
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<div>
						<BlogPost
							blogImg={blog1}
							blogTitle="The best way to change your summer wardrobe into autumn wardrobe"
							blogDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos in minus quae voluptatem, consequatur fugit repellat similique provident accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos in minus quae voluptatem, consequatur fugit repellat similique provident accusamusLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos in minus quae voluptatem, consequatur fugit repellat similique provident accusamus?"
							blogDate="Jan 12 , 2023"
						/>
					</div>
					<div>
						<BlogPost
							blogImg={blog2}
							blogTitle="The best way to change your summer."
							blogDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos in minus quae voluptatem, consequatur fugit repellat similique provident accusamus?"
							blogDate="Jan 12 , 2023"
						/>
					</div>
					<div className="reveal left">
						<BlogPost
							blogImg={blog3}
							blogTitle="GIYer and TV host Oprah`s jouney through gaming keeps evolving"
							blogDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos in minus quae voluptatem, consequatur fugit repellat similique provident accusamus?"
							blogDate="Feb 12 , 2023"
						/>
					</div>
					<div className="reveal right">
						<BlogPost
							blogImg={blog4}
							blogTitle="The best way to change your summer wardrobe into autumn wardrobe"
							blogDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos in minus quae voluptatem, consequatur fugit repellat similique provident accusamus?"
							blogDate="March 12 , 2023"
						/>
					</div>
					<div className="reveal left">
						<BlogPost
							blogImg={blog5}
							blogTitle="The best way to change your summer wardrobe into autumn wardrobe"
							blogDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos in minus quae voluptatem, consequatur fugit repellat similique provident accusamus?"
							blogDate="April 12 , 2023"
						/>
					</div>

					<div className="reveal right">
						<BlogPost
							blogImg={blog6}
							blogTitle="Men`s fashion in leather."
							blogDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos in minus quae voluptatem, consequatur fugit repellat similique provident accusamus?"
							blogDate="May 12 , 2023"
						/>
					</div>
				</div>
			</div>

			<div>
				<BlogTitle title="gallery" />
				<div className="reveal w-full gallery toTop">
					<div className="gal1">
						<BlogGallery imgGal={gal1} />
					</div>
					<div className="gal2">
						<BlogGallery imgGal={gal2} />
					</div>
					<div className="gal3">
						<BlogGallery imgGal={gal3} />
					</div>
					<div className="gal4">
						<BlogGallery imgGal={gal4} />
					</div>
					<div className="gal5">
						<BlogGallery imgGal={gal5} />
					</div>
					<div className="gal6">
						<BlogGallery imgGal={gal6} />
					</div>
					<div className="gal7">
						<BlogGallery imgGal={gal7} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
