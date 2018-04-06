import React from 'react';

function Button(props) {
    const buttonClass = props.className ? props.className : `primary`;
    const buttonStyled = props.buttonstyle ? props.buttonstyle : `block`;
    return(
        <button 
            type="button" 
            className={`btn btn-${buttonClass} btn-${buttonStyled}`}
            onClick={props.onButtonClick}
        >
            {props.text}
        </button>
    );
}

export default Button;