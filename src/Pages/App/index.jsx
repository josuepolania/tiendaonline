
import { useContext } from "react"
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom"
import { ShoppingCartProvaider, inicializarLocalStorage, ShoppingCartContext } from "../../Context"
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
  
  const context = useContext(ShoppingCartContext)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // sign out
  const signOut = localStorage.getItem('signOut')
  const parsedSignOut = JSON.parse(signOut)

  // has account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUseAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut


  let routes = useRoutes([
    { path: '/', element: hasUseAnAccount && !isUserSignOut ? <Home/> : <Navigate to="/sign-in" />},
    { path: '/clothes', element: hasUseAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to="/sign-in" />},
    { path: '/electronics', element: hasUseAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to="/sign-in" />},
    { path: '/furnitures', element: hasUseAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to="/sign-in" />},
    { path: '/toys', element: hasUseAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to="/sign-in" />},
    { path: '/othes', element: hasUseAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to="/sign-in" />},
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <Signin /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}
const App = () => {

  inicializarLocalStorage()
  return (
    <ShoppingCartProvaider>
      <BrowserRouter>
        <Navbar /> {/* Mover la barra de navegación aquí */}
        <CheckoutSideMenu /> {/* Mover el menú lateral de pago aquí */}
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvaider>
  )
}


export default App
