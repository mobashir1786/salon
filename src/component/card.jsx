import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.imgurl} alt={props.name} />
            <h1>{props.name}</h1>
        </div>
    );
}

export default Card;
