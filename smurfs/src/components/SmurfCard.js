import React from 'react';

const SmurfCard = props => {
    return (
        <div className="smurf">
            <h1 className="smurf-name">{props.smurf.name}</h1>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    );
};

export default SmurfCard;