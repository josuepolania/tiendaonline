
import { useContext } from "react"
import Layout from "../../componentes/Layout"
import Card from "../../componentes/Card"
import {  getData } from "../../dataset"
import ProductDetail from "../../componentes/ProductDetail"
import { ShoppingCartContext } from "../../Context"



function Home() {
  const Context = useContext(ShoppingCartContext)

  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products")
  //     .then(Response => Response.json())
  //     .then(data => {
  //       data.shift()
  //       setItems(data)
  //     })
  // }, [])

    return (
        <Layout>
          <div className="flex items-center justify-center relative w-80 mb-4">
            <h1 className="font-medium text-xl">Exclusive Products</h1>
          </div>
            <input 
            type="text" 
            placeholder="Search a Products"
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
            onChange={(event) => Context.setSearchByTitle(event.target.value)}/>
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            Context.items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
          </div>
          <ProductDetail />
        </Layout>
    )
  }
  
  export default Home