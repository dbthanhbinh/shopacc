import React from 'react'
const LinkList = (props) => {
    let {ulClassName, linkList} = props
    return (
        linkList &&
        <ul className={ulClassName}>
            {
                linkList.map(link => {
                    return <li key={link.id}><a href={link.href}>{link.name}</a></li>
                })
            }
        </ul>
    )
}

export default LinkList