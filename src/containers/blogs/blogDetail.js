import React from 'react'
import CommentArea from '../comments'
import {ShowThumb} from '../../components/images/imageView'

const BlogDetail = (props) => {
    return (
        <section className="htc__blog__details bg__white ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-12">
                        <div className="htc__blog__details__wrap">
                            <div className="ht__bl__thumb">
                                <ShowThumb
                                    notALink={true}
                                    src='assets/images/blog/md-img/2.jpg'
                                    alt='blog images'
                                />
                            </div>
                            <div className="bl__dtl">
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example,</p>

                                <p>which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?”</p>
                                <blockquote>
                                    No one rejects, dislikes, or avoids pleasure itself, because it pleasure, but because those who do not know how to pursue pleasure ratinally encounter consequences that are.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
                                </blockquote>

                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="bl__img">
                                            <ShowThumb
                                                notALink={true}
                                                src='assets/images/blog/md-img/1.jpg'
                                                alt='blog images'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bl__img">
                                            <ShowThumb
                                                notALink={true}
                                                src='assets/images/blog/md-img/2.jpg'
                                                alt='blog images'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                            </div>
                            {/* CommentArea */}
                            <CommentArea />
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default BlogDetail