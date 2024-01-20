import React from 'react';
import './ItemCard.css'
function ItemCard({}) {
    return ( 
        <div className='item-card-container'>
            <div className='card-nav'>
                <p>Overview</p>
                <p>Ingridiants</p>
            </div>
            <div className='rating'>
                <p className='score'>4.5</p>
                <img></img>
            </div>
            <div className='description'>
                <p className='dish-name'>Chef Feny</p>
                <p className='dish-sub'>Shusi tei</p>
                <p className='dish-description'>Designer nyambi chef, setelah menikahi gafis south mountain yg lama dinanty nanti</p>
            </div>
            <div className='like-dislike'>
                <div className='like'>
                    <img></img>
                    <p>120</p>
                </div>
                <div className='like'>
                    <img></img>
                    <p>120</p>
                </div>
                {/* <div className='like'></div> */}
            </div>
            
        </div>
     );
}

export default ItemCard;