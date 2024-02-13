
import { useState, useEffect } from "react"
import Layout from "../../componentes/Layout"
import Card from "../../componentes/Card"

function Home() {
    const [items, setItems] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(Response => Response.json())
      .then(data => {
        data.shift()
        setItems(data)
      })
  }, [])

    return (
        <Layout>
          Home
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
          </div>
        
        </Layout>
    )
  }
  
  export default Home