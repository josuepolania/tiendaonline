
import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingCartProvaider  } from "../../Context"
import Home from "../Home/"
import MyAccount from "../MyAccount/"
import MyOrder from "../MyOrder/"
import MyOrders from "../MyOrders/"
import NotFound from "../NotFound/"
import Signin from "../Signin/"
import Navbar from "../../componentes/Navbar"
import CheckoutSideMenu from "../../componentes/CheckoutSideMenu"
import "./App.css"



const AppRoutes = () => {
  let routes = useRoutes ([
    {path: "/home", element: <Home /> },
    {path: "/my-orders", element: <MyOrders /> },
    {path: "/my-orders/last", element: <MyOrder /> },
    {path: "/my-orders/:id", element: <MyOrder /> },
    {path: "/my-account", element: <MyAccount /> },
    {path: "/my-order", element: <MyOrder /> },
    {path: "/*", element: <NotFound /> },
    {path: "/Sign-in", element: <Signin /> },
  ])

  return routes
}


const App = () => {
  return (
    <ShoppingCartProvaider>
        <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvaider>
  )
}

export default App
