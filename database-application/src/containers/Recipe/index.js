import React from 'react';
import RecipeSideBar from './RecipeSideBar';
import RecipeDetails from './RecipeDetails';
import CreateForm from './CreateForm';

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCreate: false,
            recipes: [],
            selectedRecipe: null
        }
        this.onShowCreate = this.onShowCreate.bind(this);
        this.onHandleCreateRecipe = this.onHandleCreateRecipe.bind(this);
        this.onHandleSelectRecipe = this.onHandleSelectRecipe.bind(this);
    }
    onShowCreate() {
        this.setState({showCreate: !this.state.showCreate});
    }
    onHandleCreateRecipe(recipeName, indegredients, instructions) {
        console.log(recipeName, indegredients, instructions);
        const NewRecipe = this.state.recipes.concat({
            id: new Date().getTime(),
            recipeName, 
            indegredients, 
            instructions
        });
        this.setState({
            recipes: NewRecipe
        });
    }
    onHandleSelectRecipe(recipe) {
        this.setState({
            selectedRecipe: recipe,
            showCreate: false
        });
    }
    render() {
        return(
            <div className="row">
                <RecipeSideBar 
                    onHandleCreate={this.onShowCreate}
                    recipes = {this.state.recipes}
                    onSelectedRecipe={this.onHandleSelectRecipe}
                />
                {this.state.showCreate ? 
                    <CreateForm onSubmit={this.onHandleCreateRecipe}/> 
                    : <RecipeDetails recipe={this.state.selectedRecipe}/>
                }
            </div>
        );
    }
}
