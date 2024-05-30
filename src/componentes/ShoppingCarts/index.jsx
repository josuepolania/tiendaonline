import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ShoppingCart = () => {
    const context = useContext(ShoppingCartContext)

    const openCheckSideMenu = () => {
        context.openCheckout()
        context.closeProductDetail()
    
    }

return (
    <div className="relative flex gap-5 items-center" onClick={() => openCheckSideMenu()}>
        <ShoppingBagIcon className="h-6 w-6 fill-none stroke-black cursor-pointer"/>
        <div className="absolute bottom-3.5 left-3.5 flex justify-center items-end">
            {context.cartProduct.length}
        </div> 
    </div>
)

}

export default ShoppingCart
