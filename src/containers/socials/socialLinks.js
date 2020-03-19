import React from 'react'
const SocialLinks = (props) => {
    let {socialLinks} = props
    return (
        socialLinks &&
        <div className="ft__social__link">
            <ul className="social__link">
                {
                    socialLinks.map(social => {
                        return <li key={social.id}><a href={social.href}><i className={`icon-social-${social.thumb} icons`}></i></a></li>
                    })
                }
            </ul>
        </div>
    )
}

export default SocialLinks