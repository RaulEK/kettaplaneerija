import React from 'react';

class Visualize extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            algorithm: props.algorithm,
            input: props.input,
            values: props.values,
            length: props.length
        }
    }

    componentDidMount() {

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        ctx.font = '14px Comic Sans Mr';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'bottom';
        for (let i = 0; i < 50; i++) {
            ctx.fillText(i, i * 20 + 4, 20);
        }
        for (let i = 0; i < 50; i++) {
            ctx.beginPath();
            ctx.rect(i * 20, 25, 20, 20);
            ctx.stroke();
        }
        for (let i = 0; i < this.state.values.length; i++) {
            if (i === 0) {
                ctx.beginPath();
                ctx.moveTo(10 * 20 + 10, i * 20 + 55);
                ctx.fillRect(10 * 20 + 7, i * 20 + 52, 7, 7);
            }
            ctx.lineTo(this.state.values[i] * 20 + 10, i * 20 + 55);
            ctx.fillRect(this.state.values[i] * 20 + 7, i * 20 + 52, 7, 7);
            ctx.fillText('X', this.state.values[i] * 20 + 4, 40, 20);
        }
        ctx.stroke();
    }

    render() {
        const pStyle = {
            margin: '5px 10px 5px 10px'
        };
        return (
            <>
                <p style={pStyle}>Visualiseeritud: <strong>{this.state.algorithm} järjendil {this.state.input}</strong>
                </p>
                <p style={pStyle}>Summaarne teepikkus: <strong>{this.state.length}</strong></p>
                <div>
                    <canvas ref="canvas" width={1500} height={260}></canvas>
                </div>
            </>
        );
    }
}

export default Visualize;