import React from 'react'
import {ProductsData} from '../../datas/products'
import ProductItem from '../../components/products/product'
import ProductItemList from '../../components/products/productItemList'
import {ShowThumb} from '../../components/images/imageView'

import ShoppingCart from '../../components/shopping-cart'
const ProductsView = () => {
    let {addToCart, shopCarts} = ShoppingCart()

    return (
        <section className="htc__product__grid bg__white ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-lg-push-3 col-md-9 col-md-push-3 col-sm-12 col-xs-12">
                        {
                            ProductsData &&
                            <React.Fragment>
                                <div className="htc__product__rightidebar">
                                    <div className="htc__grid__top">
                                        <div className="htc__select__option">
                                            <select className="ht__select">
                                                <option>Default softing</option>
                                                <option>Sort by popularity</option>
                                                <option>Sort by average rating</option>
                                                <option>Sort by newness</option>
                                            </select>
                                            <select className="ht__select">
                                                <option>Show by</option>
                                                <option>Sort by popularity</option>
                                                <option>Sort by average rating</option>
                                                <option>Sort by newness</option>
                                            </select>
                                        </div>
                                        <div className="ht__pro__qun">
                                            <span>Showing 1-12 of 1033 products</span>
                                        </div>
                                        <ul className="view__mode" role="tablist">
                                            <li role="presentation" className="grid-view active"><a href="#grid-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-grid"></i></a></li>
                                            <li role="presentation" className="list-view"><a href="#list-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-view-list"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="shop__grid__view__wrap">
                                            <div role="tabpanel" id="grid-view" className="single-grid-view tab-pane fade in active clearfix">
                                                {
                                                    ProductsData.map((product) => {
                                                        return <ProductItem
                                                            addToCart={addToCart}
                                                            key={product.id}
                                                            product={product}
                                                            itemClassName='col-md-4 col-lg-4 col-sm-6 col-xs-12'
                                                        />
                                                    })
                                                }
                                            </div>

                                            {/* list-view */}
                                            <div role="tabpanel" id="list-view" className="single-grid-view tab-pane fade clearfix">
                                                <div className="col-xs-12">
                                                    <div className="ht__list__wrap">
                                                        {
                                                            ProductsData.map((product) => {
                                                                return <ProductItemList 
                                                                    key={product.id}
                                                                    product={product}
                                                                />
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ul className="htc__pagenation">
                                        <li><a href="/"><i className="zmdi zmdi-chevron-left"></i></a></li> 
                                        <li><a href="/">1</a></li> 
                                        <li className="active"><a href="/">3</a></li>   
                                        <li><a href="/">19</a></li> 
                                        <li><a href="/"><i className="zmdi zmdi-chevron-right"></i></a></li> 
                                        </ul>
                                    </div>
                                </div>

                                {
                                    shopCarts()
                                }
                    
                            </React.Fragment>
                        }
                        
                    </div>

                    {/* For sidebar */}
                    <div className="col-lg-3 col-lg-pull-9 col-md-3 col-md-pull-9 col-sm-12 col-xs-12 smt-40 xmt-40">
                        <div className="htc__product__leftsidebar">
                            <div className="htc-grid-range">
                                <h4 className="title__line--4">Price</h4>
                                <div className="content-shopby">
                                    <div className="price_filter s-filter clear">
                                        <form action="#" method="GET">
                                            <div id="slider-range"></div>
                                            <div className="slider__range--output">
                                                <div className="price__output--wrap">
                                                    <div className="price--output">
                                                        <span>Price :</span><input type="text" id="amount" readOnly />
                                                    </div>
                                                    <div className="price--filter">
                                                        <a href="/">Filter</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="htc__category">
                                <h4 className="title__line--4">categories</h4>
                                <ul className="ht__cat__list">
                                    <li><a href="/">Clothing</a></li>
                                    <li><a href="/">Bags</a></li>
                                    <li><a href="/">Shoes</a></li>
                                    <li><a href="/">Jewelry</a></li>
                                    <li><a href="/">Accessories</a></li>
                                    <li><a href="/">Food / Drink Store</a></li>
                                    <li><a href="/">Gift Store</a></li>
                                    <li><a href="/">Accessories</a></li>
                                    <li><a href="/">Watch</a></li>
                                    <li><a href="/">Other</a></li>
                                </ul>
                            </div>

                            <div className="ht__pro__color">
                                <h4 className="title__line--4">color</h4>
                                <ul className="ht__color__list">
                                    <li className="grey"><a href="/">grey</a></li>
                                    <li className="lamon"><a href="/">lamon</a></li>
                                    <li className="white"><a href="/">white</a></li>
                                    <li className="red"><a href="/">red</a></li>
                                    <li className="black"><a href="/">black</a></li>
                                    <li className="pink"><a href="/">pink</a></li>
                                </ul>
                            </div>
                            
                            <div className="ht__pro__size">
                                <h4 className="title__line--4">Size</h4>
                                <ul className="ht__size__list">
                                    <li><a href="/">xs</a></li>
                                    <li><a href="/">s</a></li>
                                    <li><a href="/">m</a></li>
                                    <li><a href="/">reld</a></li>
                                    <li><a href="/">xl</a></li>
                                </ul>
                            </div>
                            
                            <div className="htc__tag">
                                <h4 className="title__line--4">tags</h4>
                                <ul className="ht__tag__list">
                                    <li><a href="/">Clothing</a></li>
                                    <li><a href="/">bag</a></li>
                                    <li><a href="/">Shoes</a></li>
                                    <li><a href="/">Jewelry</a></li>
                                    <li><a href="/">Food</a></li>
                                    <li><a href="/">Aceessories</a></li>
                                    <li><a href="/">Store</a></li>
                                    <li><a href="/">Watch</a></li>
                                    <li><a href="/">Other</a></li>
                                </ul>
                            </div>
                            
                            <div className="htc__compare__area">
                                <h4 className="title__line--4">compare</h4>
                                <ul className="htc__compare__list">
                                    <li><a href="/">White men’s polo<i className="icon-trash icons"></i></a></li>
                                    <li><a href="/">T-shirt for style girl...<i className="icon-trash icons"></i></a></li>
                                    <li><a href="/">Basic dress for women...<i className="icon-trash icons"></i></a></li>
                                </ul>
                                <ul className="ht__com__btn">
                                    <li><a href="/">clear all</a></li>
                                    <li className="compare"><a href="/">Compare</a></li>
                                </ul>
                            </div>
                            
                            <div className="htc__recent__product">
                                <h2 className="title__line--4">best seller</h2>
                                <div className="htc__recent__product__inner">
                                    <div className="htc__best__product">
                                        <div className="htc__best__pro__thumb">
                                            <ShowThumb
                                                src='assets/images/product-2/sm-smg/1.jpg'
                                                alt='small product'
                                                permalink='product-details.html'
                                            />
                                        </div>
                                        <div className="htc__best__product__details">
                                            <h2><a href="product-details.html">Product Title Here</a></h2>
                                            <ul className="rating">
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                            </ul>
                                            <ul  className="pro__prize">
                                                <li className="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="htc__best__product">
                                        <div className="htc__best__pro__thumb">
                                            <ShowThumb
                                                src='assets/images/product-2/sm-smg/1.jpg'
                                                alt='small product'
                                                permalink='product-details.html'
                                            />
                                        </div>
                                        <div className="htc__best__product__details">
                                            <h2><a href="product-details.html">Product Title Here</a></h2>
                                            <ul className="rating">
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                            </ul>
                                            <ul  className="pro__prize">
                                                <li className="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="htc__best__product">
                                        <div className="htc__best__pro__thumb">
                                            <ShowThumb
                                                src='assets/images/product-2/sm-smg/1.jpg'
                                                alt='small product'
                                                permalink='product-details.html'
                                            />
                                        </div>
                                        <div className="htc__best__product__details">
                                            <h2><a href="product-details.html">Product Title Here</a></h2>
                                            <ul className="rating">
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                            </ul>
                                            <ul  className="pro__prize">
                                                <li className="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsView