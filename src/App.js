import React, {useState, useEffect} from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

function App() {

    const algorithms = ['NOOP', 'SSTF', 'SCAN', 'LOOK'];
    const [arrays] = useState([
        {id: 1, name: 'Esimene', value: "2,5,13,29,7,1,18,40,49,4"},
        {id: 2, name: 'Teine', value: "1,10,44,2,12,3,13,20"},
        {id: 3, name: 'Kolmas', value: "45,6,16,9,33,28,11,37,49,25"},
    ]);

    const [userArray, setUserArray] = useState('');

    const handleUserArray = (event) => {
        setUserArray(event.target.value.trim().replace(/,{2,}/, ',').replace(/;{2,}/, ';').replace(/[^0-9,;]/, ""));
    };

    const [choice, setChoice] = useState('1');

    const handleChoice = (value) => {
        setChoice(value);
    };

    const [algorithm, setAlgorithm] = useState('NOOP');

    const handleAlgorithm = (value) => {
        setAlgorithm(value);
        setRender(false);
    };

    const [render, setRender] = useState(true);

    useEffect(() => {
        setRender(true)
    }, [render]);

    return (
        <div className="App">
            <h3> Vali või sisesta järjend (kujul 1,10,4,2,12,3,13,2) </h3>
            <div>
                {arrays.map(array =>
                    <div className="radio" key={array.id}>
                        <Form key={array.id} id={array.id} state={choice} onChange={handleChoice}/>
                        {array.name} {array.value}
                    </div>)}
                <div className="radio">
                    <label className="label">
                        <input type="radio" checked={choice === '4'} onChange={() => handleChoice('4')}/>
                    </label>
                    Enda oma <input value={userArray} onChange={handleUserArray}/>
                </div>
                <h4>Vajuta algoritmi nupule, et visualiseerimine käivitada.</h4>
            </div>
            <div>
                {algorithms.map(algorithm => <Button key={algorithm} onClick={handleAlgorithm} text={algorithm}/>)}
            </div>
            <div className="graph">
                {render && <Result algorithm={algorithm} array={choice !== '4' ? arrays[parseInt(choice) - 1].value : userArray}/>}
            </div>
        </div>
    );
}

export default App;
