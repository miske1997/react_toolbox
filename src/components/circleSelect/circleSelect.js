import React from 'react';
import './circleSelect.css';


function CircleSelect({placeholder = 'none', image = false, color = false, options = []}) {

    function ToggleOpen() {
        const select = document.querySelector('.circle-select-container')
        select.style.minWidth = select.style.minWidth !== "" ? "" : `${select.clientWidth * 3.5}px`
        select.style.height = select.style.height !== "" ? "" : `${select.clientHeight * 3.5}px`
        //select.style.transform = select.style.transform !== "" ? "" : `rotate(360deg)`

        select.querySelectorAll('.circle-option-container')?.forEach(element => {
            element.style.opacity = element.style.opacity !== "" ? "" : 1       
            //element.style.display = element.style.display !== "" ? "" : "flex"   
        });
    }
    function OptionClicked(optionData) {
        ToggleOpen()
        const selectText = document.querySelector('.circle-select-container>p')
        const selectDiv = document.querySelector('.circle-select-container>div')
        const selectImg = document.querySelector('.circle-select-container>img')
        if(color)
            selectDiv.style.backgroundColor = optionData.color
        else if(image)
            selectImg.src = optionData.src
        else
            selectText.innerHTML = optionData.text
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
    function GetOptionContentByType(optionData) {
        if(color){
            return (<div className='circle-color-option' style={{backgroundColor: optionData.color, }} ></div>)
        }
        else if(image){
            return (<img src={optionData.src}/>)
        }
        else{
            return (<p>{optionData.text}</p>)
        }
    }
    function PlaceOptions() {
        const increment = 360 / options.length
        return options.map((optionData, index) => {
            return (
                <div onClick={(e) => {e.stopPropagation(); OptionClicked(optionData)}} style={CalcOptionPos(index, increment)}  className='circle-option-container'>
                    {GetOptionContentByType(optionData)}
                </div>
            )
        });
    }

    return (
        <div className='circle-select-main'>
            <div onClick={SelectClicked} className='circle-select-container'>
                {GetOptionContentByType({color: placeholder, src: ''})}
                {PlaceOptions()}
            </div>

        </div>
     );
}

export default CircleSelect;