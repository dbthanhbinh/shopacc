import React from 'react'
import {ShowThumb} from '../../components/images/imageView'

const BlogItem = (props) => {
    let {blog, itemClassName} = props
    if (!itemClassName) itemClassName = 'col-md-6 col-lg-4 col-sm-12 col-xs-12'
    return (
        <div className={itemClassName}>
            <div className="blog">
                <div className="blog__thumb">
                    <ShowThumb
                        permalink='/blog-detail'
                        src='assets/images/blog/blog-img/3.jpg'
                        alt='blog images'
                    />
                </div>
                <div className="blog__details">
                    <div className="bl__date">
                        <span>March 22, 2018</span>
                    </div>
                    <h2><a href="/blog-detail">Lorem ipsum dolor sit amet, consec tetur adipisicing elit</a></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="blog__btn">
                        <a href="/blog-detail">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem