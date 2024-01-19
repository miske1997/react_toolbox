import React from "react";


function dimanicAnimator(props) {
    console.log(props.children[0].props.keyFrames)
    return (
        <div>
            {props.children}
        </div>
     );
}
export default dimanicAnimator;