import React from 'react'

import './collection-item.styles.scss'

const CollectionItem = ({id,imageUrl,name, price})=> (
    <div className="collection-item">
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="details">
            <p>{name}</p>
            <p className='last'>{price}</p>
        </div>
    </div>
)

export default CollectionItem