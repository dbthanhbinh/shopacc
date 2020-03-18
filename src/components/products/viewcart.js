import React from 'react'
import {ShowThumb} from '../../components/images/imageView'
class ViewCart extends React.Component {

    render () {
        return (
            <div className="offset__wrapper">
                <div className="search__area">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-md-12" >
                                <div className="search__inner">
                                    <form action="#" method="get">
                                        <input placeholder="Search here... " type="text" />
                                        <button type="submit"></button>
                                    </form>
                                    <div className="search__close__btn">
                                        <span className="search__close__btn_icon"><i className="zmdi zmdi-close"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shopping__cart">
                    <div className="shopping__cart__inner">
                        <div className="offsetmenu__close__btn">
                            <a href="/"><i className="zmdi zmdi-close"></i></a>
                        </div>
                        <div className="shp__cart__wrap">
                            <div className="shp__single__product">
                                <div className="shp__pro__thumb">
                                    <ShowThumb
                                        permalink='/single'
                                        src='assets/images/product-2/sm-smg/1.jpg'
                                        alt='product images'
                                    />
                                </div>
                                <div className="shp__pro__details">
                                    <h2><a href="product-details.html">BOPlay Wireless Speaker</a></h2>
                                    <span className="quantity">QTY: 1</span>
                                    <span className="shp__price">$105.00</span>
                                </div>
                                <div className="remove__btn">
                                    <a href="/" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                                </div>
                            </div>
                            <div className="shp__single__product">
                                <div className="shp__pro__thumb">
                                    <ShowThumb
                                        permalink='/single'
                                        src='assets/images/product-2/sm-smg/1.jpg'
                                        alt='product images'
                                    />
                                </div>
                                <div className="shp__pro__details">
                                    <h2><a href="product-details.html">Brone Candle</a></h2>
                                    <span className="quantity">QTY: 1</span>
                                    <span className="shp__price">$25.00</span>
                                </div>
                                <div className="remove__btn">
                                    <a href="/" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                                </div>
                            </div>
                        </div>
                        <ul className="shoping__total">
                            <li className="subtotal">Subtotal:</li>
                            <li className="total__price">$130.00</li>
                        </ul>
                        <ul className="shopping__btn">
                            <li><a href="cart.html">View Cart</a></li>
                            <li className="shp__checkout"><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCart