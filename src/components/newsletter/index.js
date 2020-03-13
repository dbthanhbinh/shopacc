import React from 'react'

class Newsletter extends React.PureComponent {


    render () {
        return (
            <React.Fragment>
                <h2 className="title__line--2">NEWSLETTER </h2>
                <div className="ft__inner">
                    <div className="news__input">
                        <input type="text" placeholder="Your Mail*" />
                        <div className="send__btn">
                            <a className="fr__btn" href="/">Send Mail</a>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Newsletter