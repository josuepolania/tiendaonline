import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvaider = ({children}) => {
     //shopping cart - increment quantify
    const [count, setCount] = useState(0)


    //product Detail - open/clese
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //checkoutsidd-menu - 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    //product Detail - show product
 const [productToShow, setProductToShow ] = useState({}) 


  // shopping cart - agregar productos a cart

 const [cartProduct, setcartProduct ] = useState([])  
 
 // shopping cart - order
 const [order, setOrder ] = useState([])  

     return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProduct,
            setcartProduct,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
