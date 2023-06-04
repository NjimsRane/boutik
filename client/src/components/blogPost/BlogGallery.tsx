type BlogGalleryProps ={
  imgGal : string
}

const BlogGallery = ({imgGal}:BlogGalleryProps) => {
  return (
    <div className="h-[25rem] w-full">
        <img src={imgGal} alt="gallery picture" className="w-full h-full object-cover" />
    </div>
  )
}

export default BlogGallery