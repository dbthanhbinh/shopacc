import React from 'react'
const ShowLogo = (props) => {
    let {src, permalink, classname, alt, title, notALink} = props
    let customclassname = (classname && classname !== '') ? `className='${classname}'` : ''
    let customtitle = title ? `title='${title}'` : ''
    if(notALink) {
        return <img src={src} customclassname customtitle  alt={alt || ''} />
    } else {
        return <a href={permalink}>
            <img src={src} customclassname customtitle alt={alt || ''} />
        </a>
    }
}

const ShowThumb = (props) => {
    let {src, permalink, classname, alt, title, notALink} = props
    let customtitle = title ? `title='${title}'` : ''
    let customclassname = (classname && classname !== '') ? `className='${classname}'` : ''
    if(notALink) {
        return <img src={src} customclassname  customtitle alt={alt || ''} />
    } else {
        return <a href={permalink}>
            <img src={src} customclassname customtitle alt={alt || ''} />
        </a>
    }
}

export {
    ShowLogo,
    ShowThumb
}