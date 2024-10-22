import React,{useState,useContext} from "react";
import classes from "./Auth.module.css";
import { auth } from "../../Utility/firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { ClipLoader } from "react-spinners";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const authHandler = async (e) => {
    e.preventDefault();
    const isSignIn = e.target.name === "signin";
    setLoading((prev) => ({ ...prev, [isSignIn ? "signIn" : "signUp"]: true }));

    const authMethod = isSignIn
      ? signInWithEmailAndPassword
      : createUserWithEmailAndPassword;

    try {
      const userInfo = await authMethod(auth, email, password);
      dispatch({ type: Type.SET_USER, user: userInfo.user });
      navigate(state?.redirect || "/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading((prev) => ({
        ...prev,
        [isSignIn ? "signIn" : "signUp"]: false,
      }));
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Logo"
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {state?.msg && <small className={classes.errorMsg}>{state.msg}</small>}
        <form onSubmit={authHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            className={classes.login__signInbutton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        <p>
          By signing in you agree to the Amazon Fake Clone Conditions of Sale.
        </p>
        <button
          onClick={authHandler}
          name="signup"
          className={classes.login__registerBotton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && <small className={classes.errorMsg}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;