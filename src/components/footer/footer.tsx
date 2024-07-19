import { MdMailOutline } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex justify-center">
      <section className="max-w-screen-2xl w-full">
        <div className="flex md:flex-row flex-col justify-around gap-6  p-4">
          <h3 className="text-5xl font-logo font-semibold uppercase">Artsy.</h3>
          <div className="">
            <ul className="grid grid-cols-2 font-satoshi font-normal text-xl  md:gap-x-8 gap-y-4">
              <li>
                <Link to="/">Home</Link></li>
              <li>
                <Link to="/marketplace">Marketplace</Link>
              </li>
              <li>
                <Link to="/auctions">Auctions </Link>
              </li>
              <li>
                <Link to="/drops">Drops</Link></li>
              <li>
                <Link to="/">Blogs </Link>
              </li>
              <li>
                <Link to='/wallet'>Wallets</Link></li>
              <li>
                <Link to="/">Rates</Link>
              </li>
              <li>
                <Link to="/">High bids</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2">
                <MdMailOutline  fontSize={41}/>
              <p className="font-satoshi font-normal text-xl ">artsystudios@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
                <RiMapPin2Line fontSize={41} />
                <p className="font-satoshi font-normal text-xl ">Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <p className="font-clash text-sm font-medium text-gray md:my-16 text-center">
          Artsystudios &copy; 2022. All Rights Reserved.
        </p>

      </section>

    </div>
  )
}

export default Footer