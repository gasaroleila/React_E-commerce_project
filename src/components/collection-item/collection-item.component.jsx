import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'
import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ({item,addItem})=> {
    const { imageUrl,name, price } = item
    return (
    <div className="collection-item">
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="details">
            <p>{name}</p>
            <p className='last'>{price}</p>
        </div>

        <CustomButton inverted onClick= {()=> addItem(item)}>Add to Cart</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch=> ({
    addItem: item=> dispatch(addItem(item))
}) 


export default connect(null, mapDispatchToProps)(CollectionItem)