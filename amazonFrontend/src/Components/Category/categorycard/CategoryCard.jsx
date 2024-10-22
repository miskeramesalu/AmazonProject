import React from "react";
import classes from "./categorycard.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  //From this category component I was learned
  //how to utilize props for dynamic rendering, how to implement client-side navigation.
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <h2>{data.title}</h2>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;