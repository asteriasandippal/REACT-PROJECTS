import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            photos: []
        }
        this.onSearching = this.onSearching.bind(this);
    }

    onSearching(query) {
        console.log(query);
        const apiUrl = `https://api.500px.com/v1/photos/search?consumer_key=u4c2ZyL3DxwqagztgOjYT5K1ii1u72ILA0zfoyBE&image_size[]=3&image_size[]=4&term=${query}`
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({photos : data.photos}))
            .catch(error => {console.log(error)})
    }

    render() {
        return (
            <div>
                <SearchForm onSearch={this.onSearching} />
                <SearchResults showPhotos={this.state.photos}/>
            </div>
        );
    }
}

export default Search;
