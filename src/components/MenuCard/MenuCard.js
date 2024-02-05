import React from 'react';
import './MenuCard.css'

function MenuCard({image = '', name = '', price = '500din', onSelect = () => {}}) {
    return ( 
        <div className='menu-card' onClick={onSelect}>
            <img src={image} alt=''></img>
            <p> {name} </p>
            <div></div>
            <span> {price} </span>
        </div>
     );
}

export default MenuCard;