import React from 'react';
import Visualize from './Visualize';

function travelLength(values) {
    let length = 0;
    length += Math.abs(10 - values[0]);
    for (let i = 1; i < values.length; i++) {
        length += Math.abs(values[i] - values[i - 1]);
    }
    return length
}

const NOOP = ({input}) => {
    const values = input.split(',');
    const newValues = [];

    for (let i = 0; i < values.length; i++) {
        newValues.push(values[i]);
    }

    return (
        <div>
            <Visualize algorithm="NOOP" input={input} values={newValues} length={travelLength(newValues)}/>
        </div>
    );
};

const SSTF = ({input}) => {
    const values = input.split(',');
    const newValues = [];
    let last = 10;
    while (newValues.length < values.length) {
        let shortest = 0;
        for (let i = 0; i < values.length; i++) {
            const potential = values[i];
            if (!newValues.includes(potential) && (Math.abs(potential - last) < Math.abs(shortest - last) || shortest === 0)) {
                shortest = potential;
            }
        }
        newValues.push(shortest);
        last = shortest;
    }

    return (
        <div>
            <Visualize algorithm="SSTF" input={input} values={newValues} length={travelLength(newValues)}/>
        </div>
    );
};

const SCAN = ({input}) => {
    const values = input.split(',');
    const newValues = [];
    let last = 10;
    for (last; last < 50; last++) {
        if (values.includes(last.toString()) || last === 49) {
            newValues.push(last);
        }
    }
    last = 9;
    for (last; last >= 0; last--) {
        if (values.includes(last.toString())) {
            newValues.push(last);
        }
    }
    return (
        <div>
            <Visualize algorithm="SCAN" input={input} values={newValues} length={travelLength(newValues)}/>
        </div>
    );
};

const LOOK = ({input}) => {
    const values = input.split(',');
    const newValues = [];
    let last = 10;
    for (last; last < 50; last++) {
        if (values.includes(last.toString())) {
            newValues.push(last);
        }
    }
    last = 9;
    for (last; last >= 0; last--) {
        if (values.includes(last.toString())) {
            newValues.push(last);
        }
    }
    return (
        <div>
            <Visualize algorithm="LOOK" input={input} values={newValues} length={travelLength(newValues)}/>
        </div>
    );
};

export {
    NOOP,
    SSTF,
    SCAN,
    LOOK
};