import React from 'react'
import {ShowThumb} from '../../components/images/imageView'

const ProductItem = (props) => {
    let {product, itemClassName} = props
    if (!itemClassName) itemClassName = 'col-md-4 col-lg-3 col-sm-4 col-xs-12'
    return (
        <div className={itemClassName}>
            <div className="category">
                <div className="ht__cat__thumb">
                    <ShowThumb
                        permalink='/single'
                        src={product.thumb}
                        alt='product images'
                    />
                </div>
                <div className="fr__hover__info">
                    <ul className="product__action">
                        <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>

                        <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>

                        <li><a href="/"><i className="icon-shuffle icons"></i></a></li>
                    </ul>
                </div>
                <div className="fr__product__inner">
                    <h4><a href="/single">{product.name}</a></h4>
                    <ul className="fr__pro__prize">
                        <li className="old__prize">{product.price}</li>
                        <li>{product.discount}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductItem