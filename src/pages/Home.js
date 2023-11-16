import { useState } from "react";

import Nav from "../Navigation/Nav";
import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";

import Card from "../components/Card";
// database
import products from "../db/data";
import Pagination from "../Pagination/Pagination";

function Home() {
  // ----->Pagination----->

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleChangePage = (term) => {
    setCurrentPage(term);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);




// --------->Wishlist
const[wish,setWish]=useState([])


  //--------- input filter
  const [query, setQuery] = useState("");

  const [sort, setSort] = useState(0);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filtereditems = products.filter( (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // ------->Radio Filter---

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------>Button Filter---
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ---->handle Sorting--->
  const handleSort = (term) => {
    setSort(term);
  };

  // whole filtering

  // ...

  function filteredData(products, selected, query, sort) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filtereditems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.newPrice === parseInt(selected) ||
          product.title === selected
      );
    }

    if (sort === 1) {
      console.log("sort");
      filteredProducts = filteredProducts.sort(
        (a, b) => a.newPrice - b.newPrice
      );
    } else if (sort === -1) {
      console.log("sort");
      filteredProducts = filteredProducts.sort(
        (a, b) => b.newPrice - a.newPrice
      );
    }

    const data = filteredProducts.slice(firstIndex, lastIndex);

    const addToWishllist=(Id)=>{
      
      if(wish.find((item)=>item===Id)){
        console.log("Item Already exist");
      }else{
      setWish((prevWish) => [...prevWish, Id])
     
      }

    }


    return data.map(({ img, title, star, reviews, newPrice, prevPrice ,Id}) => (
      <Card
        key={Math.random}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={parseInt(newPrice)}
        prevPrice={prevPrice}
        Id={Id}
        onEdit={addToWishllist}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query, sort);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav
        query={query}
        handleInputChange={handleInputChange}
        onSubmit={handleSort}
        wish={wish}
      />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      <Pagination
        numbers={numbers}
        currentPage={currentPage}
        onEdit={handleChangePage}
        npage={npage}
      />
    </>
  );
}

export default Home;
