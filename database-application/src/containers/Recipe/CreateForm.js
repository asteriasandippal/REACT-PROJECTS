import React from 'react';
import PropTypes from 'prop-types';

class CreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeName: '',
            indegredients: '',
            instructions: ''
        }
        this.inputHandleChange = this.inputHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
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

        this.props.onSubmit(recipeName, indegredients, instructions);
    }

    render() {
        const {
            recipeName,
            indegredients,
            instructions
        } = this.state;
        return(
            <div className="col-sm-8">
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label htmlFor="recipeName">Recipe Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="recipeName"
                            name="recipeName"
                            placeholder="Enter Recipe name here"
                            value={recipeName}
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
                    <button 
                        type="submit" 
                        className="btn btn-primary btn-block"
                    >
                        Create
                    </button>
                </form>
            </div>
        );
    }
}

CreateForm.defaultProps = {
    onSubmit: ()=> {}
};

CreateForm.proptype = {
    onSubmit: PropTypes.func
};

export default CreateForm;
