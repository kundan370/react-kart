import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectProduct} from "../actions/index";

class ProductList extends Component {
    render() {
        return (
            <div className="tile-grid">
                {this.createListItems()}
            </div>
        )
    }

    createListItems() {
        var that = this
        return this.props.products.map((product) => {
            return(
                <div key={product.id} className="tile tile-grid-item tile-column-3">
                    <div className="tile-inner-padded tile-grid-item-inner">
                        <img src={product.img_url}/>
                        <h3>{product.name}({product.type})</h3>
                        <h5>$ {product.price}</h5>
                        <h4>{product.discount}% off</h4>
                        <button onClick={
                            function(){
                                return that.props.selectProduct(product)
                            }}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )
        })
    }
}

function mapStateToProps(state) {
    return {
      products: state.product
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectProduct: selectProduct}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList);