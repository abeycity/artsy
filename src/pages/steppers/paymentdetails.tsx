import {  useNavigate } from "react-router-dom"
import { coinbase, metamask, phantom, secure, wallect } from "../../assets"
import Button from "../../components/button/button"
import { useGlobalContext } from '../../components/context/shopcontext';


const Paymentdetails = () => {
  const navigate=useNavigate()
  const { clearAll,getTotalCartAmount,getTotalCartItems}=useGlobalContext()
  const handleclick=()=>{
     clearAll()
    navigate("/delivery")
  }
 
  return (
    <section className='flex justify-center'>
      <main className='max-w-screen-2xl w-full'>
        <div className='mt-10 flex  justify-between gap-8 py-8 w-full px-8'>
           <div className="w-full flex flex-col gap-6">
            <h6 className="text-2xl font-medium">Payment method</h6>
              <form action="">
                <section className=" flex flex-col gap-6 py-4 px-8 shadow-md rounded-md shadow-gray ring-2 ring-[#f7f7f7] ">
                    <div className="flex  max-sm:flex-col items-center gap-6 ">
                      <div className="flex gap-4">
                        <input type="radio"  name="radio"/>
                         <p className="text-xl font-semibold">Select your wallet</p>
                      </div>
                      <div>
                        <div className="flex gap-1">
                          <img src={metamask} alt=""  />
                          <img src={coinbase} alt=""  />
                          <img src={phantom} alt="" />
                          <img src={wallect} alt=""  />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                     <article className='text-[#888888]  text-lg  mx-8  w-[350px]'>Connect with one of our available wallet providers or add and connect a new wallet</article>
                    </div>
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor="wallet" className='text-[#888888]  text-xl'>Wallet type</label>
                    <input type="text" name="wallet" id="" className='bg-[#F2F2F2] py-4 px-6 rounded-md  border border-gray'/>
                  </div>
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor="key" className='text-[#888888]  text-xl'>Key</label>
                    <input type="number" name="key" id="" placeholder="please enter your key " className='bg-[#F2F2F2] py-4 px-6 rounded-md  border border-gray'/>                   
                  </div>
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor="date" className='text-[#888888]  text-xl'>Expiry date</label>
                    <input type="date" name="date" id="" className='bg-[#F2F2F2] py-4 px-6 rounded-md  border border-gray'/>
                  </div>
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor="cvv" className='text-[#888888]  text-xl'>CVV</label>
                    <input type="number" name="cvv" id=""  placeholder="***" className='bg-[#F2F2F2] py-4 px-6 rounded-md  border border-gray'/>   
                  </div>
                  <div className="flex items-center gap-6 py-6">
                    <input type="checkbox" name="check" id="check" />
                    <label htmlFor="check" className='text-[#888888]  text-sm md:text-xl'>Save my wallet details &  information  for future transactions</label>
                  </div>

                </section>
                  <Button classname="w-full text-center bg-[#000] p-8 mt-10 text-[#f5f5f5] text-2xl font-medium rounded-md hover:bg-[#006CA2] hover:ease-in duration-200" onclick={handleclick}>Confirm</Button>
              </form>
           </div>
           <div className="w-full xl:flex flex-col gap-10 hidden">
             <div className="justify-end flex w-full">
                <div className="flex gap-4 items-center">
                  <img src={secure} alt=""  />
                  <p className='text-[#888888]  text-2xl'>Secure server</p>
                </div>
             </div>
             <section className="flex flex-col gap-8">
               <h6 className="text-xl font-semibold">Payment Summary</h6>
               <div className="border-t-gray border-t pt-6 flex flex-col gap-4">
                 <p className="text-2xl font-semibold">Metamask wallet: <span className="text-2xl font-medium text-[#888888]">002345Ki90pzzz#</span></p>
                 <p className='text-[#888888]  text-xl'>Actively linked to Yaba, Lagos Nigeria.</p>
                 <span></span>
               </div>
               <div className="border-t-gray border-t pt-6">
                 <p className="text-lg font-semibold">Expected arrival date:<span className="text-xl font-medium text-[#888888]">Between 22nd September and 26 September 2022</span></p>
               </div>
               <div className="flex flex-col items-end w-full px-6 gap-6 border-t border-t-gray pt-6">
                    <div  className="flex items-center justify-between w-full">
                    <p className="text-2xl font-medium text-[#888888]">Products in cart:</p>
                    <p className="text-2xl font-semibold"> {getTotalCartItems()} item(s)</p>
                    </div>
                    <div  className="flex items-center justify-between w-full">
                        <p className="text-2xl font-medium text-[#888888]">Shipping:</p>
                    <p className="text-2xl font-semibold">$2.50</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                    <p className="text-2xl font-medium text-[#888888]">Total:</p>
                    <p className="text-2xl font-semibold ">${getTotalCartAmount()}</p>
                    </div>
                </div>
             </section>
           </div>
        </div>
      </main>
    </section>
  )
}

export default Paymentdetails