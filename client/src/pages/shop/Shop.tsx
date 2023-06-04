import {blog1, blog2, blog3, blog4, blog5} from '../../assets'
import { BlogTitle, ProductItem } from '../../components'
import formatCurrency from '../../utilities/formatCurrency'
import storeItems from '../../data/items.json'



const Shop = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-8 my-8 px-16 md:px-36 lg:px-80">
        <div className='flex-1'>
          <img src={blog1} alt="" className='w-full object-cover'/>
          <div className='flex justify-between mt-4'>
            <div className='smallImg'>
              <img src={blog2} alt="" className='w-full h-full object-cover' />
            </div>
            <div  className='smallImg'>
              <img src={blog3} alt=""  className='w-full h-full object-cover'/>
            </div>
            <div  className='smallImg'>
              <img src={blog4} alt=""  className='w-full h-full object-cover'/>
            </div>
            <div  className='smallImg'>
              <img src={blog5} alt=""  className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-4 px-4'>
           <h6 className='text-[#637381] text-xl'>Home / T-Shirt</h6>
           <h3 className='py-4 text-[#090E34] font-semibold text-2xl'>Men`s Fashion T Shirt</h3>
           <h2 className='text-[#090E34] font-bold text-4xl capitalize'>{formatCurrency(149)}</h2>
           <div>
              <input type="number"  name="quantity" id="quantity" className='w-[4rem] h-[2.5rem] text-xl px-1 mr-4 border outline-none' />
              <button className='bg-[#3056D3] p-2 rounded-md text-lg w-[10rem]  text-white uppercase mt-4 transition-all duration-500 hover:bg-[#212B36] '>add to cart</button>
            </div>
           
           <h4 className='py-4 text-[#090E34] font-bold text-3xl capitalize'>products details</h4>
           <span className='lg:w-[50ch] text-xl leading-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In consectetur architecto laudantium rem delectus quia id neque odit sit aspernatur minus culpa amet, autem omnis reprehenderit! Est, eius accusantium? Rem?</span>
        </div>
      </div>

      <div className='px-16 md:px-20 lg:px-36'>
          <div className='my-16'>
            <BlogTitle title='related products' />
          </div>

          <div className='homeProduct my-8'>
              {
              storeItems.map(item=>(
                <div key={item.lists[0].id}>
                  <ProductItem {...item.lists[2]} />
                </div>
              ))
            }
          </div>
      </div>
      
    </div>
  )
}

export default Shop