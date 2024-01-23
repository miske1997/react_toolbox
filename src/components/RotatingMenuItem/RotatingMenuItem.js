import React, { useRef , useEffect} from 'react';
import './RotatingMenuItem.css'
import gsap from 'gsap';

const DegreesToRads = deg => (deg * Math.PI) / 180.0;

function RotatingMenuItem({src = '', rotation = 0, pos = 0, active = false}) {
    const itemRef = useRef()
    useEffect(() => {
        if (active){
            gsap.to(itemRef.current, {opacity: 1, duration: 1, delay: 0.2})
        }
        else{
            gsap.to(itemRef.current, {opacity: 0, duration: 1, delay: 0.2})
        }
        itemRef.current.style.transform = `rotateZ(${rotation}deg)`
    });
    function GetPos(){
        return {
            top: `${50 + 50 * Math.sin(DegreesToRads(pos * 90))}%`,
            left: `${50 + 50 * Math.cos(DegreesToRads(pos * 90))}%`,
        }
        
    }
    return (
        <div style={GetPos()} ref={itemRef} className='rotating-menu-item'>
            <img src={src} alt=''></img>
        </div>
     );
}

export default RotatingMenuItem;