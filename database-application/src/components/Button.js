import React from 'react';

function Button(props) {
    return(
        <button 
            type="button" 
            className="btn btn-primary btn-block"
            onClick={props.onButtonClick}
        >
            {props.text}
        </button>
    );
}

export default Button;