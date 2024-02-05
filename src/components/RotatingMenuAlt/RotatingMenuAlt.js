import React, { useEffect, useRef } from 'react';
import './RotatingMenuAlt.css'
import RotatingMenuItem from '../RotatingMenuItem/RotatingMenuItem'

const defaultData = [
    {text: ""},
    {text: ""},
    {text: ""},
    {text: ""},
]

function RotatingMenuAlt({itemsData = defaultData, menuData = {position: 0, activeImg: '', prevImgSrc: ''}}) {
    const angle = menuData.position * 90
    let menuRef = useRef()
    console.log(angle)
    useEffect(() => {
        menuRef.current.style.transform = `rotateZ(${angle}deg)`
    })
    function IsItemActive(index){
        return (((angle / 90) % 4) === index)
    }
    function DrawItems(){
        const offset = window.screen.width > 600 ? -20 : 0
        let isActive = false
        return itemsData.map((data, index) => {
            isActive = IsItemActive(index)
            return (<RotatingMenuItem name={data.text} rotation={-angle} src={isActive ? menuData.activeImg : menuData.prevImgSrc} offset={offset} active={isActive} pos={index}></RotatingMenuItem>)
        })
    }

    return (
        <div ref={menuRef} className='rotating-menu-ring'>
           {DrawItems()}
        </div>
    );
}

export default RotatingMenuAlt;