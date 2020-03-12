import React from 'react'

const ProductItem = (props) => {
    let {product, itemClassName} = props
    if (!itemClassName) itemClassName = 'col-lg-4 col-md-6 col-sm-6 col-xs-12'
    return (
        <div className={itemClassName}>
            <div className="htc__best__product">
                <div className="htc__best__pro__thumb">
                    <a href="product-details.html">
                        <img src="assets/images/product-2/sm-img-2/1.jpg" alt="small images" />
                    </a>
                </div>
                <div className="htc__best__product__details">
                    <h2><a href="product-details.html">{product.name}</a></h2>
                    <ul className="rating">
                        <li><i className="icon-star icons"></i></li>
                        <li><i className="icon-star icons"></i></li>
                        <li><i className="icon-star icons"></i></li>
                        <li className="old"><i className="icon-star icons"></i></li>
                        <li className="old"><i className="icon-star icons"></i></li>
                    </ul>
                    <ul  className="top__pro__prize">
                        <li className="old__prize">$82.5</li>
                        <li>$75.2</li>
                    </ul>
                    <div className="best__product__action">
                        <ul className="product__action--dft">
                            <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
                            <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
                            <li><a href="/"><i className="icon-shuffle icons"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem