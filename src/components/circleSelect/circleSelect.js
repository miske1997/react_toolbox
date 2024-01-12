import React from 'react';
import './circleSelect.css';


function CircleSelect({placeholder = 'none', image = false, color = false, options = []}) {
    function ToggleOpen() {
        const select = document.querySelector('.circle-select-container')
        select.style.width = select.style.width !== "" ? "" : `${select.clientWidth * 3.5}px`
        select.style.height = select.style.height !== "" ? "" : `${select.clientHeight * 3.5}px`
        //select.style.transform = select.style.transform !== "" ? "" : `rotate(360deg)`

        select.querySelectorAll('.circle-option-container')?.forEach(element => {
            element.style.opacity = element.style.opacity !== "" ? "" : 1       
            //element.style.display = element.style.display !== "" ? "" : "flex"   
        });
    }
    function OptionClicked(optionText) {
        ToggleOpen()
        const selectText = document.querySelector('.circle-select-container>p')
        selectText.innerHTML = optionText
    }
    function SelectClicked(event){
        ToggleOpen()

    }
    const DegreesToRads = deg => (deg * Math.PI) / 180.0;
    function CalcOptionPos(index, increment){
        const top = 50 * Math.sin(DegreesToRads(index * increment))
        const left = 50 * Math.cos(DegreesToRads(index * increment))
        return { top: `${50 + top}%`, left: `${50 + left}%`}
    }
    function PlaceOptions() {
        const increment = 360 / options.length
        return options.map((optionData, index) => {
            return (
                <div onClick={(e) => {e.stopPropagation(); OptionClicked(optionData.text)}} style={CalcOptionPos(index, increment)}  className='circle-option-container'>

                    (<p>{optionData.text}</p>)
                    
                </div>
            ) 
        });
    }

    return (
        <div onClick={SelectClicked} className='circle-select-container'>
            <p>{placeholder}</p>
            {PlaceOptions()}
        </div>
     );
}

export default CircleSelect;