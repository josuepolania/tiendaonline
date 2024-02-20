
import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import "./styles.css"


const CheckoutSideMenu = () => {
    const Context = useContext(ShoppingCartContext)


    return (
        <aside 
            className={`${Context.isCheckoutSideMenuOpen ? "flex" : "hidden"} Checkout-Side-Menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={() => Context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu