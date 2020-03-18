// import React from 'react'
const ViewPrice = (price) => {
    let currency = '$'
    let prefix = 'l'
    let space = ''
    if(prefix === 'l')
        return `${currency}${space}${price}`
    else
        return `${price}${space}${currency}`
}

export default ViewPrice