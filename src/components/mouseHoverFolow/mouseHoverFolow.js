import React, { useEffect, useRef } from 'react';
import './mouseHoverFolow.css';

function MouseHoverComponent({children}) {
    let hoverRef = useRef()
    let active = false
    useEffect(() => {

        if (children.length < 2)
            return
        hoverRef.current.style.display = 'none'
        hoverRef.current.style.position = 'fixed'
    },[children.length])
    function childEnter() {
        active = true
        hoverRef.current.style.display = ''
    }
    function childLeave() {
        active = false
        hoverRef.current.style.display = 'none'
    }
    function renderChildren(){
        if (!children)
            return
        let childrenNew = [React.cloneElement(children[0], { onMouseEnter: childEnter, onMouseLeave: childLeave })]
        childrenNew.push(React.cloneElement(children[1], { ref : hoverRef }))
        return childrenNew
    }
    function mouseMoved(event){
        if (!active)
            return
        
        hoverRef.current.style.top = `${event.clientY}px`
        hoverRef.current.style.left = `${event.clientX}px` 
    }
    return ( 
    <div onMouseMove={mouseMoved} className='hover-container'>
        {renderChildren()}
    </div>
    );
}

export default MouseHoverComponent;

