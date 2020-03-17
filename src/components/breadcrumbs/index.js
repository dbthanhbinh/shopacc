import React from 'react'

class Breadcrumb extends React.PureComponent {

    render () {
        return (
            <div className="ht__bradcaump__area" style={{background: 'rgba(0, 0, 0, 0) url(assets/images/bg/4.jpg) no-repeat scroll center center / cover'}}>
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner">
                                    <nav className="bradcaump-inner">
                                    <a className="breadcrumb-item" href="index.html">Home</a>
                                    <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                                    <span className="breadcrumb-item active">Blog</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb