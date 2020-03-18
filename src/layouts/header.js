import React from 'react'
import {ShowLogo} from '../components/images/imageView'
class Header extends React.Component {

    componentDidMount () {
        var win = window.$(window);
        var sticky_id = window.$("#sticky-header-with-topbar");
            win.on('scroll',function() {    
            var scroll = win.scrollTop();
            if (scroll < 245) {
            sticky_id.removeClass("scroll-header");
            }else{
                sticky_id.addClass("scroll-header");
            }
        });
    }

    render () {
        return (
            <header id="htc__header" className="htc__header__area header--one">
                <div id="sticky-header-with-topbar" className="mainmenu__wrap sticky__header">
                    <div className="container">
                        <div className="row">
                            <div className="menumenu__container clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5"> 
                                    <div className="logo">
                                        <ShowLogo
                                            permalink='/'
                                            src='assets/images/logo/4.png'
                                            alt='logo images'
                                        />
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3">
                                    <nav className="main__menu__nav hidden-xs hidden-sm">
                                        <ul className="main__menu">
                                            <li className="drop"><a href="index.html">Home</a></li>
                                            <li className="drop"><a href="/">women</a>
                                                <ul className="dropdown mega_dropdown">
                                                    <li><a className="mega__title" href="product-grid.html">Shop Pages</a>
                                                        <ul className="mega__item">
                                                            <li><a href="product-grid.html">Product Grid</a></li>
                                                            <li><a href="cart.html">cart</a></li>
                                                            <li><a href="checkout.html">checkout</a></li>
                                                            <li><a href="wishlist.html">wishlist</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a className="mega__title" href="product-grid.html">Variable Product</a>
                                                        <ul className="mega__item">
                                                            <li><a href="/">Category</a></li>
                                                            <li><a href="/">My Account</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="cart.html">Shopping Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a className="mega__title" href="product-grid.html">Product Types</a>
                                                        <ul className="mega__item">
                                                            <li><a href="/">Simple Product</a></li>
                                                            <li><a href="/">Variable Product</a></li>
                                                            <li><a href="/">Grouped Product</a></li>
                                                            <li><a href="/">Downloadable Product</a></li>
                                                            <li><a href="/">Simple Product</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="drop"><a href="/">men</a>
                                                <ul className="dropdown mega_dropdown">
                                                    <li><a className="mega__title" href="product-grid.html">Shop Pages</a>
                                                        <ul className="mega__item">
                                                            <li><a href="product-grid.html">Product Grid</a></li>
                                                            <li><a href="cart.html">cart</a></li>
                                                            <li><a href="checkout.html">checkout</a></li>
                                                            <li><a href="wishlist.html">wishlist</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a className="mega__title" href="product-grid.html">Variable Product</a>
                                                        <ul className="mega__item">
                                                            <li><a href="/">Category</a></li>
                                                            <li><a href="/">My Account</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="cart.html">Shopping Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a className="mega__title" href="product-grid.html">Product Types</a>
                                                        <ul className="mega__item">
                                                            <li><a href="/">Simple Product</a></li>
                                                            <li><a href="/">Variable Product</a></li>
                                                            <li><a href="/">Grouped Product</a></li>
                                                            <li><a href="/">Downloadable Product</a></li>
                                                            <li><a href="/">Simple Product</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="drop"><a href="/">Product</a>
                                                <ul className="dropdown">
                                                    <li><a href="product-grid.html">Product Grid</a></li>
                                                    <li><a href="product-details.html">Product Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="drop"><a href="blog.html">blog</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog.html">Blog Grid</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="drop"><a href="/">Pages</a>
                                                <ul className="dropdown">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="cart.html">Cart page</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="contact.html">contact</a></li>
                                                    <li><a href="product-grid.html">product grid</a></li>
                                                    <li><a href="product-details.html">product details</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </nav>

                                    <div className="mobile-menu clearfix visible-xs visible-sm">
                                        <nav id="mobile_dropdown">
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="/">pages</a>
                                                    <ul>
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                        <li><a href="cart.html">Cart page</a></li>
                                                        <li><a href="checkout.html">checkout</a></li>
                                                        <li><a href="contact.html">contact</a></li>
                                                        <li><a href="product-grid.html">product grid</a></li>
                                                        <li><a href="product-details.html">product details</a></li>
                                                        <li><a href="wishlist.html">wishlist</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>  
                                </div>
                                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                                    <div className="header__right">
                                        <div className="header__search search search__open">
                                            <a href="/"><i className="icon-magnifier icons"></i></a>
                                        </div>
                                        <div className="header__account">
                                            <a href="/"><i className="icon-user icons"></i></a>
                                        </div>
                                        <div className="htc__shopping__cart">
                                            <a className="cart__menu" href="#"><i className="icon-handbag icons"></i></a>
                                            <a href="#"><span className="htc__qua">2</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-area"></div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header