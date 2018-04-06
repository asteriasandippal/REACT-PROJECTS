import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

class CreateEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeName: '',
            indegredients: '',
            instructions: '',
            createdRecipe: false
        }
        this.inputHandleChange = this.inputHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.setStateFormRecipe = this.setStateFormRecipe.bind(this);
    }
    componentDidMount() {
        this.setStateFormRecipe(this.props.recipe);
    }

    componentWillReceiveProps(nextProps) {
        this.setStateFormRecipe(nextProps.recipe);
    }

    setStateFormRecipe(recipe) {
        this.setState ({
            recipeName: recipe ? recipe.recipeName : '',
            indegredients: recipe ? recipe.indegredients : '',
            instructions: recipe ? recipe.instructions : ''
        });
    }

    inputHandleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({ 
            [name]: value 
        });
    }

    onHandleSubmit(event) {
        event.preventDefault();
        const {
            recipeName,
            indegredients,
            instructions
        } = this.state;

        if (this.props.recipe) {
            this.props.onEdit(recipeName, indegredients, instructions);
        } else {
            this.props.onCreate(recipeName, indegredients, instructions);
            this.resetForm();
            this.setState({
                createdRecipe : true
            });
            this.refs.recipeName.focus();
        }
    }

    resetForm() {
        this.setState ({
            recipeName: '',
            indegredients: '',
            instructions: ''
        });
    }

    render() {
        const {
            recipeName,
            indegredients,
            instructions,
            createdRecipe
        } = this.state;
        const { recipe } = this.props;
        return(
            <div className="col-sm-8">
                <form onSubmit={this.onHandleSubmit}>
                    {createdRecipe && <div className="p-3 mb-3 bg-success text-white">Your Recipe was Created.</div>}
                    <div className="form-group">
                        <label htmlFor="recipeName">Recipe Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="recipeName"
                            name="recipeName"
                            placeholder="Enter Recipe name here"
                            value={recipeName}
                            ref="recipeName"
                            onChange={this.inputHandleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipeIngredients">Recipe Ingredients:</label>
                        <textarea 
                            className="form-control" 
                            id="recipeIngredients" 
                            name="indegredients"
                            placeholder="Enter Ingredients name here"
                            rows="7"
                            value={indegredients}
                            onChange={this.inputHandleChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipeInstructions">Recipe Instructions:</label>
                        <textarea 
                            className="form-control" 
                            id="recipeInstructions" 
                            name="instructions"
                            placeholder="Enter Instructions here"
                            rows="7"
                            value={instructions}
                            onChange={this.inputHandleChange}
                        ></textarea>
                    </div>
                    <Button 
                        text={recipe ? 'Edit' : 'Create'} 
                        className="primary"
                        buttonstyle="inline"
                        onButtonClick={this.onHandleSubmit}
                    />
                </form>
            </div>
        );
    }
}

CreateEditForm.defaultProps = {
    onCreate: ()=> {}
};

CreateEditForm.proptype = {
    onCreate: PropTypes.func
};

export default CreateEditForm;
