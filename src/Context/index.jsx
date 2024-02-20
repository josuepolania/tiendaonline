import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvaider = ({children}) => {
     //shopping cart - increment quantify
    const [count, setCount] = useState(0)


    //product Detail - open/clese
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)


    //product Detail - show product
 const [productToShow, setProductToShow ] = useState({}) 


  // shopping cart - agregar productos a cart

 const [cartProduct, setcartProduct ] = useState([])     

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
            setcartProduct
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
