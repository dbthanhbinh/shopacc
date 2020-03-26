import React from 'react'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../../stores/cart'
import CartEmpty from './cartEmpty'
import CartItem from './cartItem'

const ShoppingCart = () => {
    let cartsTotal = 0
    let shopCartsTotal = 0
    let itemComponents = []

    let {cartData} = useSelector(state => state);
    console.log('=====666', useSelector(state => state))
    const dispatch = useDispatch(dispatch => bindActionCreators (actionCreators, dispatch));
    let {cartList} = cartData
    (cartDatacartList && cartList.length > 0) &&
        cartList.forEach(cart => {
            // let {cartItem, subTotal} = CartItem(cart, handleRemoveItem)
            // shopCartsTotal = _.sum([shopCartsTotal, subTotal])
            // itemComponents.push(cartItem)
        })

    const addToCart = (cart) => {
        dispatch({ type: 'ADD_TO_CART', cart });
    }

    const handleRemoveItem = (id) => {
    }

    const removeFromCart = (cartId) => {
        dispatch({ type: 'REMOVE_FROM_CART', cartId });
    }

    const miniCart = () => {
        
        let {cartList} = cartData
        return (
            <div>
                miniCart
                {
                    cartList && cartList.length > 0 && cartList.map((cartItem) => {
                        let {cart} = cartItem
                        return <p key={cart.id}>{`${cart.id} - ${cart.name}`} <span onClick={()=>removeFromCart(cart.id)}>Delete</span> </p>
                    })
                }
            </div>
        )
    }

    const shopCarts = () => {
        

        //console.log('====gggggg', cartList.length)

        

        return (
            <div className="cart-main-area ptb--100 bg__white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <form action="#">               
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">products</th>
                                                <th className="product-name">name of products</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {(cartList && cartList.length > 0) ? itemComponents : <CartEmpty />} */}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="buttons-cart--inner">
                                            <div className="buttons-cart">
                                                <a href="/">Continue Shopping</a>
                                            </div>
                                            <div className="buttons-cart checkout--btn">
                                                <a href="/">update</a>
                                                <a href="/">checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        {/* <CouponForm
                                            onApplyCoupon={handleApplyCoupon}
                                        /> */}
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12 smt-40 xmt-40">
                                        <div className="htc__cart__total">
                                            <h6>cart total</h6>
                                            <div className="cart__desk__list">
                                                <ul className="cart__desc">
                                                    <li>cart total</li>
                                                    <li>tax</li>
                                                    <li>shipping</li>
                                                    <li>use coupon</li>
                                                </ul>
                                                {/* <ul className="cart__price">
                                                    <li>{ViewPrice(cartsTotal)}</li>
                                                    <li>{ViewPrice(orderTaxTotal)}</li>
                                                    <li>{ViewPrice(orderShippingTotal)}</li>
                                                    <li>-{ViewPrice(couponValue)}</li>
                                                </ul> */}
                                            </div>
                                            <div className="cart__total">
                                                <span>order total</span>
                                                {/* <span>{ViewPrice(shopCartsTotal)}</span> */}
                                            </div>
                                            <ul className="payment__btn">
                                                <li className="active"><a href="/">payment</a></li>
                                                <li><a href="/">continue shopping</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return {miniCart, addToCart, shopCarts}
}

export default ShoppingCart