import React from 'react';

function RecipeList(props) {
    return(
        <a href="#" className={props.className} onClick={props.onClick}>
            {props.children}
        </a>
    );
}

export default RecipeList;
