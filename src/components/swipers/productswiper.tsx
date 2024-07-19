import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { eth, homeimg2, love } from '../../assets';
const Productswiper = () => {
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
        breakpoints={{

            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // 1024: {
            //   slidesPerView: 5,
            //   spaceBetween: 50,
            // },
          }}
    
    >
     
        <SwiperSlide>
            <div className='border p-4'>
                <div className='flex justify-end p-4'>
                    <img src={love} alt='' width={30}/>
                </div>
                <div className='overflow-hidden h-[300px]'>
                    <img src={homeimg2} alt="" width={500} height={200} />
                </div>
                <div className='flex justify-between items-center p-2 '>
                    <p className='text-xl font-medium'>Sassy</p>
                    <div className='flex items-center'>
                        <img src={eth} alt='' width={30}/>
                        <p className='text-xl font-medium'>3.20</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className='border p-4'>
                    <div className='flex justify-end p-4'>
                        <img src={love} alt='' width={30}/>
                    </div>
                    <div className='overflow-hidden h-[300px]'>
                        <img src={homeimg2} alt="" width={500} height={200} />
                    </div>
                    <div className='flex justify-between items-center p-2 '>
                        <p className='text-xl font-medium'>Sassy</p>
                        <div className='flex items-center'>
                            <img src={eth} alt='' width={30}/>
                            <p className='text-xl font-medium'>3.20</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div className='border p-4'>
                        <div className='flex justify-end p-4'>
                            <img src={love} alt='' width={30}/>
                        </div>
                        <div className='overflow-hidden h-[300px]'>
                            <img src={homeimg2} alt="" width={500} height={200} />
                        </div>
                        <div className='flex justify-between items-center p-2 '>
                            <p className='text-xl font-medium'>Sassy</p>
                            <div className='flex items-center'>
                                <img src={eth} alt='' width={30}/>
                                <p className='text-xl font-medium'>3.20</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className='border p-4'>
                            <div className='flex justify-end p-4'>
                                <img src={love} alt='' width={30}/>
                            </div>
                            <div className='overflow-hidden h-[300px]'>
                                <img src={homeimg2} alt="" width={500} height={200} />
                            </div>
                            <div className='flex justify-between items-center p-2 '>
                                <p className='text-xl font-medium'>Sassy</p>
                                <div className='flex items-center'>
                                    <img src={eth} alt='' width={30}/>
                                    <p className='text-xl font-medium'>3.20</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className='border p-4'>
                                <div className='flex justify-end p-4'>
                                    <img src={love} alt='' width={30}/>
                                </div>
                                <div className='overflow-hidden h-[300px]'>
                                    <img src={homeimg2} alt="" width={500} height={200} />
                                </div>
                                <div className='flex justify-between items-center p-2 '>
                                    <p className='text-xl font-medium'>Sassy</p>
                                    <div className='flex items-center'>
                                        <img src={eth} alt='' width={30}/>
                                        <p className='text-xl font-medium'>3.20</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

    </Swiper>
  )
}

export default Productswiper