import React from 'react'
import Newsletter from '../components/newsletter'
import {ShowThumb} from '../components/images/imageView'
import {SocialData} from '../datas/socialLinks'
import {FooterData} from '../datas/linkList'
import SocialLinks from '../containers/socials/socialLinks'
import LinkList from '../components/menus/linkList'

const Footer = () => {
    return (
        <footer id="htc__footer">
            <div className="footer__container bg__cat--1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer">
                                <h2 className="title__line--2">ABOUT US</h2>
                                <div className="ft__details">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                                    <SocialLinks ulClassName='ft__list' socialLinks={SocialData}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40">
                            <div className="footer">
                                <h2 className="title__line--2">information</h2>
                                <div className="ft__inner">
                                    <LinkList ulClassName='ft__list' linkList={FooterData.footer1}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                <h2 className="title__line--2">my account</h2>
                                <div className="ft__inner">
                                    <LinkList ulClassName='ft__list' linkList={FooterData.footer2}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                <h2 className="title__line--2">Our service</h2>
                                <div className="ft__inner">
                                    <LinkList ulClassName='ft__list' linkList={FooterData.footer3}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                {/* Newsletter components */}
                                <Newsletter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="htc__copyright bg__cat--5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="copyright__inner">
                                <p>Copyright© <a href="https://freethemescloud.com/">Free themes Cloud</a> 2018. All right reserved.</p>
                                <ShowThumb
                                    permalink='/'
                                    src='assets/images/others/shape/paypol.png'
                                    alt='payment images'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
