import React, { useEffect, useRef, useState } from 'react';
import './RotatingMenu.css'
import RotatingMenuItem from '../RotatingMenuItem/RotatingMenuItem'



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
    }, [])

    useEffect(() => {
        menuRef.current.style.transform = `rotateZ(${angle}deg)`
    })

    function DrawItems(){
        console.log('Draw', angle);
        itemsList = itemsData.map((data, index) => {
            return (
                <RotatingMenuItem rotation={-angle} active={(((angle / -90) + 1) % 4) === index} src={data.src} pos={index}></RotatingMenuItem>
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