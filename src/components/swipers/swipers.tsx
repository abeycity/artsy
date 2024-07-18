
import { Swiper, SwiperSlide } from 'swiper/react';
import { homeslider } from '../../assets';
import Button from '../button/button';
import "swiper/css";
const Swipers = () => {
  return (
    <div>
        <Swiper    
        >
        <SwiperSlide className='relative'>
            <div>
               <img src={homeslider} alt=""  />
            </div>
            <div className='absolute bottom-10 flex justify-between items-end text-white px-10 py-1 w-full'>
               <main className='flex gap-4 items-center'>
                 <div> <h5 className='font-bellefair text-7xl font-thin '> 01</h5></div>
                 <div className='flex flex-col gap-4'>
                    <span className='font-bellefair text-4xl font-thin'>monalisa redefined in style.</span>
                    <span className='font-bellefair'>start on : 08.00 gts . monday</span>
                    <article className='w-[550px] font-satoshi'>
                        GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS 
                        AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                    </article>
                 </div>
               </main>
               <div className=' flex  gap-4 items-center justify-end'>
                 <Button outline classname='text-white'> See more</Button>
                 <Button classname='border border-white py-3 px-6 rounded-lg'>Set a remainder</Button>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <div>
               <img src={homeslider} alt=""  />
            </div>
            <div className='absolute bottom-10 flex justify-between items-end text-white px-10 py-1 w-full'>
               <main className='flex gap-4 items-center'>
                 <div> <h5 className='font-bellefair text-7xl font-thin '> 01</h5></div>
                 <div className='flex flex-col gap-4'>
                    <span className='font-bellefair text-4xl font-thin'>monalisa redefined in style.</span>
                    <span className='font-bellefair'>start on : 08.00 gts . monday</span>
                    <article className='w-[550px] font-satoshi'>
                        GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS 
                        AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                    </article>
                 </div>
               </main>
               <div className=' flex  gap-4 items-center justify-end'>
                 <Button outline classname='text-white'> See more</Button>
                 <Button classname='border border-white py-3 px-6 rounded-lg'>Set a remainder</Button>
               </div>
            </div>
        </SwiperSlide>
        
        </Swiper>
    </div>
  )
}

export default Swipers