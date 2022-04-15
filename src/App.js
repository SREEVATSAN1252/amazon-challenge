import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js"
import{Elements} from "@stripe/react-stripe-js"

const promise=loadStripe("pk_test_51KomCeSEt3YoR0xLStZIBZaflTvqa57oGm4L31aeIWiCVXzLlfwUXvhKavaQj3bWyXlRAoRSTVXgcl37G4IhJGY600OZ0XtPgU");
function App() {
  const [{user},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("user is :",authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
       
      }
      else {
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login/>

          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}><Payment/></Elements>
            
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
