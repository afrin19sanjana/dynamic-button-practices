import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li><a href={route.path}></a> {route.name} </li>
        </div>
    );
};

export default Link;