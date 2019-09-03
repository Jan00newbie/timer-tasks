import React, { Component } from 'react'
import TimerActionButton from './TimerActionButton/TimerActionButton'


export class Timer extends Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }
    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    render() {
        return (
            <div className="timer">
                <h3>{this.props.title}</h3>
                <p>{this.props.category}</p>
                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                    />

                {/* <button onClick={this.props.onStartClick}>Start</button> */}
                <button onClick={()=>this.props.onEditClick(this.props.id)}>Edit</button>
                <button onClick={()=>this.props.onDeleteClick(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default Timer
