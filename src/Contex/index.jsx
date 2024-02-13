import { createContext } from "react";

const ShoppingCartContext = createContext()

export const ShoppingCartProvaider = ({children}) => {
    return (
        <ShoppingCartContext.Provider>
            {children}
        </ShoppingCartContext.Provider>
    )
}
