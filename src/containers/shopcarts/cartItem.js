import React from 'react'
import CalculatorCartItem from './calculatorCartItem'

const CartItem = (props) => {
    let {cart, onRemoveItem} = props
    const {state, oldPrice, price, discount, quantity, subTotal} = CalculatorCartItem(cart)
    return (
        <tr>
            <td className="product-thumbnail"><a href="#"><img src="assets/images/product-2/cart-img/4.jpg" alt="product img" /></a></td>
                <td className="product-name"><a href="#">{cart.name}</a>
                <ul  className="pro__prize">
                    <li className="old__prize">{oldPrice}</li>
                    <li>{discount}</li>
                </ul>
            </td>
            <td className="product-price"><span className="amount">{price}</span></td>
            <td className="product-quantity"><input type="number" defaultValue={quantity} /></td>
            <td className="product-subtotal">{subTotal}</td>
            <td className="product-remove">
                <span onClick={typeof onRemoveItem === 'function' && onRemoveItem.bind(this, cart.id)}>
                    <i className="icon-trash icons"></i>
                </span>
            </td>
        </tr>
    )
}

export default CartItem