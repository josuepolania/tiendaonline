import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"



const Navbar = () => {
    const Context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"
    
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/"
                    onClick={() => Context.setSearchByCategory()}
                    >
                    Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/"
                    onClick={() => Context.setSearchByCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined 
                    }>
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/Clothes"
                    onClick={() => Context.setSearchByCategory("clothes")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined 
                    }>
                    Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Electronics"
                    onClick={() => Context.setSearchByCategory("electronics")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined 
                    }>
                    Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Furnitures"
                    onClick={() => Context.setSearchByCategory("furnitures")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined 
                    }>
                    Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Toys"
                    onClick={() => Context.setSearchByCategory("toys")}
                     className={({ isActive }) =>
                     isActive ? activeStyle : undefined 
                     }>
                    Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Othes"
                    onClick={() => Context.setSearchByCategory("othes")}
                     className={({ isActive }) =>
                     isActive ? activeStyle : undefined 
                     }>
                    Othes
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3 ">
                <li className="text-black/60">
                    jopa@/.com
                </li>
                <li>
                    <NavLink to="/my-orders"
                     className={({ isActive }) =>
                     isActive ? activeStyle : undefined 
                     }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account"
                     className={({ isActive }) =>
                     isActive ? activeStyle : undefined 
                     }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Sign-in"
                     className={({ isActive }) =>
                     isActive ? activeStyle : undefined 
                     }>
                        Sign-In
                    </NavLink>
                </li>
                <li className=" flex items-center justify-center">
                    <ShoppingCartIcon className="h-6 w-6 text-black -500"></ShoppingCartIcon>
                    <div>
                    {Context.cartProduct.length}
                    </div> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar