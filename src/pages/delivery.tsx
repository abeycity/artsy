import { deliveryhero } from "../assets"


const Delivery = () => {
  return (
    <section className="flex justify-center">
         <main className="max-w-screen-2xl">
                <div className="min-h-screen w-full">
                      <div className="flex flex-col items-center gap-6 mb-20 px-6">
                        <img src={deliveryhero} alt="" />  
                        <div className="flex flex-col items-center gap-2">
                        <p className=" text-2xl font-medium  text-center">Hey Celestina, thank you for your purchase </p>
                        <p className="text-lg ">You are amazing.Cheers to being <span className="font-semibold text-start uppercase">Artsy!</span></p>
                        </div>
                      </div>
                </div>
         </main>
    </section>
  )
}

export default Delivery