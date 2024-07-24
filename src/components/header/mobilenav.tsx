
import { Link, NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';


const MobileNav = ({handlenavbar,NAV}:{handlenavbar:()=>void,NAV:{Path:string,label:string}[]}) => {
    
      
  return (
    <div className='w-full text-[#000] p-6  flex flex-col gap-6' onClick={handlenavbar}>
       <div className='flex justify-between items-center w-full'> 
            <Link to={"/"}>
                <h3 className="font-bold font-logo text-3xl cursor-pointer">ARTSY.</h3>
            </Link>
            <div>
            <FaTimes fontSize={31} onClick={handlenavbar}  />
            </div>
      </div>
      <div className="">
              <ul className="flex flex-col gap-4 text-global font-satoshi text-xl font-semibold">
               { NAV.map(({Path,label},i)=>
                  <li key={i}>
                    <NavLink to={Path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "font-bold underline underline-offset-8" : ""}>{label}</NavLink>
                  </li>
              
                )}
              </ul>
            </div>
    </div>
  )
}

export default MobileNav