import { Outlet,  useLocation } from 'react-router-dom';

const Stepper = () => {
    const STEPS:{path:string,title:string}[]=[
        { path:"/shoppingcart",
          title:"Shopping cart"

        },
        { path:"/shippingdetails",
         title:"Shipping details"

        },
        {
          path:"/paymentdetails",
         title:"Payment details",    
        }
    ]
   const paths= useLocation()
   console.log(paths)
  return (
    <div className='flex justify-center lg:my-10'>
      <div className='max-w-screen-2xl w-full px-4 lg:px-16 relative overflow-hidden'>
        <section className='flex justify-center w-full'>
          <ul className='flex items-center gap-6'>
           {
             STEPS.map(({title,path},i)=>{
               const isCurrent=location.pathname.endsWith(path)
               const isCompleted=STEPS.slice(i +1).some((step)=>
              location.pathname.endsWith(step.path))
               return <li key={i}  className='overflow-hidden' >
                  <div className='relative'>  
                    <p className={`${isCurrent ? "text-dark font-semibold " : isCompleted  ? "text-gray font-medium" : " text-[#888888]"}font-satoshi font-normal text-xl `}> {title}</p>
                  </div>
                  <span className={`${isCurrent ? "bg-dark" : isCompleted  ? "bg-middle" : " bg-gray"} absolute   max-sm:w-[150px] w-[170px] my-1 h-[2px] lg:h-1`}></span>                   
               </li>
             }
             )  
           }
          </ul>
        </section>
          <Outlet/>
      </div>
    </div>

  )
}

export default Stepper