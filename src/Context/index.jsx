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

   //Get product by Categoty
 const [searchByCategory, setSearchByCategory] = useState(null)
 console.log("searchByCategory", searchByCategory)

 useEffect(() => {
    const data = getData();
    setItems(data)
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    console.log("items: ", items)
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }
 
  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setfilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setfilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setfilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setfilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])


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
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
