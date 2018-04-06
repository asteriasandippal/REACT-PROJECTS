import React from 'react';

function GridBlock(props) {
    return (
        <div className={`col-sm-${props.colume}`}>
            {props.children}
        </div>        
    );
}

export default GridBlock;
