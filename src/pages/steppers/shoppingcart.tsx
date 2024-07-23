
import { useNavigate } from "react-router-dom"
import CartItems from "../../components/cartItems"


const Shoppingcart = () => {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/marketplace/shoppingcart/shippingdetails")
}
  return (
    <div className="flex justify-center my-16">
        <section className="max-w-screen-2xl w-full font-satoshi">
           <CartItems handleclick={handleclick} navigate={navigate}/>
        </section>
    </div>
  )
}

export default Shoppingcart