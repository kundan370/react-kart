import {combineReducers} from "redux";
import ProductReducer from "./reducer-products";
import SelectedProductReducer from "./reducer-selected-products";

const allReducers = combineReducers ({
    product: ProductReducer,
    selectedProduct: SelectedProductReducer
});

export default allReducers;