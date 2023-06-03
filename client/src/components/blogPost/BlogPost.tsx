const BlogPost = ({blogImg,blogTitle,blogDesc,blogDate}) => {
    return (
        <div className="bg-[#fff] shadow-sm">
            <img src={blogImg} alt="blog picture" className="md:h-[20rem]  lg:h-[25rem]  w-full object-cover" />
            <div className="px-2 pb-4">
                <h3 className="my-4 text-4xl text-[#090E34] font-bold lg:w-[30ch]">{blogTitle}</h3>
                <p className=" lg:w-[60ch] leading-normal text-lg text-[#090E34]">{blogDesc}</p>
                <span className="block text-right text-[#637381]">{blogDate}</span>
            </div>
        </div>
    );
};

export default BlogPost;