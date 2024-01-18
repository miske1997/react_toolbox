import React, { useEffect, useRef } from 'react';
import './3dCard.css'

function Card3D({children, tiltX = 30, tiltY = 30, invertTilt = false}) {
    let cardRef = useRef()
    let cardConRef = useRef()
    let tilt = false
    let currentTiltX = 0
    let currentTiltY = 0
    let animInterval
    let debounce = false
    function mouseEnter(){
        clearInterval(animInterval)
        cardRef.current.style.transform = ""
        tilt = true
    }
    function mouseLeave(){
        tilt = false
        clearInterval(animInterval)
        animInterval = setInterval(() => {
            if (Math.abs(currentTiltX) < 1 && Math.abs(currentTiltY) < 1){
                cardRef.current.style.transform = ""    
                clearInterval(animInterval)
            }
            currentTiltX *= 0.9
            currentTiltY *= 0.9
            cardRef.current.style.transform = `rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg)`
        }, 10);
    }
    function mouseMove(event){
        if (!tilt)
            return
        const card = cardRef.current
        const cardHeight =  card.clientHeight / 2
        const cardWidth =  card.clientWidth / 2
        const cardCenterX = card.offsetLeft + cardWidth
        const cardCenterY = card.offsetTop + cardHeight

        const diviationY = Math.min(Math.max(cardCenterY - event.clientY, -cardHeight), cardHeight) / cardHeight;
        const diviationX = Math.min(Math.max(cardCenterX - event.clientX, -cardWidth), cardWidth) / cardWidth;
        currentTiltX = tiltX * diviationY * (invertTilt ? -1 : 1)
        currentTiltY = tiltY * diviationX * (invertTilt ? -1 : 1)
        card.style.transform = `rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg)`
    }

    return (
        <div className='card-container' ref={cardConRef} onMouseMove={mouseMove} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className='card3d' ref={cardRef}>
                {children}
            </div>
        </div>
     );
}

export default Card3D;