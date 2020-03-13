import React from 'react'

class Brand extends React.PureComponent {

    componentDidMount () {
        window.$('.brand__list').owlCarousel({
            loop: true,
            margin:0,
            nav:false,
            autoplay: true,
            autoplayTimeout: 10000,
            items:5,
            dots: false,
            lazyLoad: true,
            responsive: {
              0: {
                items: 2,
              },
              767: {
                items: 4,
              },
              991: {
                items: 5,
              }
            }
        });
    }

    render () {
        return (
            <div className="htc__brand__area bg__cat--4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ht__brand__inner">
                                <ul className="brand__list owl-carousel clearfix">
                                    <li><a href="/"><img src="assets/images/brand/1.png" alt="brand images" /></a></li>
                                    <li><a href="/"><img src="assets/images/brand/2.png" alt="brand images" /></a></li>
                                    <li><a href="/"><img src="assets/images/brand/3.png" alt="brand images" /></a></li>
                                    <li><a href="/"><img src="assets/images/brand/4.png" alt="brand images" /></a></li>
                                    <li><a href="/"><img src="assets/images/brand/5.png" alt="brand images" /></a></li>
                                    <li><a href="/"><img src="assets/images/brand/5.png" alt="brand images" /></a></li>
                                    <li><a href="/"><img src="assets/images/brand/1.png" alt="brand images" /></a></li>
                                    <li><a href="/"><img src="assets/images/brand/2.png" alt="brand images" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brand