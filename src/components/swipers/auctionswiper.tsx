import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { auc1, auc2, auc3 } from '../../assets';
const Auctionswiper = () => {
  return (
    <div className='relative'>
      <Swiper
      // install Swiper modules
          modules={[Pagination]}
          slidesPerView={3}
          pagination={{ clickable: true}}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          autoHeight={true}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{

              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              760: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // 1024: {
              //   slidesPerView: 5,
              //   spaceBetween: 50,
              // },
            }}
      >
          <SwiperSlide>
              <div className='relative'>
                  <img src={auc1} alt=""  width={500} height={500}/>
                  <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-8 md:px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                  <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative'>
                  <img src={auc2} alt=""  width={500}  height={500}/>
                  <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-8 md:px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                  <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative h-[330px]  overflow-hidden rounded-xl'>
                  <img src={auc3} alt="" width={500} height={500} className='rounded-xl object-cover'/>
                  <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-8 md:px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                  <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative h-[330px] overflow-hidden rounded-xl'>
                  <div className='overflow-hidden object-cover'>
                    <img src={auc3} alt="" width={500} height={500} className='rounded-xl'/>
                  </div>
                  <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-8 md:px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                  <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='relative'>
                  <img src={auc1} alt=""  width={500} height={500}/>
                  <div className='absolute bottom-10 left-10  bg-blend-saturation  bg-[#F5F4F43D] px-8 md:px-16 py-3 backdrop-blur-2  bg-opacity-70  '>
                  <figcaption className='font-satoshi font-medium text-2xl text-white z-[9999]  '>6hr : 40mins : 15s</figcaption>
                  </div>
              </div>
          </SwiperSlide>
          
      
      </Swiper>
       <div className='absolute bottom-0 left-0 w-full '>
        <div className='swiper-pagination'></div>
       </div>
    </div>
  )
}

export default Auctionswiper