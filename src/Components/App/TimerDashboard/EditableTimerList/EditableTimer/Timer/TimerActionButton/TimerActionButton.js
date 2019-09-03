import React from 'react'

const TimerActionButton = props => {

    const btn = props.timerIsRunning
        ?<button onClick={props.onStartClick}>Start</button>
        :<button onClick={props.onStopClick}>Stop</button>
        
    return (
        <div className="timer-action-button">
            {btn}
        </div>
    )
}

export default TimerActionButton
