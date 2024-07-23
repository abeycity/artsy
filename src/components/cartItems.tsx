import { FaMinus, FaPlus, FaTimesCircle } from "react-icons/fa"
import { product1 } from "../assets"
import Button from "./button/button"
import { NavigateFunction } from "react-router-dom"



const CartItems = ({handleclick,navigate,proceed}:{handleclick?:()=>void,navigate?:NavigateFunction,proceed?:boolean}) => {
  return (
    <div>

        <div className="flex flex-col gap-6 lg:px-10 my-6">
            <hr  className="text-gray w-full h-px"/>
            <div className="flex justify-between w-full">
                <main className="flex gap-8">
                    <img src={product1} alt="" className="max-h-[150px] max-w-[150px]" />
                    <div className="flex flex-col items-start gap-4">
                    <p className="text-2xl font-medium ">Philomena ‘22</p>

                        <div className="flex  gap-6 items-center"> 
                        <FaMinus fontSize={21}/>
                        <p className="text-2xl font-semibold">1</p>
                        <FaPlus fontSize={21}/>
                        </div>
                    </div>
                </main>
                <div className="flex flex-col gap-8 items-center">
                    <FaTimesCircle fontSize={31}/>
                    <p className="text-xl font-semibold">$35.50</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-6 lg:px-10 my-6">
            <hr  className="text-gray w-full h-px"/>
            <div className="flex justify-between w-full">
            <main className="flex gap-8">
                <img src={product1} alt="" className="max-h-[150px] max-w-[150px]" />
                <div className="flex flex-col items-start gap-4">
                <p className="text-2xl font-medium ">Philomena ‘22</p>

                    <div className="flex  gap-6 items-center"> 
                    <FaMinus fontSize={21}/>
                    <p className="text-2xl font-semibold">1</p>
                    <FaPlus fontSize={21}/>
                    </div>
                </div>
            </main>
            <div className="flex flex-col gap-8 items-center">
                <FaTimesCircle fontSize={31}/>
                <p className="text-xl font-semibold">$35.50</p>
                </div>
            </div>
        </div>
       {
        proceed ?
            <section className=" px-6 py-8 mt-10">
          
                <div className="flex flex-col items-end w-full px-6 gap-6">
                    <div  className="flex items-center justify-between w-full">
                    <p className="text-xl font-light text-[#888888]">Product in cart</p>
                    <p className="text-xl font-light">3 items</p>
                    </div>
                    <div  className="flex items-center justify-between w-full">
                        <p className="text-xl font-light text-[#888888]">Shipping:</p>
                    <p className="text-xl font-light">$2.50</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                    <p className="text-xl font-light text-[#888888]">Total:</p>
                    <p className="text-xl font-light ">$114.00</p>
                    </div>
                </div>
            </section>
           :
            <section className="flex flex-col-reverse justify-between gap-10 px-6 py-8 border-t mt-10 md:flex-row ">
                <div className="w-full flex flex-col gap-4 items-center">
                    <Button classname=" px-8 lg:px-16 bg-dark text-white py-4 text-2xl rounded-md hover:bg-[#006CA2] hover:ease-in " onclick={handleclick}>Proceed to checkout</Button>
                    <Button outline  classname=" text-xl font-medium" onclick={()=>{navigate(-1)}}>Continue shopping</Button>
                </div>
                <div className="flex flex-col items-end w-full px-6 gap-6">
                    <div  className="flex items-center justify-between w-full">
                    <p className="text-xl font-light text-[#888888]">Product in cart</p>
                    <p className="text-xl font-medium">3 items</p>
                    </div>
                    <div  className="flex items-center justify-between w-full">
                        <p className="text-xl font-light text-[#888888]">Shipping:</p>
                    <p className="text-xl font-medium">$2.50</p>
                    </div>
                    <div className="flex items-center justify-between w-full max-sm:border-t-2 max-sm:border-dashed pt-4">
                    <p className="text-xl font-light text-[#888888]">Total:</p>
                    <p className="text-xl font-medium ">$114.00</p>
                    </div>
                </div>
            </section>
       }
    </div>
  )
}

export default CartItems