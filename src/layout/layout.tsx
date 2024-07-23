import { ReactNode } from 'react'
import { Routes, Route,} from 'react-router-dom';
import Nav from '../components/header/nav';
import Footer from '../components/footer/footer';
import Homepage from '../components/homepage';
import Marketplace from '../pages/marketplace';
import Auctions from '../pages/auctions';
import Drops from '../pages/drops';
import Productdetail from '../pages/productdetail';
import Shoppingcart from '../pages/steppers/shoppingcart';
import Paymentdetails from '../pages/steppers/paymentdetails';
import Shoppingdetails from '../pages/steppers/shoppingdetails';
import Marketplacelayout from '../pages/marketplacelayout';
import Stepper from '../pages/steps';
import Delivery from '../pages/delivery';

const Layout = ({ children }: { children: ReactNode }) => {
    const NAV=[
      {
        Path:"/",
        label:"Home"
      },
      {
        Path:"/marketplace",
        label:"Marketplace"
      },
      {
        Path:"/Auctions",
        label:"Auctions"
      },
      {
        Path:"/drops",
        label:"Drops"
      }
    ]

  return (
    <div>
      <Nav NAV={NAV} />
      {children}
      <Footer />
    </div>
  );
};

const LayoutWithRoutes = () => {
   
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route  path="marketplace" element={<Marketplacelayout/>}>
          <Route  index element={<Marketplace />} />
          <Route path=":id" element={<Productdetail />} />
           <Route path='shoppingcart'   element={<Stepper/>}>
             <Route  index element={<Shoppingcart/>} />
              <Route path='paymentdetails' element={<Paymentdetails/>} />
              <Route path='shippingdetails' element={<Shoppingdetails/>} />
            </Route>
          
        </Route>
        <Route path="auctions" element={<Auctions />} />
        <Route path="drops" element={<Drops />} />
        <Route path="/delivery" element={<Delivery/>} />
      </Routes>
    </Layout>
  );
};

export default LayoutWithRoutes;
