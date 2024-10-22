import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import classes from "./productcard.module.css";
import Rating from "@mui/material/Rating/Rating";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import {Type} from "../../../Utility/action.type"
import {DataContext} from "../../DataProvider/DataProvider"

const ProductCard = ({ product, flex, renderDescription, renderAdd }) => {
  const { image, title, id, rating, price, description } = product;
  const [{state}, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDescription && (
          <div style={{ maxWidth: "750px" }}>{description}</div>
        )}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <CurrencyFormat amount={price} />
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;