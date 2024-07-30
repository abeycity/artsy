import { FaMinus, FaPlus, FaTimesCircle } from "react-icons/fa"
import Button from "./button/button"
import { products } from "../utlis/variable"
import { useGlobalContext } from "./context/shopcontext"
import { Link } from "react-router-dom"




const CartItems = ({handleclick,goBack,proceed}:{handleclick?:()=>void,goBack?:()=>void,proceed?:boolean}) => {
     const {cartItem,addToCart,removeFromCart, clear,getTotalCartAmount,getTotalCartItems}=useGlobalContext()
    
  return (
    <div>
        {
           products.map((e)=>{
                if(cartItem[e.id] > 0){
                    return(
                        <div key={e.id}>
                            <div className="flex flex-col gap-6 lg:px-10 my-6 overflow-hidden">
                                <hr  className="text-gray w-full h-px"/>
                                <div className="flex justify-between w-full px-2">
                                    <main className="flex lg:gap-8 gap-4">
                                        <img src={e.img} alt="" className="max-h-[150px] max-w-[150px]" />
                                        <div className="flex flex-col items-start gap-4">
                                        <p className="text-xl md:text-2xl font-medium">{e.name}</p>
                                            <div className="flex  gap-6 items-center"> 
                                            <FaMinus fontSize={21} onClick={()=>removeFromCart(e.id)}/>
                                            <p className="text-2xl font-semibold">{cartItem[e.id]}</p>
                                            <FaPlus fontSize={21}  onClick={()=>addToCart(e.id)} />
                                            </div>
                                        </div>
                                    </main>
                                    <div className="flex flex-col gap-8 items-center">
                                        <FaTimesCircle fontSize={31} onClick={()=>clear(e.id)}/>
                                        <p className="text-xl font-semibold">{e.price * cartItem[e.id]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                }
                
            })
        }
        
         {
              getTotalCartItems() === 0  && <div>
                
                <div>
                        <p className="text-xl font-medium font-bellefair">there is no product in your cart,browse the <span className="text-middle underline-offset-1 underline "> <Link to="/marketplace"> Marketplace </Link></span> to get one </p>
                    </div>
             </div>
         }  
            
        
       {
        proceed ?
            <section className={`${getTotalCartItems() === 0 ? 'hidden' : '' } px-6 py-8 mt-10`}>
          
                <div className="flex flex-col items-end w-full px-6 gap-6">
                    <div  className="flex items-center justify-between w-full">
                    <p className="text-xl font-light text-[#888888]">Product in cart</p>
                    <p className="text-xl font-light">{getTotalCartItems()}</p>
                    </div>
                    <div  className="flex items-center justify-between w-full">
                        <p className="text-xl font-light text-[#888888]">Shipping:</p>
                    <p className="text-xl font-light">$2.50</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                    <p className="text-xl font-light text-[#888888]">Total:</p>
                    <p className="text-xl font-light ">${getTotalCartAmount()}</p>
                    </div>
                </div>
            </section>
           :
            <section className={`${getTotalCartItems() === 0 ? 'hidden' : '' }  flex flex-col-reverse justify-between gap-10 px-6 py-8 border-t mt-10 md:flex-row `}>
                <div className="w-full flex flex-col gap-4 items-center">
                    <Button classname=" px-8 lg:px-16 bg-dark text-white py-4 text-2xl rounded-md hover:bg-[#006CA2] hover:ease-in " onclick={handleclick}>Proceed to checkout</Button>
                    <Button outline  classname=" text-xl font-medium" onclick={goBack}>Continue shopping</Button>
                </div>
                <div className="flex flex-col items-end w-full px-6 gap-6">
                    <div  className="flex items-center justify-between w-full">
                    <p className="text-xl font-light text-[#888888]">Product in cart</p>
                    <p className="text-xl font-medium">{getTotalCartItems()} item(s)</p>
                    </div>
                    <div  className="flex items-center justify-between w-full">
                        <p className="text-xl font-light text-[#888888]">Shipping:</p>
                    <p className="text-xl font-medium">$2.50</p>
                    </div>
                    <div className="flex items-center justify-between w-full max-sm:border-t-2 max-sm:border-dashed pt-4">
                    <p className="text-xl font-light text-[#888888]">Total:</p>
                    <p className="text-xl font-medium ">${getTotalCartAmount()}</p>
                    </div>
                </div>
            </section>
       }
    </div>
  )
}

export default CartItems