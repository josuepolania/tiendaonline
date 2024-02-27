
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../componentes/Layout"
import OrderCard from "../../componentes/OrderCard"

function MyOrder() {
  const Context = useContext(ShoppingCartContext)
  console.log(Context.order?.slice(-1))
    return (
      <Layout>
        MyOrder
        <div className="flex flex-col w-80" >
            {
                Context.order?.slice(-1)[0].product.map(x => (
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