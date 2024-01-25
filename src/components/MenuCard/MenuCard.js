import React from 'react';
import './MenuCard.css'

function MenuCard({image = '', name = '', onSelect = () => {}}) {
    return ( 
        <div className='menu-card' onClick={onSelect}>
            <img src={image} alt=''></img>
            <p> {name} </p>
        </div>
     );
}

export default MenuCard;