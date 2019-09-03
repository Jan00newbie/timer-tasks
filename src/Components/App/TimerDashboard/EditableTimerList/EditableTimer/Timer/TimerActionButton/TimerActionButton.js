import React from 'react'

const TimerActionButton = props => 
     props.timerIsRunning
        ?<button onClick={props.onStopClick}>Stop</button>
        :<button onClick={props.onStartClick}>Start</button>

export default TimerActionButton
