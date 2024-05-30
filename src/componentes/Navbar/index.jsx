import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import ShoppingCart from "../ShoppingCarts"


const Navbar = () => {
    const Context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

    // sign out
    const signOut = localStorage.getItem('signOut')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = Context.signOut || parsedSignOut

    //account

    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    // has account

    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = Context.account ? Object.keys(Context.account).length === 0 : true
    const hasUseAnAccount = !noAccountInLocalStorage || !noAccountInLocalState


    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('signOut', stringifiedSignOut)
        Context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUseAnAccount && !isUserSignOut) {
            return (
                <>
                    <li className="text-black/50">
                        {parsedAccount?.email}
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
                        <NavLink
                            to="/Sign-in"
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            onClick={() => handleSignOut()}>
                            Sign out
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <ShoppingCartIcon className="h-6 w-6 text-black -500"></ShoppingCartIcon>
                        <div>{Context.cartProduct.length}</div>
                    </li>

                </>
            )
        } else {

            return (
                <li>
                    <NavLink
                        to="/Sign-in"
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}>
                        Sign in
                    </NavLink>
                </li>
            )
        }
    }

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
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
                {renderView()}
                <li className=" flex items-center">
                    <ShoppingCart />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar