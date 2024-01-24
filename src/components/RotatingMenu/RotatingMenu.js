import React, { useEffect, useRef, useState } from 'react';
import './RotatingMenu.css'
import RotatingMenuItem from '../RotatingMenuItem/RotatingMenuItem'
import { func } from 'prop-types';



function RotatingMenu({itemsData = []}) {
    let [angle, setAngle] = useState(0)
    let menuRef = useRef()
    let itemsList = []
    function KeyDown(event){
        // console.log("munem");
        if (event.key == 'ArrowLeft'){
            setAngle(curangle => curangle + 90)
        }
        if (event.key == 'ArrowRight'){
            setAngle(curangle => curangle - 90)
        }
        //menuRef.current.style.transform = `rotateZ(${angle}deg)`
    }

    useEffect(() => {
        window.addEventListener("keydown", KeyDown)

        return () => {
            window.removeEventListener("keydown", KeyDown)
        }
    }, [])

    useEffect(() => {
        menuRef.current.style.transform = `rotateZ(${angle}deg)`
    })
    function IsItemActive(index){
        // -90         3       0 === 
        return (((angle / 90) % 4) === index || (4 + (angle / 90) % 4) === index) && (Math.floor(angle / 360) === Math.floor(index / 4) || Math.floor((angle % (90 * itemsData.length)) / 360) === (Math.floor((index - itemsData.length) / 4) ))
    }
    function DrawItems(){
        console.log('Draw', angle, Math.floor(angle / 360));
        itemsList = itemsData.map((data, index) => {
            return (
                <RotatingMenuItem rotation={-angle} active={IsItemActive(index)} src={data.src} pos={index}></RotatingMenuItem>
            )
        })

        return itemsList
    }

    return (
        <div ref={menuRef} className='rotating-menu-ring'>
           {DrawItems()}
        </div>
    );
}

export default RotatingMenu;