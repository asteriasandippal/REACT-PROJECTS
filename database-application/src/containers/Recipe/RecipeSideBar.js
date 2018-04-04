import React from 'react';
import Button from '../../components/Button';
import RecipeList from '../../components/RecipeList';

function RecipeSideBar(props) {
    return(
        <div className="col-sm-4">
            <div className="mb-3">
                <Button 
                    text="Create new Recipe" 
                    onButtonClick={props.onHandleCreate}
                />
            </div>
            <div>
                <ul className="list-group">
                    {props.recipes.map(
                        recipe => <RecipeList 
                            className="list-group-item"
                            key={recipe.id}
                            onClick={props.onSelectedRecipe.bind(null, recipe)}
                        >
                            {recipe.recipeName}
                        </RecipeList>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default RecipeSideBar;
