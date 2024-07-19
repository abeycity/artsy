import { ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/header/nav';
import Footer from '../components/footer/footer';
import Homepage from '../components/homepage';
import Marketplace from '../pages/marketplace';
import Auctions from '../pages/auctions';
import Drops from '../pages/drops';
import Cart from '../pages/cart';
import Productdetail from '../pages/productdetail';
import Breadcrumb from '../components/Breadcrumbs/breadcrumb';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

const LayoutWithRoutes = () => {
  return (
    <Layout>
         <Breadcrumb/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="marketplace/:id" element={<Productdetail />} />
        <Route path="auctions" element={<Auctions />} />
        <Route path="drops" element={<Drops />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default LayoutWithRoutes;
