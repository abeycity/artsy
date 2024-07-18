import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <header className="flex items-center justify-between text-global mx-10  p-6">
         <h3 className="font-bold font-logo text-2xl">ARTSY.</h3>
          <div>
           <ul className="flex items-center gap-6 text-global font-satoshi text-xl font-normal">
            <li>
              <Link to="/">Home</Link>
              </li>
            <li>
              <Link to='/marketplace'> MarketPlace</Link>
            </li>
            <li>
              <Link to="/Auctions">Auctions</Link></li>
            <li>
              <Link to="/drops">Drops</Link>
            </li>
           </ul>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <IoSearch fontSize={21}/>
            </div>
            <div>
              <HiOutlineShoppingCart fontSize={21} />
            </div>
            <div>
              <CiBellOn fontSize={21} />
            </div>
          </div>
      </header>
  )
}

export default Nav