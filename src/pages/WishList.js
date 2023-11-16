import React from 'react'
import { useParams } from 'react-router-dom'
import data from'../db/data'
import Card from '../components/Card'
function WishList() {
    const {wish} =useParams()
    const wishIds=wish.split(',').map(Number);
    console.log(wishIds);
    const ProductDetails = () => {
        const filteredProducts = data.filter((product) => wishIds.includes(product.Id));
        console.log(filteredProducts);
        return  filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice ,Id}) => (
                <Card
                  key={Math.random}
                  img={img}
                  title={title}
                  star={star}
                  reviews={reviews}
                  newPrice={parseInt(newPrice)}
                  prevPrice={prevPrice}
                
                />
              ));
    
    }


  return (
    <div>
      <h2>WishList</h2>
      <div>{ProductDetails()}</div>
      
    </div>
  );
}

export default WishList

