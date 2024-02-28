
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import Layout from "../../componentes/Layout"
import OrderCard from "../../componentes/OrderCard"

function MyOrder() {
  const Context = useContext(ShoppingCartContext)
  const currenPath = window.location.pathname
  let index = currenPath.substring(currenPath.lastIndexOf("/") + 1)
  if (index === "last") index = Context.order?.length - 1

    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="h-6 w-6 text-black cursor-pointer" /> 
        </Link>
        <h1>My Order</h1>
      </div>
        <div className="flex flex-col w-80" >
            {
                Context.order?.[index]?.product.map(x => (
                    <OrderCard 
                        key={x.id}
                        id={x.id}
                        title={x.title}
                        imageUrl={x.images}
                        price={x.price}
                    />
                ))
            }
            </div>
      </Layout>
    )
  }
  
  export default MyOrder