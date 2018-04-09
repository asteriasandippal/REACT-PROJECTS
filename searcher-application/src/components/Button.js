import React from 'react';

function Button(props) {
    return (
        <button 
            className={`btn btn-primary ${props.className}`} 
            type={props.type ? props.type : 'button'}
            onClick={props.onClick}
        >
            {props.text}
        </button>        
    );
}

export default Button;
