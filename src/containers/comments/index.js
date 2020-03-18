import React from 'react'
import CommentForm from './commentForm'
import './comment.scss'
import {ShowThumb} from '../../components/images/imageView'

class CommentArea extends React.PureComponent {

    render () {
        return (
            <React.Fragment>
                <div className="htc__comment__area">
                    <h4 className="title__line--5">HAVE 2 COMMENTS</h4>
                    <div className="ht__comment__content">
                        <div className="comment">
                            <div className="comment__thumb">
                                <ShowThumb
                                    src='assets/images/comment/1.png'
                                    alt='comment images'
                                    notALink={true}
                                />
                            </div>
                            <div className="ht__comment__details">
                                <div className="ht__comment__title">
                                    <h2><a href="#">JOHN NGUYEN</a></h2>
                                    <div className="reply__btn">
                                        <a href="#">reply</a>
                                    </div>
                                </div>
                                <span>July 15, 2016 at 2:39 am</span>
                                <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed.</p>
                            </div>
                        </div>
                        <div className="comment comment--reply">
                            <div className="comment__thumb">
                                <ShowThumb
                                    src='assets/images/comment/1.png'
                                    alt='comment images'
                                    notALink={true}
                                />
                            </div>
                            <div className="ht__comment__details">
                                <div className="ht__comment__title">
                                    <h2><a href="#">JOHN NGUYEN</a></h2>
                                    <div className="reply__btn">
                                        <a href="#">reply</a>
                                    </div>
                                </div>
                                <span>July 15, 2016 at 2:39 am</span>
                                <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed.</p>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment__thumb">
                                <ShowThumb
                                    src='assets/images/comment/1.png'
                                    alt='comment images'
                                    notALink={true}
                                />
                            </div>
                            <div className="ht__comment__details">
                                <div className="ht__comment__title">
                                    <h2><a href="#">JOHN NGUYEN</a></h2>
                                    <div className="reply__btn">
                                        <a href="#">reply</a>
                                    </div>
                                </div>
                                <span>July 15, 2016 at 2:39 am</span>
                                <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* CommentForm */}
                <CommentForm />
            </React.Fragment>
        )
    }
}

export default CommentArea