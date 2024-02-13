import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvaider = ({children}) => {

const [count, setCount] = useState(0)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
