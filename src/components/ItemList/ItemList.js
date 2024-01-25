import React, { useRef, useState } from 'react';
import './ItemList.css'
import MenuCard from '../MenuCard/MenuCard';
function ItemList({menuItemsData = [], onItemSelect = () => {}}) {

    const [listPos, setListPos] = useState(0)
    const indicatorRef = useRef();
    function LeftArrow(){
        if (listPos === 0)
            return
        setListPos(listPos - 1)
    }
    
    function RightArrow(){
        if (listPos === menuItemsData.length - 4)
            return
        setListPos(listPos + 1)
    }
    function ItemSelected(index){
        onItemSelect(index)
        indicatorRef.current.style.left = `${index * 26}%`
    }
    function RenderItems(){
        return menuItemsData.map((data, index) => {
            return (
                <MenuCard onSelect={() => ItemSelected(index)} image={data.src} name={data.text}></MenuCard>
            )
        })
    }
    return ( 
        <div className='menu-items'>
            <div className='left-arrow' onClick={LeftArrow}></div>
            <div className='right-arrow' onClick={RightArrow}></div>
            <div className='menu-item-list-con'>
                <div className='menu-item-list' style={{left: `${-listPos * 25}%`}}>
                    <div className='item-indicator' ref={indicatorRef}></div>
                    {RenderItems()}
                </div>
            </div>
        </div>
    );
}

export default ItemList;