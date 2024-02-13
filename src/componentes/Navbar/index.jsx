import { NavLink } from "react-router-dom"


const Navbar = () => {
    const activeStyle = "underline underline-offset-4"
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                    Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Home"
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined 
                    }>
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/cloutes"
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined 
                    }>
                    Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Electronics"
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined 
                    }>
                    Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Furnitures"
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined 
                    }>
                    Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ Toys"
                     className={({ isActive }) =>
                     isActive ? activeStyle : undefined 
                     }>
                    Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Others"
                     className={({ isActive }) =>
                     isActive ? activeStyle : undefined 
                     }>
                    Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3 ">
                <li className="text-black/60">
                    jopa@platzi.com
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
                <li>
                    <NavLink>
                        🛒 0
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar