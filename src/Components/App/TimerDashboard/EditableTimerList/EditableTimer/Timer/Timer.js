import React, { Component } from 'react'
import TimerActionButton from './TimerActionButton/TimerActionButton'
import timeConverter from '../../../../../Utils/util'


export class Timer extends Component {
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => {
            this.forceUpdate()
        }, 50)
    }
    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    render() {

        const elapsed = this.props.runningSince 
            ? Date.now() - this.props.runningSince + this.props.time
            : this.props.time
            

        return (
            <div className="timer">
                <h3>{this.props.title}</h3>
                <p>{this.props.category}</p>
                <p>{timeConverter(elapsed)}</p>
                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={()=>this.props.onStartClick(this.props.id)}
                    onStopClick={()=>this.props.onStopClick(this.props.id)}
                    />
                <button onClick={()=>this.props.onEditClick(this.props.id)}>Edit</button>
                <button onClick={()=>this.props.onDeleteClick(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default Timer
