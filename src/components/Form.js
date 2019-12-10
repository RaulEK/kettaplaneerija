import React from 'react';

const Form = ({id, state, onChange}) => {

    return (
        <>
            <label className="label">
                <input type="radio" value={id} checked={state === id} onChange={() => onChange(id)}/>
            </label>
        </>
    );
};

export default Form;