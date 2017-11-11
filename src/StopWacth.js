import React from 'react';
import './StopWacth.css'

class StopWacth extends React.Component {
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = { seconds: 0 };
    }
    handleStart(){
        this.incrementSeconds = setInterval(()=>{
            this.setState(prevState =>({seconds: prevState.seconds+1}))
        },500)
    }
    handlePause(){
        clearInterval(this.incrementSeconds);
    }
    handleReset(){
        clearInterval(this.incrementSeconds);
        this.setState(prevState =>({seconds: 0}))
    }
    render() {
        return (
            <div className='div-timer'>
                <h3 className='title'>Seconds: {this.state.seconds}</h3> 
                <div className='div-btn'>
                    <button className='btn' onClick={this.handleStart}>start</button>
                    <button className='btn' onClick={this.handlePause}>pause</button>
                    <button className='btn' onClick={this.handleReset}>reset</button>
                </div>
            </div>
        );
    }
}

export default StopWacth;