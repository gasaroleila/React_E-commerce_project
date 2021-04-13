import React from 'react'

import './shop.styles.scss'

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class Shop extends React.Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
      return (
         <div className="shop-page">
             <div className="main-section">
             <h1>Collections</h1>
             <div className="collections">
             {
                 collections.map(({id, ...otherCollectionProps})=> (
                     <CollectionPreview key={id} {...otherCollectionProps}/>
                 ))
             }
             </div>
             </div>
         </div>
      )
    }
}

export default Shop