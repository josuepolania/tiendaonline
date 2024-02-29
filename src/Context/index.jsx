import { createContext, useState, useEffect } from "react"
import {  getData } from "../dataset"

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


 //Get product
 const [items, setItems] = useState(null)
 const [filteredItems, setfilteredItems] = useState(null)


  //Get product by title
 const [searchByTitle, setSearchByTitle] = useState(null)


 useEffect(() => {
    const data = getData();
    setItems(data)
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setfilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])


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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
