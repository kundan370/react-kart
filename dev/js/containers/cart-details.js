import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class CartDetails extends Component {
    render() {
        if (!this.props.products) {
            return (
                <span>cart is empty</span>
            );
        } else {
            return (
                <div>
                    <span>you selected product {this.props.products.name}</span>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        products: state.selectedProduct
    };
}

export default connect(mapStateToProps)(CartDetails);