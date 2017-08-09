import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {increaseQuantity, decreaseQuantity, removeProduct} from "../actions/index";

class CartDetails extends Component {
    render() {
        if (!this.props.products) {
            return (
                <span>cart is empty</span>
            );
        } else {
            console.log(this.props.products);
            let that = this;
            return (
                <div>
                    <span>you selected products</span>
                    <div>
                        {
                            this.props.products.map((product) => {
                                return (
                                    <div key={product.product.id}>
                                        <span>{product.product.id} |</span>
                                        <span> quantity : {product.quantity}</span>
                                        <button onClick={
                                            function(){
                                                return that.props.decreaseQuantity(product.product.id)
                                            }}>-</button>
                                        <button onClick={
                                            function(){
                                                return that.props.increaseQuantity(product.product.id)
                                            }}>+</button>
                                        <button onClick={
                                            function(){
                                                return that.props.removeProduct(product.product.id)
                                            }}>x</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        products: state.selectedProduct
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
        removeProduct: removeProduct
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CartDetails);