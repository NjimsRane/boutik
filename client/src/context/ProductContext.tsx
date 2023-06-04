import {useContext, createContext ,ReactNode,useState} from 'react'
type ShoppingCartProviderProp = {
    children:ReactNode
    // ReactNode is the type you give to children props inside react
}

type CartItem ={
  id:number // to be able to track item by ids
  quantity:number //to be able to do operation in the cart
}

type ShoppingCartContext ={
    // openCart:()=>void
    // closeCart:()=>void
    getItemQuantity:(id:number)=>number
    increaseCartQuantity:(id:number)=>void
    decreaseCartQuantity:(id:number)=>void 
    removerFromCart:(id:number)=>void
    cartQuantity:number //total number of items inside our cart
    cartItems:CartItem[] //to populate our cart
}


// create a context
const ShoppingCartContext =createContext({} as ShoppingCartContext ) 

// function to get the context
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
} 

// context provider to get all the value needed and operations with the cart
export function ShoppingCartProvider ({children}:ShoppingCartProviderProp){

  // const [isOpen,setIsOpen] =useState(false)
  const [cartItems,setCartItems] =useState<CartItem[]>([])


  const cartQuantity = cartItems.reduce((quantity,item)=>item.quantity + quantity,0)

  // const openCart =()=>setIsOpen(true)
  // const closeCart =()=>setIsOpen(false)

  function getItemQuantity (id:number){
    return (
      // if item evaluate to something return the quantity or zero if we have nothing
      cartItems.find(item=>item.id===id)?.quantity||0
    )
  }

  function increaseCartQuantity (id:number){
    setCartItems(currItems=>{
     
      if(currItems.find(item=>item.id===id)==null){
        return [...currItems,{id,quantity:1}]
      }else{
            return currItems.map(item=>{
              if(item.id===id){
              return {...item,quantity:item.quantity+1}
            }else {
              return item
            }
        })
      }
    })
  }

  function decreaseCartQuantity (id:number){
    setCartItems(currItems=>{
     
      if(currItems.find(item=>item.id===id)?.quantity===1){
        return currItems.filter(item=>item.id!==id)
      }else{
            return currItems.map(item=>{
              if(item.id===id){
              return {...item,quantity:item.quantity - 1}
            }else {
              return item
            }
        })
      }
    })
  }

  function removerFromCart (id:number){
    setCartItems(currItems=>{
      return currItems.filter(item=>item.id!==id)
    })
  }




    return ( 
      <ShoppingCartContext.Provider value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removerFromCart,
        // openCart,
        // closeCart,
        cartItems,
        cartQuantity
      }}>
        {children}
      </ShoppingCartContext.Provider>
    )
}

const ProductContext = () => {
  return (
    <div>ProductContext</div>
  )
}

export default ProductContext