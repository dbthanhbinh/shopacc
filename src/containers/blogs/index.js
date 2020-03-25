import React from 'react'
import {BlogsData} from '../../datas/blogs'
import BlogItem from '../../components/blogs/blog'

class Blogs extends React.PureComponent {

    render () {
        return (
            <section className="htc__blog__area bg__white ptb--100">
                <div className="container">
                    {
                        BlogsData &&
                        <React.Fragment>
                        <div className="row">
                            <div className="ht__blog__wrap blog--page clearfix">
                                {
                                    BlogsData.map((blog) => {
                                        return <BlogItem
                                            key={blog.id}
                                            blog={blog}
                                        />
                                    })
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="htc__pagenation">
                                <li><a href="/"><i className="zmdi zmdi-chevron-left"></i></a></li> 
                                <li><a href="/">1</a></li> 
                                <li><a href="/">2</a></li> 
                                <li><a href="/">3</a></li> 
                                <li><a href="/">4</a></li> 
                                <li><a href="/"><i className="zmdi zmdi-more"></i></a></li> 
                                <li><a href="/">19</a></li> 
                                <li className="active"><a href="/"><i className="zmdi zmdi-chevron-right"></i></a></li> 
                                </ul>
                            </div>
                        </div>
                        </React.Fragment>
                    }
                </div>
            </section>            
        )
    }
}

export default Blogs