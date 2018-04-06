import React from 'react';
import Button from '../../components/Button';

function RecipeDetails(props) {
    const confirmDelete = () => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            props.onDelete(props.recipe);
        }
    }
    const { 
        recipe,
        onEdit
    } = props;
    return(
        <div className="col-sm-8">
            {props.recipe ? 
                <div className="jumbotron">
                    <h2 className="display-3 mb-3">{ recipe.recipeName }</h2>

                    <h2 className="display-5 mb-4">Indegredients</h2>
                    <p>{recipe.indegredients}</p>

                    <h2 className="display-5 mb-4">Instructions</h2>
                    <p>{recipe.instructions}</p>

                    <Button 
                        text="Delete" 
                        className="danger" 
                        buttonstyle="inline"
                        onButtonClick={confirmDelete}
                    />

                    <Button 
                        text="Edit" 
                        className="danger" 
                        buttonstyle="inline"
                        onButtonClick={onEdit}
                    />

                </div> 
            : 
            <div className="jumbotron">Choose a recipe from the left hand side, or create a new one</div>}
        </div>
    );
}

export default RecipeDetails;
