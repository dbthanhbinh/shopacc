import React from 'react'
import _ from 'lodash'
const ShowLogo = (props) => {
    let {permalink, notALink, alt, src} = props
    let otherProps = _.pick(props, ['className', 'title'])

    let imgView = <img src={src} alt={alt || ''} {...otherProps} />
    if(notALink) {
        return imgView
    } else {
        return <a href={permalink || '/'}>
            {imgView}
        </a>
    }
}

const ShowThumb = (props) => {
    let {permalink, notALink, alt, src} = props
    let otherProps = _.pick(props, ['className', 'title'])
    let imgView = <img src={src} alt={alt || ''} {...otherProps} />
    if(notALink) {
        return imgView
    } else {
        return <a href={permalink || '/'}>
            {imgView}
        </a>
    }
}

export {
    ShowLogo,
    ShowThumb
}