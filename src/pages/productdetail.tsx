import {useNavigate} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import {love} from '../assets'
import Button from '../components/button/button'
import Accordion from '../components/Accordion/Accordion'
import Productswiper from '../components/swipers/productswiper'
import { useParams } from 'react-router-dom'
import { products } from '../utlis/variable'



const Productdetail = () => {
    const  params=useParams()
    const navigate=useNavigate()
    const item=products.find((i)=>i.name === params?.id)
    if(!item){
        return (
            <>
             <div>
                <p>
                    could not find item 
                </p>
             </div>
            </>
        )
    }

    const handleclick=()=>{
        navigate("/marketplace/shoppingcart")
    }

  return (
    <main className='flex justify-center'>
        <div className='max-w-screen-2xl w-full'>
            <div className=' flex justify-center'>
              
                <div className=' flex lg:border lg:flex-row flex-col  '>
                    <div className='p-6 object-cover'>
                        <img src={item.img} alt='' className=' w-[350px] md:w-[500px] md:max-h-[1000px]' />
                    </div>
                    <div className='lg:border-l font-satoshi '>
                        <div className='flex justify-between items-center p-6 border-b'>
                            <h5 className='font-semibold md:text-4xl text-2xl  '>{item.name}</h5>
                            <div className=' '>
                                <p className='md:text-2xl font-semibold text-xl'>${item.price}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 px-8 py-10 border-b'>
                                <p className='text-2xl'>Creator: <span className=' font-medium text-middle'>{item.creator}</span></p>
                                <p className='text-xl'>{item.country}</p>
                                <p className='text-2xl font-medium'>Total views : <span>{item.views}k views</span></p>
                                <div className='flex gap-4 items-center font-semibold text-3xl'>
                                    <span>-</span>
                                    <p>1</p>
                                    <span>+</span>
                                </div>                 
                                <div className='flex items-center gap-6'>
                                    <Button classname='px-8 md:px-16 py-3  bg-[#272727]' onclick={handleclick}> 
                                        <div className='flex items-center gap-4'>
                                            <p className='text-lg text-white'>Add to cart</p>
                                            <FaArrowRight color='#fff'/>
                                        </div>
                                    </Button>
                                    <div className='border px-6 py-3'>
                                        <img src={love} alt=''/>
                                    </div>
                                </div>
                        </div>
                        
                        <div className='w-full p-6  border-b'>
                            <Accordion title='Description' className='text-2xl font-semibold'>
                                <p className='w-[350px] md:w-[500px] font-normal text-lg py-3 '>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Illum reprehenderit odio veniam, hic
                                    minus alias vero ad? Soluta iusto, at sit eaque debitis ducimus
                                    hic sed, eveniet neque nihil aspernatur!
                                </p>
                            </Accordion>
                        </div>
                        <div className='w-full p-6  border-b'>
                            <Accordion title='Listings'  className='text-2xl font-semibold'>
                                <p className=' w-[350px] md:w-[500px]  font-normal text-lg py-3'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Illum reprehenderit odio veniam, hic
                                    minus alias vero ad? Soluta iusto, at sit eaque debitis ducimus
                                    hic sed, eveniet neque nihil aspernatur!
                                </p>
                            </Accordion>
                        </div>
                            <div className='w-full p-6 '>
                            <Accordion title='Status'  className='text-2xl font-semibold'>
                                <p className='w-[350px] md:w-[500px]  font-normal text-lg'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Illum reprehenderit odio veniam, hic
                                    minus alias vero ad? Soluta iusto, at sit eaque debitis ducimus
                                    hic sed, eveniet neque nihil aspernatur!
                                </p>
                            </Accordion>
                        </div>
                    
                    
                    </div>


                </div>

            </div>

            <section>
               <div className='my-10 mx-2 md:mx-16'>
                  <p className=' text-xl md:text-2xl font-medium font-satoshi'>Explore more from this collection</p>
               </div>
                <div className='mx-2 md:ml-16'>
                   <Productswiper/>
                </div>
                <div className='flex justify-center my-10'>
                   <Button classname='px-16 py-3 border-2 text-xl font-medium rounded-lg'>Explore all</Button>
                </div>
            </section>
       </div>

    </main>
    )
}

export default Productdetail