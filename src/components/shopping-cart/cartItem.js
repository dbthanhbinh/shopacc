import React from 'react'
import CalculatorCartItem from '../../containers/shopcarts/calculatorCartItem'
import ViewPrice from '../../containers/shopcarts/viewPrice'
import {ShowThumb} from '../images/imageView'

const CartItem = (cart, onRemoveItem) => {
    let {product} = cart
    let {oldPrice, price, discount, subTotal} = CalculatorCartItem(product, cart.quantity)
    let cartItem = 
        product && <tr key={product.id}>
            <td className="product-thumbnail">
                <ShowThumb
                    permalink='/single'
                    src='assets/images/product-2/cart-img/4.jpg'
                    alt='product img'
                />
                </td>
                <td className="product-name"><a href="/">{product.name}</a>
                <ul  className="pro__prize">
                    <li className="old__prize">{ViewPrice(oldPrice)}</li>
                    <li>{ViewPrice(discount)}</li>
                </ul>
            </td>
            <td className="product-price"><span className="amount">{ViewPrice(price)}</span></td>
            <td className="product-quantity">{cart.quantity}</td>
            <td className="product-subtotal">{ViewPrice(subTotal)}</td>
            <td className="product-remove">
                <span onClick={typeof onRemoveItem === 'function' && onRemoveItem.bind(this, product.id)}>
                    <i className="icon-trash icons"></i>
                </span>
            </td>
        </tr>

    subTotal = Number(subTotal)
    return {cartItem, subTotal}
}

export default CartItem