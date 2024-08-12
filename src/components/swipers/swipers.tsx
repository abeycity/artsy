import { Pagination, A11y,Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { homeslider } from '../../assets';
import Button from '../button/button';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LazyLoad from 'react-lazy-load';
const Swipers = () => {

  return (
    <div className='relative py-10'>
        <Swiper    
            modules={[Pagination, Navigation, Autoplay,A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={
               {
                 prevEl:".swiper-button-prev",
                nextEl:".swiper-button-next"
               }
            }
            pagination={true}
            className='pb-16'
        >
        
        <SwiperSlide className='relative '>

            <div>
              <LazyLoad>
               <img src={homeslider} alt="" width={500} height={500} className='min-h-[300px] w-full'/>
              </LazyLoad>
            </div>
            <div className='absolute bottom-4 md:bottom-10 flex flex-col gap-4 lg:flex-row justify-between  items-end text-white px-4 md:px-10 py-1 w-full'>
               <main className='flex gap-4 items-center'>
                 <div> <h5 className='font-bellefair text-2xl md:text-7xl font-thin '> 01</h5></div>
                 <div className='flex flex-col gap-2 md:gap-4'>
                    <span className='font-bellefair text-xl lg:text-4xl font-thin'>monalisa redefined in style.</span>
                    <span className='font-bellefair'>start on : 08.00 gts . monday</span>
                    <article className='w-[280px] md:w-[550px]  text-sm  md:text-lg font-satoshi'>
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
        <SwiperSlide className='relative '>
            <div>
              <LazyLoad>
                 <img src={homeslider} alt="" width={500} height={500}  loading='lazy' className='min-h-[300px] w-full'/>
              </LazyLoad>
            </div>
            <div className='absolute left-0 bottom-4 md:bottom-10 flex flex-col gap-4 lg:flex-row justify-between  items-end text-white px-4 md:px-10 py-1 w-full'>
               <main className='flex gap-4 items-center'>
                 <div> <h5 className='font-bellefair text-2xl md:text-7xl font-thin '> 01</h5></div>
                 <div className='flex flex-col gap-2 md:gap-4'>
                    <span className='font-bellefair text-xl lg:text-4xl font-thin'>monalisa redefined in style.</span>
                    <span className='font-bellefair'>start on : 08.00 gts . monday</span>
                    <article className='w-[280px] md:w-[550px]  text-sm  md:text-lg font-satoshi'>
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
      <div className='absolute w-full left-0 -bottom-8 py-8 z-20 flex items-center' >
        <div className='flex-1'>
         <div className="swiper-pagination">
        </div>
           
        </div>   
        <div className='flex items-center gap-4 px-10 relative'>
          <div className='bg-end ring-2  ring-opacity-55 ring-white relative flex  items-center p-8 rounded-full shadow-lg shadow-white'>
             <div className='swiper-button-prev'>
           </div>
          </div>
          <div className='bg-end  ring-2 ring-opacity-55  ring-white flex relative  justify-center p-8  items-center rounded-full shadow-lg shadow-white'>
            <div className='swiper-button-next'></div>
          </div>
        </div>               
      </div>
     
    </div>
  )
}

export default Swipers