import React from "react";
import ProductList from "../containers/product-list";
import CartDetails from "../containers/cart-details";
require("../../scss/styles.scss");

const App = function () {
    return (
        <div>
            <h1>Product List</h1>
            <ProductList/>
            <hr/>
            <h1>Cart</h1>
            <CartDetails/>
        </div>
    )
};

export default App;