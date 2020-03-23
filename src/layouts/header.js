import React from 'react'
import {ShowLogo} from '../components/images/imageView'

import {HeaderMenuData} from '../datas/headerMenu'
import TreeMenu from './treeMenu'
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

        window.$('.mobile-menu nav').meanmenu({
            meanMenuContainer: '.mobile-menu-area',
            meanScreenWidth: "991",
            meanRevealPosition: "right",
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
                                        {
                                            TreeMenu({HeaderMenuData, parentId: null})
                                        }
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
                                            <a className="cart__menu" href="/"><i className="icon-handbag icons"></i></a>
                                            <a href="/"><span className="htc__qua">2</span></a>
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