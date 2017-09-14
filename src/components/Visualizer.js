import React, { Component } from 'react';
import './Visualizer.css';


class Visualizer extends Component {

    

    addFourFourBlocks = () => {
        const standardTime = 16;
        return [...Array(standardTime)].map((e, i) => <div className="standardBlocks" key={i}></div>);
    }

    addThreeFourBlocks = () => {
        const waltzTime = 12;
        return [...Array(waltzTime)].map((e, i) => <div className="standardBlocks" key={i}></div>);        
    }

    render() {
        return (
            <div>
            <div className="visualizer">
                {this.addFourFourBlocks()}
            </div>
            </div>
        );
    }
}

export default Visualizer