import React from 'react';

function SearchBox(props) {
    return (
        <div className="form-group search-block mb-3">
            <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Enter Search here"
                autoComplete={false}
                onChange={event => props.onChange(event.target.value)}
            />
        </div>
    );
}

export default SearchBox;
