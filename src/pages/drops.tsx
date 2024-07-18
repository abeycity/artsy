import Button from "../components/button/button"
import { drops } from "../utlis/variable"

const Drops = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center gap-6">
              <h3 className="font-satoshi text-[#000000] font-semibold text-2xl">Upcoming drops</h3>
              <p className="font-satoshi text-gray font-normal text-xl">Turn on notification so that no drops will miss you. </p>
              <Button classname="font-semibold font-satoshi border px-16 py-2 text-xl">Notify me </Button>
          </div>
          <section className="flex flex-col gap-10">
              {Array.isArray(drops) &&
              drops.map(({img,event,name,desc,creator,notify})=>
                <div key={name} className="flex  gap-8">
                  <div className="relative">
                    <img src={img} alt={name}  />
                    <figcaption className="absolute bottom-2 w-full  px-16 py-3">
                      <div className="flex flex-col gap-4 bg-[#F5F4F43D] backdrop-blur-2  bg-opacity-70  p-6 rounded-xl ring ring-[#f2f2f2] ring-opacity-50 ">
                          <p className="ont-satoshi  text-xl text-white z-[9999]">Time remaining</p>
                          <div className="flex justify-between items-end text-white font-satoshi">
                            <p className="font-medium text-2xl  z-[9999] ">06  hrs : 45 min : 22 s</p>
                          { event == "upcoming"  ? <Button classname="py-1 px-10 rounded-xl bg-middle">Join</Button> : event === "live now" ? <Button classname="py-1 px-10 rounded-xl bg-middle">Join</Button>:<Button classname="py-1 px-10 rounded-xl bg-[#B8BABC]">view</Button>}
                          </div>                     
                      </div>
                    </figcaption>
                  </div>
                  <main className="flex  items-start flex-col gap-10">
                      <div className="text-white uppercase  font-normal">
                        { event === "upcoming" ? <Button classname="py-2 px-12 rounded-xl bg-middle ">{event}</Button> : event === "live now" ? <Button classname="py-2 px-12 rounded-xl bg-[#3EA03B]">{event}</Button> : <Button classname="py-2 px-12 rounded-xl bg-[#92979C] ">{event}</Button>}
                      </div>
                      <div className="font-satoshi flex  items-start flex-col gap-8">
                      <p className="font-medium text-xl">November 21 at 11am WAT</p>
                      <h3 className="font-semibold text-4xl">{name}</h3>
                      <p className="w-[500px] text-gray text-xl font-normal leading-relaxed">{desc}</p>
                      <p className="font-semibold text-xl ">Creator: <span  className="text-[#006CA2] font-medium">{creator}</span></p>
                      <Button classname="border-b-middle border-b text-[#006CA2] text-lg" >{notify}</Button>

                      </div>
                  </main>
                </div>
              )}
          </section>
      </div>

    </div>
  )
}

export default Drops