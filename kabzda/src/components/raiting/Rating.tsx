import React from 'react';

const Rating = () => {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
};

function Star() {
    return (
        <span>Star </span>
    )
}

export default Rating;