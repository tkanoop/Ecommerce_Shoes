import React from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import data from '../db/data';
import './SingleProductPage.css'

const SingleProductPage = () => {
  const { Id } = useParams();

  const singleProductDetails = () => {
    const filteredData = data.filter((product) => product.Id === parseInt(Id));

    return (
      <div className="product-container">
        <img src={filteredData[0].img} alt={`Product: ${filteredData[0].title}`} className="product-img" />
      
        <div className="product-details">
          <h3 className="product-title">{filteredData[0].title}</h3>
          <section className="product-reviews">
            {Array.from({ length: filteredData[0].star }, (_, index) => (
              <AiFillStar key={index} className="star-icon" />
            ))}
            <span className="reviews-count">{filteredData[0].reviews}</span>
          </section>
          <section className="product-price">
            <div className="price">
              <del>{filteredData[0].prevPrice}</del>${filteredData[0].newPrice}
            </div>
            <div className="heart-icon">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div>
      {singleProductDetails()}
    </div>
  );
};

export default SingleProductPage;
