import React, { useContext } from "react";
import Layout from "../../componentes/Layout";
import Card from "../../componentes/Card";
import { getData } from "../../dataset";
import ProductDetail from "../../componentes/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const Context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (Context.searchByTitle?.length > 0) {
      if (Context.filteredItems?.length > 0) {
        return (
          Context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
         ))
        )
      } else {
          return(
            <div>The search yielded no results</div>
          )
      }
    } else {
      return Context.items?.map((item) => 
        <Card key={item.id} data={item} />
      )
    }
  }


  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a Products"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => Context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
