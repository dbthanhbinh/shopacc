import React from 'react'
import CalculatorCartItem from './calculatorCartItem'
import ViewPrice from './viewPrice'
import {ShowThumb} from '../../components/images/imageView'

const CartItem = (cart, onRemoveItem) => {
    let {oldPrice, price, discount, quantity, subTotal} = CalculatorCartItem(cart)
    let cartItem = 
        cart && <tr key={cart.id}>
            <td className="product-thumbnail">
                <ShowThumb
                    permalink='/single'
                    src='assets/images/product-2/cart-img/4.jpg'
                    alt='product img'
                />
                </td>
                <td className="product-name"><a href="#">{cart.name}</a>
                <ul  className="pro__prize">
                    <li className="old__prize">{ViewPrice(oldPrice)}</li>
                    <li>{ViewPrice(discount)}</li>
                </ul>
            </td>
            <td className="product-price"><span className="amount">{ViewPrice(price)}</span></td>
            <td className="product-quantity"><input type="number" defaultValue={quantity} /></td>
            <td className="product-subtotal">{ViewPrice(subTotal)}</td>
            <td className="product-remove">
                <span onClick={typeof onRemoveItem === 'function' && onRemoveItem.bind(this, cart.id)}>
                    <i className="icon-trash icons"></i>
                </span>
            </td>
        </tr>

    subTotal = Number(subTotal)
    return {cartItem, subTotal}
}

export default CartItem