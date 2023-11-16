import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FcLike } from "react-icons/fc"
import { Link } from "react-router-dom";

function Card({ Id,img, title, star, reviews, newPrice, prevPrice,onEdit }) {
  const addItem=()=>{
    onEdit(Id)
  }
  return (
    <article className="card">
  
        <img src={img} alt={`Product: ${title}`} className="card-img" />
      
      <div className="card-details">
            <Link to={`/product/${Id}`}>
        <h3 className="card-title">{title}</h3>
        </Link>
        <section className="card-reviews">
          {Array.from({ length: star }, (_, index) => (
            <AiFillStar key={index} />
          ))}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>${newPrice}
          </div>
          <div className="bag"  onClick={addItem}>
            <FcLike className="" />
          </div>
        </section>
      </div>
    </article>
  );
}

export default Card;
