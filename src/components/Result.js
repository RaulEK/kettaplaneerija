import React from 'react';
import {NOOP, SSTF, SCAN, LOOK} from "./Algorithms";

const algorithms = {
    NOOP: NOOP,
    SSTF: SSTF,
    SCAN: SCAN,
    LOOK: LOOK
};

const Result = ({algorithm, array}) => {
    const SpecificAlgorithm = algorithms[algorithm];
    return (
        <SpecificAlgorithm input={array}/>
    )
};

export default Result;