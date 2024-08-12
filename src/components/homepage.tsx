
import { BsArrowRightCircle } from "react-icons/bs";
import { creator1, creator2, creator3, creator4, date, homeimg1, homeimg2, homeimg3, homeimg4, topcreator1, topcreator2, topcreator3, } from '../assets'
import { homepro } from '../utlis/variable'
import Swipers from "./swipers/swipers";
import Newsletter from "../newsletter/newsletter";
import {  useState,useEffect} from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Homepage = () => {
    
    const Topcreatorscycle=()=>{
        const images=[topcreator1,topcreator2,topcreator3]
        const [currentImage, setCurrentImage] = useState(images[0]);
      

         const updateImage = () => {
            setCurrentImage(prevImage => {
              const currentIndex = images.indexOf(prevImage);
              const nextIndex = (currentIndex + 1) % images.length;
              return images[nextIndex];
            });
          };

          useEffect(() => {
            const intervalId = setInterval(updateImage, 5000); // Update every 5 second
            // Step 4: Cleanup function to clear the interval
            return () => {
              clearInterval(intervalId);
            };
          }, []); // Empt
        return(
            
            <div>
            <img src={currentImage} alt="" width={700} height={700} />        
        </div>
        )     
     }

  return (
    <main className="flex justify-center w-full   overflow-hidden">
        <div className="max-w-screen-2xl w-full">
            <section className=''>
                <div className='flex flex-col items-center gap-6 text-center lg:mt-20  mb-6'>
                    <article className='text-3xl lg:text-6xl font-medium font-clash  w-[330px] md:w-[1000px] leading-normal'>Photography is poetry & beautiful untold stories</article>
                    <p className=' font-medium font-logo text-lg md:text-2xl leading-normal  w-[350px] md:w-[600px] lg:w-[800px] '>Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.</p>
                </div>
                <div className="w-full">
                    <ul className=' flex justify-between gap-6 w-full  items-center '>
                        <li>
                            <LazyLoad>
                              <img src={homeimg1} alt=''loading='lazy'  width={500} height={500}/>
                            </LazyLoad>
                        </li> 
                        <li>
                        <LazyLoad>
                              <img src={homeimg2} alt='' loading='lazy' width={500} height={500}/>
                            </LazyLoad>
                        </li> 
                        <li>
                           <LazyLoad>
                              <img src={homeimg3} alt='' loading='lazy' width={500} height={500} />
                            </LazyLoad>
                        </li>
                        <li>
                        <LazyLoad>
                              <img src={homeimg4} alt='' loading='lazy'  width={500} height={500} />
                            </LazyLoad>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="my-16 md:mx-20 mx-4">
                <h4 className="text-dark  font-bold  lg:font-medium font-satoshi text-3xl">Featured products</h4>
                <div className=" md:mt-4">
                    {
                    Array.isArray(homepro) &&
                    homepro.map(({img,title,discription,text,id})=>
                    <div key={id} className="flex flex-col  lg:gap-8 gap-4 my-10">
                        <div className="bg-[#333333] w-full h-px md:flex hidden"/>
                            <div className={` flex  items-end lg:flex-row flex-col   gap-8 ${id === '2' ? 'lg:flex-row-reverse' :''}`}>
                                <div className="relative  overflow-hidden w-full">
                                    <img src={img} alt={title}  className="w-full" loading='lazy'  width={700} height={500}/>
                                    <Link to="/marketplace">
                                            <div className="flex justify-center w-full items-center left-0 absolute top-0 gap-6 opacity-0 bg-global  h-full   lg:bg-opacity-0  lg:hover:opacity-70 hover:bg-opacity-100">
                                                <p className="font-satoshi font-normal text-2xl text-[#fff] z-[999] ">View Product</p>
                                                <BsArrowRightCircle  fontSize={31} color="white" className="z-[999] "/>
                                            </div>
                                    </Link>
                                
                                </div>
                                <div className="flex flex-col gap-4 md:gap-10">
                                    <h6 className="font-medium font-clash text-4xl">{title}</h6>
                                    <p className="text-gray font-normal text-xl font-satoshi">{discription}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <ul className="flex items-center">
                                                <li>
                                                    <img src={creator1} alt="creator-img" width={50} height={50}/>
                                                </li>
                                                <li>
                                                    <img src={creator2} alt="creator-img" width={50} height={50}/>
                                                </li>
                                                <li>
                                                    <img src={creator3} alt="creator-img" width={50} height={50}/>
                                                </li>
                                                <li>
                                                    <img src={creator4} alt="creator-img" width={50} height={50}/>
                                                </li>
                                            </ul>
                                            <p className="font-satoshi md:font-normal font-semibold text-gray text-sm md:text-lg ">{text}</p>
                                        </div>
                                        <BsArrowRightCircle  fontSize={41} className="hidden md:flex"/>
                                    </div>
                                </div>

                            </div>
                    </div>
                    )}
                </div>

            </section>
            <section className=" flex flex-col gap-20">
            <main className="bg-gradient-to-r from-start via-middle to-end w-full p-3 md:px-6 xl:px-20 py-8 flex flex-col gap-4">
                <h4 className="text-white font-satoshi text-4xl hidden md:flex ">See Upcoming Auctions and Exhibitions</h4>
                <div className="lg:flex hidden items-center ">
                    <hr className=" text-white w-[600px]  h-px " />
                    <div className="w-2 h-2 rounded-full bg-white "/>
                    <div />
                </div>
                {/* homeswiper */}
                <Swipers/>
            </main>
            <div className="flex flex-col gap-10">
                <hr />
                <Link to={"/marketplace"}>
                   <div className="flex justify-between items-center px-4 md:px-16">
                        <h5 className="font-satoshi text-2xl font-medium">
                            Explore marketplace
                        </h5>
                        <BsArrowRightCircle  fontSize={41}/>
                    </div>
                </Link>
                <hr />
                <Link to={"/auctions"}>  
                   <div className="flex justify-between items-center px-4  md:px-16">
                        <h5 className="font-satoshi text-2xl font-medium">
                            See auctions
                        </h5>
                        <BsArrowRightCircle  fontSize={41}/>
                    </div>
                </Link>
                <hr/>
            </div>
                
            </section>
            <section className="my-16 flex flex-col gap-8 md:gap-16 bg-[#E2E2E2] p-4 md:p-16 relative w-full">
                <div className="flex justify-between">
                    <div>
                        <h3 className="font-clash font-bold text-2xl md:text-4xl uppercase  w-[200px] md:w-[400px] leading-relaxed">top creators of the week</h3>
                    </div>
                    <div className="flex  gap-4 items-start relative">
                        <div className="h-full w-1 bg-[#AEAEAE] rounded-lg"/>
                        <div className="h-1/4 bg-[#292929] w-1 absolute bottom-0 rounded-lg"/>
                        <div>
                            <ul className=" flex flex-col gap-3 font-clash font-normal text-dark text-2xl">
                                <li>Editorials</li>
                                <li>Fashion</li>
                                <li>Lifestyle</li>
                                <li>Blueprint</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <article className="w-[800px] font-clash font-extralight leading-relaxed text-md md:text-xl">
                    &#34;Everything always looked better in black and white. Everything always 
                    as if it were the first time; there&rsquo;s always more people in a black and white
                    photograph. It just makes it seem that there were more people at a gig, 
                    more people at a football match, than with colour photography. Everything
                    looks more exciting.&#34;&#8208; Jack Lowden

                    </article> 
                </div>
                <div className="flex justify-end">
                    <h3 className="font-clash font-extrabold text-4xl uppercase">Circa</h3>
                </div>
                <div className="flex justify-end">
                <img src={date} alt=""   width={500} height={500} className="w-[150px] md:w-[500px]" />
                </div>
                 <div  className="absolute left-4  lg:left-[23rem] -bottom-12">
                    <Topcreatorscycle/>
                 </div>
            </section>
            <div className="my-20">
            <Newsletter/>
            </div>
            
        </div>

    </main>
  )
}

export default Homepage