import React from 'react';

const Button = ({onClick, text}) => {
    return (
        <>
            <button onClick={() => onClick(text)}>{text}</button>

        </>
    );
};

export default Button;