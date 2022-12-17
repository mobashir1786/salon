import React from 'react';

const Card1 = (props) => {
    return (
        <div className='card1'>
            <h1>{props.head}</h1>
            <h3>{props.para}</h3>
        </div>
    );
}

export default Card1;
