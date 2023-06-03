import { bag } from '../../assets'
import {BsStarFill ,BsStar} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const HomeProduct = () => {
  return (
    <div >
        <div className='w-full  relative'>
            <img src={bag} alt="" className='w-full object-cover'/>
            <span className='bg-[crimson] w-20 text-[1.6rem] font-medium flex items-center justify-center py-[0.2rem] capitalize rounded text-white absolute top-6 left-6'>hot</span>
        </div>
        <div className='bg-white shadow flex flex-col items-center gap-10 py-10 '>
            <h3 className=' text-4xl text-center capitalize font-bold leading-snug'>
                    <Link to='/shop' className='transition-all duration-500 hover:text-[#3056D3]'> stylish woman bag</Link>
                    <span className='block text-3xl'>$75.00</span>
            </h3>
                
            <p className='flex items-center gap-4 text-2xl'>
                <BsStarFill className='text-[gold]' />
                <BsStarFill className='text-[gold]' />
                <BsStarFill className='text-[gold]' />
                <BsStarFill className='text-[gold]' />
                <BsStar className='text-[gold]'/>
            </p>
            <Link to='/shop'>
                <button>add to cart</button>
            </Link>
        </div>
    </div>
  )
}

export default HomeProduct