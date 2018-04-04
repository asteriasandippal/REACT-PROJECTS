import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import CreateForm from './CreateForm';

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCreate: false
        }
        this.onShowCreate = this.onShowCreate.bind(this);
    }
    onShowCreate() {
        this.setState({showCreate: !this.state.showCreate});
    }
    render() {
        return(
            <div className="row">
                <RecipeList onHandleCreate={this.onShowCreate}/>
                {this.state.showCreate ? <CreateForm/> : <RecipeDetails/>}
            </div>
        );
    }
}
