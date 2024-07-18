import { FaAngleDown } from "react-icons/fa"
import Selectdropmenu from "../selectdropmenu/selectdropmenu"
import { useState } from "react"
import Cardlayout from "../layout/cardlayout"
import { products } from "../utlis/variable"
import Filter from "../components/filter"

 
const Marketplace = () => {
   const [sort,setsort]=useState('')
  return (
    <div>
        <section>
           <Filter/>
          <div  className="flex flex-1">
            <div className="w-[300px] px-6 py-1">
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
                <FaAngleDown/>
             </Selectdropmenu>
            </div>
          </div>
        </section>
        <section>
          <Cardlayout content={products}/>
        </section>
    </div>
  )
}

export default Marketplace