import React from 'react';

function RecipeDetails(props) {
    return(
        <div className="col-sm-8">
            {props.recipe ? 
                <div className="jumbotron">
                    <h2 className="display-3 mb-3">{ props.recipe.recipeName }</h2>

                    <h2 className="display-5 mb-4">Indegredients</h2>
                    <p>{props.recipe.indegredients}</p>

                    <h2 className="display-5 mb-4">Instructions</h2>
                    <p>{props.recipe.instructions}</p>
                </div> 
            : 
            <div className="jumbotron">Choose a recipe from the left hand side, or create a new one</div>}
        </div>
    );
}

export default RecipeDetails;