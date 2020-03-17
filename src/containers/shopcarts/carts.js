import React from 'react'
import CartItem from './cartItem'
import CartEmpty from './cartEmpty'
import {CartsData} from '../../datas/carts'

class ShopCarts extends React.PureComponent {
    
    render () {
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
                                            {
                                                CartsData ? 
                                                CartsData.map((cart) => {
                                                    return <CartItem
                                                        key={cart.id}
                                                        cart={cart}
                                                    />
                                                })
                                                : <CartEmpty />
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="buttons-cart--inner">
                                            <div className="buttons-cart">
                                                <a href="#">Continue Shopping</a>
                                            </div>
                                            <div className="buttons-cart checkout--btn">
                                                <a href="#">update</a>
                                                <a href="#">checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="ht__coupon__code">
                                            <span>enter your discount code</span>
                                            <div className="coupon__box">
                                                <input type="text" placeholder="" />
                                                <div className="ht__cp__btn">
                                                    <a href="#">enter</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12 smt-40 xmt-40">
                                        <div className="htc__cart__total">
                                            <h6>cart total</h6>
                                            <div className="cart__desk__list">
                                                <ul className="cart__desc">
                                                    <li>cart total</li>
                                                    <li>tax</li>
                                                    <li>shipping</li>
                                                </ul>
                                                <ul className="cart__price">
                                                    <li>$909.00</li>
                                                    <li>$9.00</li>
                                                    <li>0</li>
                                                </ul>
                                            </div>
                                            <div className="cart__total">
                                                <span>order total</span>
                                                <span>$918.00</span>
                                            </div>
                                            <ul className="payment__btn">
                                                <li className="active"><a href="#">payment</a></li>
                                                <li><a href="#">continue shopping</a></li>
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
}

export default ShopCarts