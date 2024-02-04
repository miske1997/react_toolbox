import React, { useRef , useEffect} from 'react';
import './RotatingMenuItem.css'
import gsap from 'gsap';

const DegreesToRads = deg => (deg * Math.PI) / 180.0;

function RotatingMenuItem({name = '', src = '', rotation = 0, pos = 0, active = false, offset = 0}) {
    const itemRef = useRef()
    const nameRef = useRef()
    let animDelay
    useEffect(() => {
        if (active){
            gsap.to(itemRef.current, {opacity: 1, duration: 1, delay: 0.2})
            nameRef.current.style.display = ``
            animDelay = setTimeout(() => {
                itemRef.current.style.scale = `1.5`
                nameRef.current.style.maxWidth = `1000px`

            }, 500);
        }
        else{
            clearTimeout(animDelay)
            itemRef.current.style.scale = `1`
            nameRef.current.style.maxWidth = ``
            nameRef.current.style.display = `none`
            gsap.to(itemRef.current, {opacity: 0, duration: 1, delay: 0.2})
        }
        itemRef.current.style.transform = `rotateZ(${rotation}deg)`
    });
    function GetPos(){
        return {
            top: `${50 + 53 * Math.sin(DegreesToRads((pos - 1) * -90 + offset))}%`,
            left: `${50 + 53 * Math.cos(DegreesToRads((pos - 1) * -90 + offset))}%`,
        }
        
    }
    return (
        <div style={GetPos()} ref={itemRef} className='rotating-menu-item'>
            <img src={src} alt=''></img>
            <div ref={nameRef}>
                <p>{name}</p>
            </div>
        </div>
     );
}

export default RotatingMenuItem;