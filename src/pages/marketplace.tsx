
import Selectdropmenu from "../selectdropmenu/selectdropmenu"
import { useState } from "react"
import Cardlayout from "../layout/cardlayout"
import { products } from "../utlis/variable"


 
const Marketplace = () => {
   const [sort,setsort]=useState('')
  return (
    <div className="md:mx-16 mx-2 my-10">
        <section>
          <div className="flex justify-center">
            <div  className=" flex items-center shadow-md shadow-[#334155] ring-2 ring-[#F3F3F3] p-3">
              <div className="w-[200px] md:w-[500px] py-1">
                <p>See 1-6  of 15 results</p>
              </div>
              <div>
              <Selectdropmenu
                value={sort}
                grid 
                placeholder="Sort by"
                options={['name',"creator","date"]}
                onChange={(newvalue)=>setsort(newvalue)}            
                >
                
              </Selectdropmenu>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex justify-center">
          <Cardlayout content={products}/>
        </section>
    </div>
  )
}

export default Marketplace