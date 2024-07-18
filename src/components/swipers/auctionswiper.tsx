import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { auc1, auc2, auc3 } from '../../assets';
const Auctionswiper = () => {
  return (
    <Swiper
    // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <div className='relative'>
                <img src={auc1} alt=""  width={500}/>
                <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                 <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img src={auc2} alt=""  width={500} />
                <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                 <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative h-[330px] overflow-hidden'>
                <img src={auc3} alt="" width={500}/>
                <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                 <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative h-[330px] overflow-hidden'>
                <img src={auc3} alt="" width={500}/>
                <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                 <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img src={auc1} alt=""  width={500}/>
                <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                 <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                </div>
            </div>
        </SwiperSlide>
        
    
    </Swiper>
  )
}

export default Auctionswiper