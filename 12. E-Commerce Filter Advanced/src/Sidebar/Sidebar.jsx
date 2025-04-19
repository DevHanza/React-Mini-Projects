import "./Sidebar.css";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";
// import { Category } from "./Category/Category";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo-container">
          <h1>
            <TiShoppingCart />
          </h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </div>
    </>
  );
}

export default Sidebar;
