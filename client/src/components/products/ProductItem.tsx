import formatCurrency from "../../utilities/formatCurrency"
import { BsStarFill,BsStar } from "react-icons/bs";
import {FaPlus , FaMinus} from 'react-icons/fa'
import { useShoppingCart } from "../../context/ProductContext";
type  ProductItemProps ={
    id:number,
    companyName:string,
    color:string,
    price:number,
    type:string,
    imgUrl:string
}

const ProductItem = ({id,companyName,type,price,imgUrl}:ProductItemProps) => {
    const { getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removerFromCart } = useShoppingCart()
  const quantity =getItemQuantity(id);
  return (
    <div className="h-[40rem] rounded-md overflow-hidden group">
        <img src={imgUrl} alt={ companyName} className="w-full h-[65%] object-cover transition-all duration-500 group-hover:scale-125" />
        <div className="h-fit bg-white py-4 shadow-sm">
            <div className="p-4 h-auto">
                <h3 className="capitalize text-3xl font-semibold text-[#090E34] mb-4">{ companyName}</h3>
                <p className='flex items-center gap-4 text-2xl'>
                    <BsStarFill className='text-[goldenrod]' />
                    <BsStarFill className='text-[goldenrod]' />
                    <BsStarFill className='text-[goldenrod]' />
                    <BsStarFill className='text-[goldenrod]' />
                    <BsStar className='text-[goldenrod]'/>
                </p>
            </div>
            <div className="flex items-center justify-between px-4">
                <p className="text-xl text-[#637381]">{formatCurrency(price)}</p>
                <div className="flex items-center gap-2">
                    <button onClick={()=>increaseCartQuantity(id)}><FaPlus /></button>
                    <span className="text-[#090E34]">{quantity}</span>
                    <button onClick={()=>decreaseCartQuantity(id)}><FaMinus /></button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="px-4">
                    <button onClick={()=>increaseCartQuantity(id)} className="bg-[#3056D3] p-2 rounded-md text-lg w-[10rem]  text-white uppercase mt-4 transition-all duration-500 translate-y-[1.625rem] opacity-0 hover:bg-[#212B36] group-hover:opacity-100 group-hover:translate-y-0">add to cart</button>
                </p> 
                { quantity > 0 && 
                    (<p className="px-4">
                        <button onClick={()=>removerFromCart(id)} className="bg-[crimson] py-2 rounded-md text-lg w-[10rem]  text-white uppercase mt-4 ">remove</button>  
                    </p>
                    )
                 }
            </div>
            
            
            
        </div>
    </div>
  )
}

export default ProductItem