import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Homepage from './components/homepage'
import Marketplace from "./pages/marketplace";
import Auctions from "./pages/auctions";
import Drops from "./pages/drops"
import Cart from './pages/cart'

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
          path: "auctions",
          element: <Auctions/>,
        },
        {
          path: "drops",
          element: <Drops/>,
        },
        {
          path: "cart",
          element:<Cart/>
        },
      ]);
      
return(
    <RouterProvider router={router} />
  )
}

export default Route