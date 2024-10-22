import React,{useContext,useEffect} from "react";
import "./App.css";
import Routing from "./Router/Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";


function App() {
  const [{ user }, dispatch] = useContext(DataContext);
useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        console.log(authuser);
        dispatch({
          type: Type.SET_USER,
          user: authuser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);

  
  return <Routing />;
}

export default App;

