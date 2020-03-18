import React from 'react'
import {ShowThumb} from '../../components/images/imageView'

const ProductItemList = (props) => {
    let {product, itemClassName} = props
    return (
        <div className="ht__list__product">
            <div className="ht__list__thumb">
                <ShowThumb
                    permalink='product-details.html'
                    src='assets/images/product-2/pro-1/2.jpg'
                    alt='product images'
                />
            </div>
            <div className="htc__list__details">
                <h2><a href="product-details.html">{product.name}</a></h2>
                <ul  className="pro__prize">
                    <li className="old__prize">$82.5</li>
                    <li>$75.2</li>
                </ul>
                <ul className="rating">
                    <li><i className="icon-star icons"></i></li>
                    <li><i className="icon-star icons"></i></li>
                    <li><i className="icon-star icons"></i></li>
                    <li className="old"><i className="icon-star icons"></i></li>
                    <li className="old"><i className="icon-star icons"></i></li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="fr__list__btn">
                    <a className="fr__btn" href="cart.html">Add To Cart</a>
                </div>
            </div>
        </div>
    )
}

export default ProductItemList