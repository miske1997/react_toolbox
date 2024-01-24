import React, { useRef , useEffect} from 'react';
import './RotatingMenuItem.css'
import gsap from 'gsap';

const DegreesToRads = deg => (deg * Math.PI) / 180.0;

function RotatingMenuItem({src = '', rotation = 0, pos = 0, active = false}) {
    const itemRef = useRef()
    let animDelay
    useEffect(() => {
        if (active){
            gsap.to(itemRef.current, {opacity: 1, duration: 1, delay: 0.2})
            animDelay = setTimeout(() => {
                itemRef.current.style.scale = `1.5`
            }, 500);
        }
        else{
            clearTimeout(animDelay)
            itemRef.current.style.scale = `1`
            gsap.to(itemRef.current, {opacity: 0, duration: 1, delay: 0.2})
        }
        itemRef.current.style.transform = `rotateZ(${rotation}deg)`
    });
    function GetPos(){
        return {
            top: `${50 + 50 * Math.sin(DegreesToRads((pos - 1) * -90))}%`,
            left: `${50 + 50 * Math.cos(DegreesToRads((pos - 1) * -90))}%`,
        }
        
    }
    return (
        <div style={GetPos()} ref={itemRef} className='rotating-menu-item'>
            <img src={src} alt=''></img>
        </div>
     );
}

export default RotatingMenuItem;