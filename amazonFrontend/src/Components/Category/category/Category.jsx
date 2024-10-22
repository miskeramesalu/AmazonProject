import React from "react";
import classes from "./category.module.css";
import { categoryInfos } from "../asset/CategoryFullInfo";
import CategoryCard from "../categorycard/CategoryCard";

function Category() {
  //The main point that I was learned from these
  //how to effectively handle and render lists in React, how to use conditional rendering, how to  provide fallback content, and how to implement key management and data validation.
  return (
    <section className={classes.category__container}>
      {categoryInfos && categoryInfos.length > 0 ? (
        categoryInfos.map((infos, index) => (
          <CategoryCard key={index} data={infos} />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </section>
  );
}

export default Category;
