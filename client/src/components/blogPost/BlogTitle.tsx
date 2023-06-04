type BlogTitleProps ={
  title:string
}

const BlogTitle = ({title}:BlogTitleProps) => {
  return (
    <div className='relative my-8'>
        <h2 className="text-4xl text-[#090E34] font-bold capitalize  mb-8">{title}</h2>
        <hr className='absolute top-[120%] left-0 w-16 border-2 border-[#3056D3] rounded-sm' />
    </div>
  )
}

export default BlogTitle