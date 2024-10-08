import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { Link, NavLink,} from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {  useState } from "react";
import MobileNav from "./mobilenav";


import {useGlobalContext } from "../context/shopcontext";



const Nav = ({NAV}:{NAV:{Path:string,label:string}[]}) => {
  const [navbar,setNavbar]=useState(false)
  const {getTotalCartItems}=useGlobalContext()
  const  handlenavbar=()=>{
    setNavbar((prev)=>!prev)
  
  }
  
  return (
      <header className="text-global  p-6 relative flex  justify-center w-full lg:px-16 ">
        <section className="flex items-center justify-between max-w-screen-2xl w-full ">
          <div className="lg:hidden" onClick={handlenavbar}>
            <FaBars/> 
          </div>
          {
            navbar && <div className='absolute  bg-[#f6f6f6] w-full min-h-screen top-0 left-0 z-[999]'>
               <MobileNav handlenavbar={handlenavbar} NAV={NAV}/>
            </div>
          }
          <Link to={"/"}>
            <h3 className="font-bold font-logo text-2xl cursor-pointer">ARTSY.</h3>
          </Link>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6 text-global font-satoshi text-xl font-normal">
               { NAV.map(({Path,label},i)=>
                  <li key={i}>
                    <NavLink to={Path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "font-bold underline underline-offset-8" : ""}>{label}</NavLink>
                  </li>
              
                )}
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <IoSearch fontSize={21}/>
              </div>
              <div className="relative">
                <Link to={"/marketplace/shoppingcart"}>
                   <HiOutlineShoppingCart fontSize={21}  />
                </Link>
                <div className="absolute -top-2 left-6">
                  {
                      getTotalCartItems() > 0  &&
                      <div>        
                          <div>
                            <p className="text-sm font-bold"> {getTotalCartItems()}</p>
                          </div>
                     </div>
                  }
                </div>
                 
              </div>
              <div className="max-md:hidden">
                <CiBellOn fontSize={21} />
              </div>
            </div>

        </section>
      </header>
  )
}

export default Nav