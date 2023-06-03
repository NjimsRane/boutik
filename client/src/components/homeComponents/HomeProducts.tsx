import { HomeProduct } from '../../components'

const HomeProducts = () => {
  return (
    <div className='px-16 md:px-20 lg:px-36'>
      <div className="flex flex-col items-center mb-10 ">
        <h2 className="text-[#090E34] text-center text-4xl md:text-5xl font-bold relative after:absolute after:content-[''] after:bg-[#3056D3] after:w-[10rem] after:h-[0.4rem] after:left-[50%] after:translate-x-[-50%] after:bottom-[-3rem] md:after:bottom-[-4rem]">You may also like</h2>
        <p className="text-2xl text-center mt-24 text-[#637381] leading-normal md:w-[50ch]">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
      </div>

      <HomeProduct />
    </div>
  )
}

export default HomeProducts