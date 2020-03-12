import React from 'react'
import ProductItem from '../../components/products/product'

const BestSeller = (props) => {
    let {bestsellers} = props
    return (
        bestsellers && <section className="ftr__product__area ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section__title--2 text-center">
                            <h2 className="title__line">Best Seller</h2>
                            <p>But I must explain to you how all this mistaken idea</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="product__wrap clearfix">
                        {
                            bestsellers.map((product) => {
                                return <ProductItem
                                        itemClassName='col-md-4 col-lg-3 col-sm-4 col-xs-12'
                                        key={product.id}
                                        product={product}
                                    />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSeller