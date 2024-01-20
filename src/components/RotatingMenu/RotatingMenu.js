import React, { useEffect, useRef } from 'react';

function RotatingMenu({angle = 0}) {
    let menuRef = useRef()


    useEffect(() => {
        if (!menuRef.current)
            return
        menuRef.current.style.transform = `rotateX(${angle}deg)`
    }, [angle])
    return (
        <div className='rotating-menu-ring'>

        </div>
     );
}

export default RotatingMenu;