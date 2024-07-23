
import { useNavigate } from 'react-router-dom'
import CartItems from '../../components/cartItems'
import Details from '../../components/details'

const Shoppingdetails = () => {
    const navigate=useNavigate()
    const handleclick=()=>{
     navigate("/marketplace/shoppingcart/paymentdetails")
   }
  return (
    <section className='flex justify-center'>
      <main className='max-w-screen-2xl w-full'>
        <div className='mt-10 flex flex-between items-start w-full'>
          <div className='w-full'>
          <Details handleclick={handleclick}/>
          </div>
          <div className='w-full hidden xl:block'>
          <CartItems proceed/>
          </div>
        </div>

      </main>
    </section>
  )
}

export default Shoppingdetails