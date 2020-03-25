import React from 'react'
import _ from 'lodash'

function findChild (HeaderMenuData, newParentId) {
    if(_.isEmpty(HeaderMenuData)) return null
     let newList = HeaderMenuData.filter((x) => x.parentId === newParentId)
    return newList && newList.length > 0
}

function TreeMenu({HeaderMenuData, parentId}){
    if(_.isEmpty(HeaderMenuData)) return null
    let menuObject = []
    HeaderMenuData.forEach((element, i) => {
        if(element.parentId === parentId){
            menuObject.push(element)
            HeaderMenuData = HeaderMenuData.filter((x) => x.id !== element.id)
        }
    })

    return menuObject && menuObject.map((item, i) => {
        return item.parentId === parentId && (
            <React.Fragment key={item.id}>
                {
                    <li className="drop"><a className={item.level === 'level2' ? 'mega__title' : ''} href="/">{item.name}</a>
                        {
                            findChild(HeaderMenuData, item.id) && <ul className={item.level === 'level1' ? 'dropdown mega_dropdown' : (item.level === 'level2' ? 'mega__item' : '')}>
                                <TreeMenu
                                    HeaderMenuData={HeaderMenuData}
                                    parentId={item.id}
                                />
                            </ul>
                        }
                    </li>
                }
            </React.Fragment>)
    })
}

export default TreeMenu