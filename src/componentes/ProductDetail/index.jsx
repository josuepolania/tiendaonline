
import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import "./styles.css"


const ProductDetail = () => {
    const Context = useContext(ShoppingCartContext)
    return (
        <aside 
            className={`${Context.isProductDetailOpen ? "flex" : "hidden"} backdrop:product-detail flex-col fixed right-0 border border-black rounded-r-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black -500"></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail