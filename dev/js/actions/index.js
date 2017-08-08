export const selectProduct = function (product) {
    return {
        type: "PRODUCT_SELECTED",
        payload: product
    }
}