import { ProductProps } from "../utlis/types"


const Cardlayout = ({content}:{content:ProductProps[]}) => {
  return (
    <div className='grid max-md:grid-cols-2 grid-cols-3 gap-4 my-8'>
            {
             content &&  Array.isArray(content) &&
             content.map(({img,name,price})=>(
             
                <div  className='flex flex-col gap-3 bg-[#fff]' key={name} >
                      <div className='rounded-lg overflow-hidden'>
                      <img src={img} alt=""  />
                      </div>
                      <div className='flex flex-col items-start'>
                        <h3  className=''>{name}</h3>
                        <div className='flex items-center justify-start gap-3'>
                        <p className='font-bold  text-md inline'><span>$</span>{price}</p>
                        </div>   
                      </div>
                </div>
              
             )) 
        
            }
        </div>
  )
}

export default Cardlayout