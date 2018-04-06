import React from 'react';
import RecipeSideBar from './RecipeSideBar';
import RecipeDetails from './RecipeDetails';
// import CreateForm from './CreateForm';
import CreateEditForm from './CreateEditForm';

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
        this.handleEditRecipe = this.handleEditRecipe.bind(this);
        this.handleRecipeEdited = this.handleRecipeEdited.bind(this);
    }
    onShowCreate() {
        this.setState({
            showCreate: true,
            selectedRecipe: null,
        });
    }
    onHandleCreateRecipe(recipeName, indegredients, instructions) {
        const newRecipe = this.state.recipes.concat({
            id: new Date().getTime(),
            recipeName, 
            indegredients, 
            instructions
        });
        this.updateRecipes(newRecipe);
    }

    handleRecipeEdited(recipeName, indegredients, instructions) {

        const {
            recipes, 
            selectedRecipe
        } = this.state;

        const editRecipe = Object.assign({}, selectedRecipe, {
            recipeName, 
            indegredients, 
            instructions
        });

        const newRecipe = recipes.map(recipe => 
            recipe === selectedRecipe ? editRecipe : recipe)

        this.updateRecipes(newRecipe);
        this.onHandleSelectRecipe(editRecipe);
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

    handleEditRecipe() {
        this.setState({
            showCreate: true
        })
    }

    render() {
        const {
            recipes, 
            selectedRecipe, 
            showCreate, 
            search
        } = this.state;
        const filterRecipes = recipes.filter(
            recipe => recipe.recipeName.toLowerCase().indexOf(search.toLowerCase()) > -1);
        return(
            <div className="row">
                <RecipeSideBar 
                    onHandleCreate={this.onShowCreate}
                    recipes = {filterRecipes}
                    onSelectedRecipe={this.onHandleSelectRecipe}
                    handleSearchChange={this.handleSearchChange}
                />
                {showCreate ? 
                    <CreateEditForm 
                        onCreate={this.onHandleCreateRecipe}
                        onEdit={this.handleRecipeEdited}
                        recipe={selectedRecipe}
                    /> 
                    : <RecipeDetails 
                        recipe={selectedRecipe} 
                        onDelete={this.handleDeleteRecipe}
                        onEdit={this.handleEditRecipe}
                    />
                }
            </div>
        );
    }
}
