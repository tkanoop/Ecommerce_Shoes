import { useState } from 'react';
import './index.css'
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from './Sidebar/Sidebar';

import Card from './components/Card';
// database
import products from './db/data'

function App() {
  const[selectedCategory,setSelectedCategory]=useState(null)


  //--------- input filter
  const[query,setQuery]=useState("")

  const handleInputChange=event=>{
    setQuery(event.target.value)
  }

  const filtereditems=products.filter((product)=>
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
      filteredProducts=filtereditems
    }

    // Selected Filter
    if(selected){
      filteredProducts=filteredProducts.filter((product=>

      product.category===selected||product.color===selected||
      product.company===selected||
      product.newPrice===selected||
      product.title===selected))
    }

    console.log(products);
    return filteredProducts.map(
      ({img,title,star,reviews,newPrice,prevPrice})=>(
    <Card 
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice}
    />
    
    )
    )

  }
  const result=filteredData(products,selectedCategory,query)



  return (
    <>
    <Sidebar handleChange={handleChange}/>
  <Nav query={query} handleInputChange={handleInputChange}/>
  <Recommended handleClick={handleClick}/>
  <Products result={result}/>
  
  
    </>
  );
}

export default App;
