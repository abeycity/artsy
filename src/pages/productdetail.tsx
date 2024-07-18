
import { FaArrowRight } from 'react-icons/fa'
import { eth, love, product2 } from '../assets'
import Button from '../components/button/button'
import Accordion from '../components/Accordion/Accordion'
import Productswiper from '../components/swipers/productswiper'

const Productdetail = () => {
  return (
        <div className=''>
            <div className=' flex  justify-center'>
                <div className=' flex border'>
                    <div className='p-6 object-cover'>
                        <img src={product2} alt=''width={500}  className='max-h-[1000px]' />
                    </div>
                    <div className='border-l font-satoshi '>
                        <div className='flex gap-6 items-center p-6 border-b'>
                            <h5 className='font-semibold text-4xl '>Boolean Egyptian</h5>
                            <div className='flex items-center gap-2'>
                                <img src={eth} alt='' width={30}/>
                                <p className='text-2xl font-semibold'>0.09</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 px-8 py-10 border-b'>
                                <p className='text-2xl'>Creator: <span className=' font-medium text-middle'>Ali Dawa</span></p>
                                <p className='text-xl'>Made in italy</p>
                                <p className='text-2xl font-medium'>Total views : <span>1.7k views</span></p>
                                <div className='flex gap-4 items-center font-semibold text-3xl'>
                                    <span>-</span>
                                    <p>1</p>
                                    <span>+</span>
                                </div>                 
                                <div className='flex items-center gap-6'>
                                    <Button classname='px-16 py-3  bg-[#272727]'>
                                        <div className='flex items-center gap-4'>
                                            <p className='text-lg text-white'>Add to cart</p>
                                            <FaArrowRight/>
                                        </div>
                                    </Button>
                                    <div className='border px-6 py-3'>
                                        <img src={love} alt=''/>
                                    </div>
                                </div>
                        </div>
                        
                        <div className='w-full p-6  border-b'>
                            <Accordion title='Description' className='text-2xl font-semibold'>
                                <p className='w-[500px] font-normal text-lg py-3 '>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Illum reprehenderit odio veniam, hic
                                    minus alias vero ad? Soluta iusto, at sit eaque debitis ducimus
                                    hic sed, eveniet neque nihil aspernatur!
                                </p>
                            </Accordion>
                        </div>
                        <div className='w-full p-6  border-b'>
                            <Accordion title='Listings'  className='text-2xl font-semibold'>
                                <p className='w-[500px]  font-normal text-lg py-3'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Illum reprehenderit odio veniam, hic
                                    minus alias vero ad? Soluta iusto, at sit eaque debitis ducimus
                                    hic sed, eveniet neque nihil aspernatur!
                                </p>
                            </Accordion>
                        </div>
                            <div className='w-full p-6 '>
                            <Accordion title='Status'  className='text-2xl font-semibold'>
                                <p className='w-[500px]  font-normal text-lg'>
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
               <div className='my-10 mx-16'>
                  <p className='text-2xl font-medium font-satoshi'>Explore more from this collection</p>
               </div>
                <div className='ml-16'>
                   <Productswiper/>
                </div>
                <div className='flex justify-center my-10'>
                   <Button classname='px-16 py-3 border-2 text-xl font-medium rounded-lg '>Explore all</Button>
                </div>
            </section>
       </div>
    )
}

export default Productdetail