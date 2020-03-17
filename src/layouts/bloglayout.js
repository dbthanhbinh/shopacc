import React from 'react'
import Header from './header'
import Footer from './footer'
import Brand from '../containers/brand'
import Breadcrumb from '../components/breadcrumbs'

class BlogLayout extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <React.Fragment>
                <Header />
                <div className="body__overlay"></div>
                <Breadcrumb />
                    {this.props.children}
                <Brand />
                <Footer />
            </React.Fragment>
        )
    }
}

export default BlogLayout