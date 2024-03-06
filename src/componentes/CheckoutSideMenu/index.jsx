
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../componentes/OrderCard"
import { totalPrice } from "../../utils"
import "./styles.css"


const CheckoutSideMenu = () => {
    const Context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProduct = Context.cartProduct.filter(product => product.id != id)
        Context.setcartProduct(filteredProduct)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            data: "01.02.23",
            product: Context.cartProduct,
            totalProduct: Context.cartProduct.length,
            totalPrice: totalPrice(Context.cartProduct)
        }

        Context.setOrder([...Context.order, orderToAdd])
        Context.setcartProduct([])
        Context.setSearchByTitle(null)
    }

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
            <div className="px-6 overflow-y-scroll flex-1" >
            {
                Context.cartProduct.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">total:</span>
                    <span className="font-medium text-2xl">${totalPrice(Context.cartProduct)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>🛍️ Checkout</button>
                 </Link>
            </div>          
        </aside>
    )
}

export default CheckoutSideMenu