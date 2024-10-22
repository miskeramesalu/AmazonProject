import React,{useContext,useEffect ,useState} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from './Order.module.css'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard/ProductCard'

function Order() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribe = db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot => {
          const fetchedOrders = snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }));
          setOrders(fetchedOrders);
        });
      return unsubscribe;
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders.length === 0 ? (
            <div style={{ padding: "20px" }}>You don't have orders yet.</div>
          ) : (
            orders.map(({ id, data }) => (
              <div key={id}>
                <hr />
                <p>Order ID: {id}</p>
                {data.basket.map(product => (
                  <ProductCard flex key={product.id} product={product} />
                ))}
              </div>
            ))
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Order;