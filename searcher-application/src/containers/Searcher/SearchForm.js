import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.query);
    }

    render() {
        return (
            <div>
                <form className="pt-4 pb-4" onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <Input 
                            className="form-control-lg"
                            placeholder="Search phots..."
                            onChange={(e) => this.setState({ query: e.target.value })}
                        />
                        <div className="input-group-append">
                            <Button 
                                text="Search" 
                                className="btn-lg"
                                onClick={this.handleSubmit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchForm;
