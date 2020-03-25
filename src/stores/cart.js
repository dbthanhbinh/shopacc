import _ from 'lodash'
const initialState = {
    cartList: [],
    cartDetail: null
}

export const actionCreators = {
    getCarts: (cartList) => ({type: 'FETCH_CARTS', cartList}),
    addToCart: (cart) => ({type: 'ADD_TO_CART', cart}),
    removeFromCart: (cartId) => ({type: 'REMOVE_FROM_CART', cartId})
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {
        case 'FETCH_CARTS':
            return {
                ...state,
                cartList: action.cartList
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cartList: [state.cartList, action.cart]
            }
        case 'REMOVE_FROM_CART':
            let _cartList = _.get(state, 'cartList')
            let filterList = _cartList.filter((f) => f.id !== action.cartId)
            return {
                ...state,
                cartList: filterList
            }
        default:
            return state
    }
}