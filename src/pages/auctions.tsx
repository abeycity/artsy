import { love } from "../assets"
import Button from "../components/button/button"
import Auctionswiper from "../components/swipers/auctionswiper"
import { bids } from "../utlis/variable"

const Auctions = () => {
  return (
    <main className="flex justify-center ">
      <div className="max-w-screen-2xl">
          <h6 className="mx-4 md:mx-16 my-8 font-bold font-satoshi">Here&rsquo;s an overview of products actively on auction, explore!</h6>
          <div className="mx-4 md:ml-16">
            <Auctionswiper/>
          </div>
          <section className="m-4 md:m-16 flex flex-col gap-8">
              <h5 className="font-satoshi font-bold text-xl md:text-2xl">Top bids from popular creators</h5>
              <div className="flex md:flex-row flex-col  gap-10 justify-between ">
                  {
                      Array.isArray(bids) && 
                      bids.map(({img,creator,date,highestbid,currentbid,name},i)=>
                          <div key={i} className="flex flex-col gap-6">
                            <div className="shadow-xl shadow-[#F7F7F7] ring-2 ring-[#fff1ff] drop-shadow-lg  bg-white  rounded-xl">
                              <div className="flex justify-end p-4  ">
                                  <div className="border flex justify-center  items-center rounded-full p-4 ">
                                    <img src={love} alt=""/>
                                  </div>
                              </div>
                              <img src={img} alt="" />
                                <h4 className="p-6  font-satoshi font-bold text-2xl">{name}</h4>
                            </div>
                            <div  className="flex items-center gap-4">
                              <p className="font-satoshi font-medium text-xl text-[#616161]">Creator :</p>
                              <p  className="font-satoshi font-bold text-xl">{creator}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="font-satoshi font-medium  text-xl text-[#616161]">Date:</p>
                              <p  className="font-satoshi font-bold text-xl">{date}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="font-satoshi font-medium  text-xl text-[#616161]">Highest bid:</p>
                              <p  className="font-satoshi font-bold text-xl">{highestbid}ETH</p>
                            </div>
                            <div className="flex items-center justify-between bg-[#F6F4F4] p-4">
                              <div className="flex flex-col gap-4">
                                  <p className="font-satoshi font-medium  text-xl text-[#616161]">Current bid</p>
                                  <p  className="font-satoshi font-bold text-xl">{currentbid}ETH</p>
                              </div>
                              <Button classname=" bg-[#272727] px-8 lg:px-16 py-4 text-white border border-dark ">Place bid</Button>
                            </div>
                          </div>
                      )
                  }

              </div>
          </section>
      </div>

    </main>
  )
}

export default Auctions