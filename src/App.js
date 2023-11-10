import { useState } from 'react';
import './index.css'
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from './Sidebar/Sidebar';


// database
import products from './db/data'
import Card from './components/Card';
function App() {
  const[selectedCategory,setSelectedCategory]=useState(null)


  //--------- input filter
  const[query,setQuery]=useState("")

  const handleInputChange=event=>{
    setQuery(event.target.value)
  }

  const filteredtems=products.filter((product)=>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1
  
  )

  // ------->Radio Filter---

  const handleChange=(event)=>{
    setSelectedCategory(event.target.value)


  }

  // ------>Button Filter---
  const handleClick=(event)=>{

    setSelectedCategory(event.target.value)
  }

  // whole filtering

  function filteredData(products,selected,query){
    let filteredProducts=products

    if(query){
      filteredProducts=filteredtems
    }

    // Selected Filter
    if(selected){
      filteredProducts=filteredProducts.filter((product=>

      product.category===selected||product.color===selected||
      product.company===selected||
      product.newPrice===selected||
      product.title===selected))
    }
    return filteredProducts.map((product)=>
    <Card key={Math.random()}
    img={product.img}
    title={product.title}
    star={product.star}
    reviews={product.reviews}
    newPrice={product.newPrice}



    />
    )

  }



  return (
    <>
    <Sidebar/>
  <Nav/>
  <Recommended/>
  <Products/>
    </>
  );
}

export default App;
