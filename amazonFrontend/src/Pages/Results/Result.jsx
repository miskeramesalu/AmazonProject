import React,{useEffect,useState} from 'react'
import classes from "./result.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { productUrl } from "../../Api/endPoints";
import Loader from '../../Components/Loader/Loader'
import ProductCard from "../../Components/Product/ProductCard/ProductCard";
const Result = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => setResults(res.data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDescription={false}
                renderAdd
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Result;
