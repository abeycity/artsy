import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Homepage from './components/homepage'
import Marketplace from "./pages/marketplace";
import Auctions from "./pages/auctions";
import Drops from "./pages/drops"
import Productdetail from "./pages/productdetail";

const Route =()=>{
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Homepage/>,
        },

        {
          path: "marketplace",
          element: <Marketplace/>,
        }, 
        {
          path: "marketplace/:id",
          element: <Productdetail/>,
        },
        {
          path: "auctions",
          element: <Auctions/>,
        },
        {
          path: "drops",
          element: <Drops/>,
        },
      ]);
      
return(
    <RouterProvider router={router} />
    
  )
}

export default Route