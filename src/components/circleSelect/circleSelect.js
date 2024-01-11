import React from 'react';
import './circleSelect.css';


function CircleSelect({placeholder = 'none'}) {

    function SelectClicked(event){
        const select = event.target
        console.log(select.clientWidth)
        console.log(select.clientHeight)
        select.style.width = select.style.width !== "" ? "" : `${select.clientWidth * 2}px`
        select.style.height = select.style.height !== "" ? "" : `${select.clientHeight * 2}px`
    }

    const option = (
        <div className='circle-option-container'>
            <p></p>
        </div> 
    )

    return ( 
        <div onClick={SelectClicked} className='circle-select-container'>
            <p>{placeholder}</p>
        </div>
     );
}

export default CircleSelect;