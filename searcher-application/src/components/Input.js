import React from 'react';

function Input(props) {
    return (
        <input 
            type={props.type || 'text'}
            className={`form-control ${props.className}`} 
            placeholder={props.placeholder || ''} 
            aria-label={props.placeholder || ''}
            onChange={props.onChange}
        />     
    );
}

export default Input;
