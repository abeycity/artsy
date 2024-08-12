import { Link } from "react-router-dom"
import { ProductProps } from "../utlis/types"
import LazyLoad from "react-lazy-load"


const Cardlayout = ({content}:{content:ProductProps[]}) => {
  return (
    <div className='grid max-md:grid-cols-2 grid-cols-3 gap-6 md:gap-10 my-8'>
            {
             content &&  Array.isArray(content) &&
             content.map(({img,name,price})=>(
             <Link to={`/marketplace/${name}`} key={name}>
                <div  className='flex flex-col gap-3 bg-[#fff]  shadow-md shadow-gray ring-2 ring-[#f7f7f7] rounded-lg p-4'  >
                      <div className='rounded-lg overflow-hidden object-cover'>
                        <LazyLoad>
                          <img src={img} alt="" />
                        </LazyLoad>
                      </div>
                      <div className='flex flex-col items-start'>
                        <h3  className=''>{name}</h3>
                        <div className='flex items-center justify-start gap-3'>
                        <p className='font-bold  text-md inline'><span>$</span>{price}</p>
                        </div>   
                      </div>
                </div>
              </Link>
             )) 
        
            }
        </div>
  )
}

export default Cardlayout