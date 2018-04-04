import React from 'react';
import Button from '../../components/Button';

function RecipeList(props) {
    return(
        <div className="col-sm-4">
            <div className="mb-3">
                <Button 
                    text="Create new Recipe" 
                    onButtonClick={props.onHandleCreate}
                />
            </div>
            <div>
                sasas
            </div>
        </div>
    );
}

export default RecipeList;
