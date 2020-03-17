import React from 'react'

const CartItem = (props) => {
    let {cart} = props
    return (
        <tr>
            <td className="product-thumbnail"><a href="#"><img src="assets/images/product-2/cart-img/4.jpg" alt="product img" /></a></td>
                <td className="product-name"><a href="#">{cart.name}</a>
                <ul  className="pro__prize">
                    <li className="old__prize">$82.5</li>
                    <li>$75.2</li>
                </ul>
            </td>
            <td className="product-price"><span className="amount">£50.00</span></td>
            <td className="product-quantity"><input type="number" defaultValue="1" /></td>
            <td className="product-subtotal">£50.00</td>
            <td className="product-remove"><a href="#"><i className="icon-trash icons"></i></a></td>
        </tr>
    )
}

export default CartItem