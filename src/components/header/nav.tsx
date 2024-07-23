import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { NavLink,} from "react-router-dom";
import { FaBars } from "react-icons/fa";



const Nav = ({NAV,}:{NAV:{Path:string,label:string}[]}) => {
  
  
  return (
      <header className="text-global  p-6 relative flex  justify-center w-full lg:px-16 ">
        <section className="flex items-center justify-between max-w-screen-2xl w-full ">
          <div className="lg:hidden">
            <FaBars/>
          </div>
          <h3 className="font-bold font-logo text-2xl">ARTSY.</h3>
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
              <div>
                <HiOutlineShoppingCart fontSize={21} />
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