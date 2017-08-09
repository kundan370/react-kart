export const selectProduct = function (product) {
    return {
        type: "PRODUCT_SELECTED",
        payload: product
    }
};

export const increaseQuantity = function (productId) {
    return {
        type: "INCREASE_QUANTITY",
        payload: productId
    }
};

export const decreaseQuantity = function (productId) {
    return {
        type: "DECREASE_QUANTITY",
        payload: productId
    }
};

export const removeProduct = function (productId) {
    return {
        type: "PRODUCT_REMOVED",
        payload: productId
    }
};