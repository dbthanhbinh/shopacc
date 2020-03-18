import React from 'react'

// Fake product data
import {BestSellerData} from '../../datas/products'
import ProductItem from '../../components/products/product'
import Breadcrumb from '../../components/breadcrumbs'
import {ShowThumb} from '../../components/images/imageView'

class SingleProduct extends React.Component {


    render () {
        return (
            <React.Fragment>
                <Breadcrumb />
                
                <section className="htc__product__details bg__white ptb--100">
                    <div className="htc__product__details__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                                    <div className="htc__product__details__tab__content">
                                        <div className="product__big__images">
                                            <div className="portfolio-full-image tab-content">
                                                <div role="tabpanel" className="tab-pane fade in active" id="img-tab-1">
                                                    <ShowThumb
                                                        notALink='/single'
                                                        src='assets/images/product-2/big-img/1.jpg'
                                                        alt='product img'
                                                    />
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="img-tab-2">
                                                    <ShowThumb
                                                        notALink='/single'
                                                        src='assets/images/product-2/big-img/1.jpg'
                                                        alt='product img'
                                                    />
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="img-tab-3">
                                                    <ShowThumb
                                                        notALink='/single'
                                                        src='assets/images/product-2/big-img/1.jpg'
                                                        alt='product img'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="product__small__images" role="tablist">
                                            <li role="presentation" className="pot-small-img active">
                                                <ShowThumb
                                                    permalink='#img-tab-1'
                                                    src='assets/images/product-2/sm-img-3/3.jpg'
                                                    alt='small'
                                                />
                                            </li>
                                            <li role="presentation" className="pot-small-img">
                                                <ShowThumb
                                                    permalink='#img-tab-2'
                                                    src='assets/images/product-2/sm-img-3/3.jpg'
                                                    alt='small'
                                                />
                                            </li>
                                            <li role="presentation" className="pot-small-img">
                                                <ShowThumb
                                                    permalink='#img-tab-3'
                                                    src='assets/images/product-2/sm-img-3/3.jpg'
                                                    alt='small'
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 smt-40 xmt-40">
                                    <div className="ht__product__dtl">
                                        <h2>jean shirt to sassy girl</h2>
                                        <h6>Model: <span>MNG001</span></h6>
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
                                        <p className="pro__info">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</p>
                                        <div className="ht__pro__desc">
                                            <div className="sin__desc">
                                                <p><span>Availability:</span> In Stock</p>
                                            </div>
                                            <div className="sin__desc align--left">
                                                <p><span>color:</span></p>
                                                <ul className="pro__color">
                                                    <li className="red"><a href="/">red</a></li>
                                                    <li className="green"><a href="/">green</a></li>
                                                    <li className="balck"><a href="/">balck</a></li>
                                                </ul>
                                                <div className="pro__more__btn">
                                                    <a href="/">more</a>
                                                </div>
                                            </div>
                                            <div className="sin__desc align--left">
                                                <p><span>size</span></p>
                                                <select className="select__size">
                                                    <option>s</option>
                                                    <option>l</option>
                                                    <option>xs</option>
                                                    <option>xl</option>
                                                    <option>m</option>
                                                    <option>s</option>
                                                </select>
                                            </div>
                                            <div className="sin__desc align--left">
                                                <p><span>Categories:</span></p>
                                                <ul className="pro__cat__list">
                                                    <li><a href="/">Fashion,</a></li>
                                                    <li><a href="/">Accessories,</a></li>
                                                    <li><a href="/">Women,</a></li>
                                                    <li><a href="/">Men,</a></li>
                                                    <li><a href="/">Kid,</a></li>
                                                    <li><a href="/">Mobile,</a></li>
                                                    <li><a href="/">Computer,</a></li>
                                                    <li><a href="/">Hair,</a></li>
                                                    <li><a href="/">Clothing,</a></li>
                                                </ul>
                                            </div>
                                            <div className="sin__desc align--left">
                                                <p><span>Product tags:</span></p>
                                                <ul className="pro__cat__list">
                                                    <li><a href="/">Fashion,</a></li>
                                                    <li><a href="/">Accessories,</a></li>
                                                    <li><a href="/">Women,</a></li>
                                                    <li><a href="/">Men,</a></li>
                                                    <li><a href="/">Kid,</a></li>
                                                </ul>
                                            </div>

                                            <div className="sin__desc product__share__link">
                                                <p><span>Share this:</span></p>
                                                <ul className="pro__share">
                                                    <li><a href="/" target="_blank"><i className="icon-social-twitter icons"></i></a></li>

                                                    <li><a href="/" target="_blank"><i className="icon-social-instagram icons"></i></a></li>

                                                    <li><a href="https://www.facebook.com/Furny/?ref=bookmarks" ><i className="icon-social-facebook icons"></i></a></li>

                                                    <li><a href="/" target="_blank"><i className="icon-social-google icons"></i></a></li>

                                                    <li><a href="/" target="_blank"><i className="icon-social-linkedin icons"></i></a></li>

                                                    <li><a href="/" target="_blank"><i className="icon-social-pinterest icons"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="htc__produc__decription bg__white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="pro__details__tab" role="tablist">
                                    <li role="presentation" className="description active"><a href="#description" role="tab" data-toggle="tab">description</a></li>
                                    <li role="presentation" className="review"><a href="#review" role="tab" data-toggle="tab">review</a></li>
                                    <li role="presentation" className="shipping"><a href="#shipping" role="tab" data-toggle="tab">shipping</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="ht__pro__details__content">
                                    <div role="tabpanel" id="description" className="pro__single__content tab-pane fade in active">
                                        <div className="pro__tab__content__inner">
                                            <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                            <h4 className="ht__pro__title">Description</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                            <h4 className="ht__pro__title">Standard Featured</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in</p>
                                        </div>
                                    </div>
                                    <div role="tabpanel" id="review" className="pro__single__content tab-pane fade">
                                        <div className="pro__tab__content__inner">
                                            <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                            <h4 className="ht__pro__title">Description</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                            <h4 className="ht__pro__title">Standard Featured</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                        </div>
                                    </div>
                                    <div role="tabpanel" id="shipping" className="pro__single__content tab-pane fade">
                                        <div className="pro__tab__content__inner">
                                            <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                            <h4 className="ht__pro__title">Description</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                            <h4 className="ht__pro__title">Standard Featured</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="htc__product__area--2 pb--100 product-details-res">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section__title--2 text-center">
                                    <h2 className="title__line">New Arrivals</h2>
                                    <p>But I must explain to you how all this mistaken idea</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="product__wrap clearfix">
                                {
                                    BestSellerData && BestSellerData.map((product) => {
                                        return <ProductItem
                                            key={product.id}
                                            product={product}
                                            itemClassName='col-md-3 col-lg-3 col-sm-6 col-xs-12'
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default SingleProduct