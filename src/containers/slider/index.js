import React from 'react'
import {ShowThumb} from '../../components/images/imageView'

class Slider extends React.PureComponent {

    componentDidMount () {
        if (window.$('.slider__activation__wrap').length) {
            window.$('.slider__activation__wrap').owlCarousel({
            loop: true,
            margin:0,
            nav:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1000,
            autoplay: false,
            navText: [ '<i class="icon-arrow-left icons"></i>', '<i class="icon-arrow-right icons"></i>' ],
            autoplayTimeout: 10000,
            items:1,
            dots: false,
            lazyLoad: true,
            responsive: {
              0: {
                items: 1,
              },
              767: {
                items: 1,
              },
              991: {
                items: 1,
              }
            }
            });
        }
    }

    render () {
        return (
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
                                        <ShowThumb
                                            notALink={true}
                                            src='assets/images/slider/fornt-img/1.png'
                                            alt='slider images'
                                        />
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
                                        <ShowThumb
                                            notALink={true}
                                            src='assets/images/slider/fornt-img/1.png'
                                            alt='slider images'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider