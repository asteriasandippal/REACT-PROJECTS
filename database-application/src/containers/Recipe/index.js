import React from 'react';
import RecipeSideBar from './RecipeSideBar';
import RecipeDetails from './RecipeDetails';
import CreateForm from './CreateForm';

const LOCAL_STORAGE_KEY = 'recipes';

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);

        const localStorageRecipes = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        this.state = {
            showCreate: false,
            recipes: localStorageRecipes ? JSON.parse(localStorageRecipes) : [],
            selectedRecipe: null,
            search: ''
        }
        this.onShowCreate = this.onShowCreate.bind(this);
        this.onHandleCreateRecipe = this.onHandleCreateRecipe.bind(this);
        this.onHandleSelectRecipe = this.onHandleSelectRecipe.bind(this);
        this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    onShowCreate() {
        this.setState({showCreate: !this.state.showCreate});
    }
    onHandleCreateRecipe(recipeName, indegredients, instructions) {
        console.log(recipeName, indegredients, instructions);
        const newRecipe = this.state.recipes.concat({
            id: new Date().getTime(),
            recipeName, 
            indegredients, 
            instructions
        });
        this.updateRecipes(newRecipe);
    }
    onHandleSelectRecipe(recipe) {
        this.setState({
            selectedRecipe: recipe,
            showCreate: false
        });
    }

    handleDeleteRecipe(recipeToDelete) {
        const newRecipe = this.state.recipes.filter(
            recipe => recipe !== recipeToDelete
        )
        this.updateRecipes(newRecipe);

        this.setState({
            selectedRecipe: null
        });
    }

    updateRecipes(newRecipe) {
        this.setState({
            recipes: newRecipe
        });

        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipe))
    }

    handleSearchChange(search) {
        this.setState({
            search
        });
    }

    render() {
        const filterRecipes = this.state.recipes.filter(
            recipe => recipe.recipeName.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1);
        return(
            <div className="row">
                <RecipeSideBar 
                    onHandleCreate={this.onShowCreate}
                    recipes = {filterRecipes}
                    onSelectedRecipe={this.onHandleSelectRecipe}
                    handleSearchChange={this.handleSearchChange}
                />
                {this.state.showCreate ? 
                    <CreateForm onSubmit={this.onHandleCreateRecipe}/> 
                    : <RecipeDetails 
                        recipe={this.state.selectedRecipe} 
                        onDelete={this.handleDeleteRecipe}
                    />
                }
            </div>
        );
    }
}
