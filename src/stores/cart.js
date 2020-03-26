import _ from 'lodash'
const initialState = {
    cartList: [],
    cartDetail: {
        cartTotal: 0,
        cartTax: 0,
        cartShipping: 0,
        cartCoupon: 0,
        cartCouponCode: null,
        orderTotal: 0,
        buyer: null,
        receiver: null,
        payment: null
    }
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
                cartList: action.cartList
            }
        case 'ADD_TO_CART':
            // check itemId arealdy exited
            let indexExited = state.cartList.findIndex(
                (f) => f.itemId === action.cart.itemId
            )

            if(indexExited === -1) {
                let newCartList = [...state.cartList, action.cart]
                return {
                    cartList: newCartList
                }
            } else {
                state.cartList[indexExited].quantity += 1
                let newCartList = [...state.cartList]
                return {
                    cartList: newCartList
                }
            }
        case 'REMOVE_FROM_CART':
            let _cartList = _.get(state, 'cartList')
            let filterList = _cartList.filter((f) => f.itemId !== action.cartId)
            return {
                cartList: filterList
            }
        default:
            return state
    }
}