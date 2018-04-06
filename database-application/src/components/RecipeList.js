import React from 'react';

function RecipeList(props) {
    const pageStopped = function(e) {
        e.preventDefault();
        props.onClick();
    }
    return(
        <a 
            href="#/" 
            className={props.className} 
            onClick={pageStopped}>
                {props.children}
        </a>
    );
}

export default RecipeList;
