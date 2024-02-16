
import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import "./styles.css"


const ProductDetail = () => {
    const Context = useContext(ShoppingCartContext)


    return (
        <aside 
            className={`${Context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 text-black cursor-pointer"
                    onClick={() => Context.closeProductDetail()}></XMarkIcon>
                </div>
            </div>
            <figure className="px-6">
                <img 
                className="w-full h-full rounded-lg" 
                src={Context.productToShow.images} 
                alt={Context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl">${Context.productToShow.price}</span>
                <span className="font-medium text-md">${Context.productToShow.title}</span>
                <span className="font-light text-sm">${Context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail