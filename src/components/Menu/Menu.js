import React, { useState } from 'react';
import './Menu.css'
import ItemList from '../ItemList/ItemList';

function Menu({menus = [], onItemSelect = () => {}}) {
    const [selectedMenu, setSelectedMenu] = useState(0)

    function MenuTabClicked(tabIndex){
        setSelectedMenu(tabIndex)
    }

    function RenderMenuTabs(){
        return menus.map( (menu, index) => {
            return (
                <div onClick={() => MenuTabClicked(index)} className={`tab ${selectedMenu === index ? 'selected' : ''}`}>
                    <img src={menu.img} alt=''></img>
                </div>
            )
        })
    }
    return (
        <div className='menu'>
            <div className='menu-tabs'>
                {RenderMenuTabs()}
            </div>
            <ItemList onItemSelect={onItemSelect} menuItemsData={menus.length === 0 ? [] : menus[selectedMenu].data}></ItemList>
        </div>
    );
}

export default Menu;