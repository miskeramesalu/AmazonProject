import React,{useContext} from 'react'
import classes from './cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import {DataContext} from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard/ProductCard'
import {Type} from '../../Utility/action.type'
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'

const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce((sum, item) => sum + item.price * item.amount, 0);

  const updateBasket = (item, change) => {
    const newAmount = item.amount + change;
    if (newAmount === 0) {
      dispatch({ type: Type.REMOVE_FROM_BASKET, id: item.id });
    } else {
      dispatch({
        type: newAmount > item.amount ? Type.ADD_TO_BASKET : Type.UPDATE_BASKET,
        item: { ...item, amount: newAmount },
      });
    }
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello Customer</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket.map((item) => (
              <section key={item.id} className={classes.cart_product}>
                <ProductCard product={item} renderDesc flex renderAdd={false} />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => updateBasket(item, 1)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => updateBasket(item, -1)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket.length > 0 && (
          <div className={classes.subtotal}>
            <p>
              Subtotal ({basket.length} items):{" "}
              <CurrencyFormat amount={total} />
            </p>
            <label>
              <input type="checkbox" />
              <small>This Order Contains a Gift</small>
            </label>
            <Link to="/payments">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;