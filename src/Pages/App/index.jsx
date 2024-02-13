
import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingCartProvaider  } from "../../Contex"
import Home from "../Home/"
import MyAccount from "../MyAccount/"
import MyOrder from "../MyOrder/"
import MyOrders from "../MyOrders/"
import NotFound from "../NotFound/"
import Signin from "../Signin/"
import Navbar from "../../componentes/Navbar"
import "./App.css"



const AppRoutes = () => {
  let routes = useRoutes ([
    {path: "/home", element: <Home /> },
    {path: "/my-orders", element: <MyOrders /> },
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
      </BrowserRouter>
    </ShoppingCartProvaider>
  )
}

export default App
