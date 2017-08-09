export default function (state=null, action) {
    switch (action.type){
        case "PRODUCT_SELECTED" :
            if (state == null) {
                state = [];
            }
            let added = false;
            for (let i=0; i<state.length;i++) {
                if (state[i].product.id == action.payload.id) {
                    state[i].quantity++;
                    added = true;
                    break;
                }
            }
            if (!added) {
                let newItem = {
                    product: action.payload,
                    quantity: 1
                };
                state.push(newItem);
            }
            return state;
            break;
        case "INCREASE_QUANTITY":
            for (let i=0; i<state.length;i++) {
                if (state[i].product.id == action.payload) {
                    state[i].quantity++;
                    break;
                }
            }
            return state;
            break;
        case "DECREASE_QUANTITY":
            for (let i=0; i<state.length;i++) {
                if (state[i].product.id == action.payload) {
                    state[i].quantity--;
                    if (state[i].quantity == 0)
                        state.splice(i,1);
                    break;
                }
            }
            return state;
            break;
        case "PRODUCT_REMOVED":
            for (let i=0; i<state.length;i++) {
                if (state[i].product.id == action.payload) {
                    state.splice(i,1);
                    break;
                }
            }
            return state;
            break
    }
    return state;
}