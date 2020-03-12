import React from 'react'

// UI Best seller
import BestSeller from './bestseller'
// Fake product data
import {BestSellerData, ProductsData, TopRatedData} from '../../datas/products'
import ProductItem from '../../components/products/product'
import TopRated from '../../components/products/toprated'

class Home extends React.PureComponent {

    render () {
        return (
            <React.Fragment>
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
                                        <a href="/">
                                            <img src="assets/images/product-2/sm-smg/1.jpg" alt="product images" />
                                        </a>
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
                                        <a href="/">
                                            <img src="assets/images/product-2/sm-smg/2.jpg" alt="product images" />
                                        </a>
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
                <div className="slider__container slider--one bg__cat--3">
                    <div className="slide__container slider__activation__wrap owl-carousel">
                        <div className="single__slide animation__style01 slider__fixed--height">
                            <div className="container">
                                <div className="row align-items__center">
                                    <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
                                        <div className="slide">
                                            <div className="slider__inner">
                                                <h2>collection 2018</h2>
                                                <h1>NICE CHAIR</h1>
                                                <div className="cr__btn">
                                                    <a href="cart.html">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
                                        <div className="slide__thumb">
                                            <img src="assets/images/slider/fornt-img/1.png" alt="slider images" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single__slide animation__style01 slider__fixed--height">
                            <div className="container">
                                <div className="row align-items__center">
                                    <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
                                        <div className="slide">
                                            <div className="slider__inner">
                                                <h2>collection 2018</h2>
                                                <h1>NICE CHAIR</h1>
                                                <div className="cr__btn">
                                                    <a href="cart.html">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
                                        <div className="slide__thumb">
                                            <img src="assets/images/slider/fornt-img/2.png" alt="slider images" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    ProductsData
                    && <section className="htc__category__area ptb--100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="section__title--2 text-center">
                                        <h2 className="title__line">New Arrivals</h2>
                                        <p>But I must explain to you how all this mistaken idea</p>
                                    </div>
                                </div>
                            </div>
                            <div className="htc__product__container">
                                <div className="row">
                                    <div className="product__list clearfix mt--30">
                                        {
                                            ProductsData.map((product) => {
                                                return <ProductItem 
                                                    key={product.id}
                                                    product={product}
                                                    itemClassName='col-md-4 col-lg-3 col-sm-4 col-xs-12'
                                                />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                
                <section className="htc__good__sale bg__cat--3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                <div className="fr__prize__inner">
                                    <h2>Contrary to popular belief is simply rand.</h2>
                                    <h3>Professor at Hamp deny dney College.</h3>
                                    <a className="fr__btn" href="/">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                <div className="prize__inner">
                                    <div className="prize__thumb">
                                        <img src="assets/images/banner/big-img/1.png" alt="banner images" />
                                    </div>
                                    <div className="banner__info">
                                        <div className="pointer__tooltip pointer--3 align-left">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Left</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                        <div className="pointer__tooltip pointer--4 align-top">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Top</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                        <div className="pointer__tooltip pointer--5 align-bottom">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Bottom</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                        <div className="pointer__tooltip pointer--6 align-top">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Bottom</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                        <div className="pointer__tooltip pointer--7 align-top">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Bottom</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <BestSeller bestsellers={BestSellerData} />

                <section className="htc__testimonial__area bg__cat--4">
                    <div className="container">
                        <div className="row">
                            <div className="ht__testimonial__activation clearfix">
                                <div className="col-lg-6 col-md-6 single__tes">
                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src="assets/images/test/client/1.png" alt="testimonial images" />
                                        </div>
                                        <div className="testimonial__details">
                                            <h4><a href="/">Mr.Mike Band</a></h4>
                                            <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 single__tes">
                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src="assets/images/test/client/2.png" alt="testimonial images" />
                                        </div>
                                        <div className="testimonial__details">
                                            <h4><a href="/">Ms.Lucy Barton</a></h4>
                                            <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 single__tes">
                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src="assets/images/test/client/1.png" alt="testimonial images" />
                                        </div>
                                        <div className="testimonial__details">
                                            <h4><a href="/">Ms.Lucy Barton</a></h4>
                                            <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 single__tes">
                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src="assets/images/test/client/2.png" alt="testimonial images" />
                                        </div>
                                        <div className="testimonial__details">
                                            <h4><a href="/">Ms.Lucy Barton</a></h4>
                                            <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {
                    TopRatedData
                    && <section className="top__rated__area bg__white pt--100 pb--110">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__title--2 text-center">
                                        <h2 className="title__line">Top Rated</h2>
                                        <p>But I must explain to you</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt--20">
                                {
                                    TopRatedData.map((product) => {
                                        return <TopRated 
                                            key={product.id}
                                            product={product}
                                            itemClassName='col-lg-4 col-md-6 col-sm-6 col-xs-12'
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </section>
                }
            </React.Fragment>
        )
    }
}

export default Home