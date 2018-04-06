import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image_url} alt={props.name}/>
            <div className="card-body">
                {props.name ? <h5 className="card-title">{props.name}</h5> : ''}
                {props.description ? <p className="card-text">{props.description}</p> : ''}
            </div>
        </div>        
    );
}

export default Card;
