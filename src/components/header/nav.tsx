import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
      <header className="text-global  p-6 relative flex  justify-center w-full ">
        <section className="flex items-center justify-between max-w-screen-2xl w-full">
          <div className=" md:hidden">
            <FaBars/>
          </div>
          <h3 className="font-bold font-logo text-2xl">ARTSY.</h3>
            <div className="max-md:hidden">
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
              <div className="max-md:hidden">
                <CiBellOn fontSize={21} />
              </div>
            </div>

        </section>
      </header>
  )
}

export default Nav