import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const eventHandler = ()=>{
    if(user){
      auth.signOut();
    }
  }
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="linkopn" to = "/login">
        <div onClick={eventHandler} className="header__option">
          <span className="header__lineone">Hello {user?user.email:"Guest"}</span>
          <span className="header__linetwo">
            {user ? "Sign Out":"Sign In"}
          </span>
        </div>
         </Link>
       
        <div className="header__option">
          <span className="header__lineone">Returns</span>
          <span className="header__linetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__lineone">Your</span>
          <span className="header__linetwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
           
            <ShoppingCartIcon className="basket_cart" />
          </Link>

          <span className="header__optionLineTwo_header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
