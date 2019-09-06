import React from 'react'
import EditableTimer from "./EditableTimer/EditableTimer";

const editableTimerList = props =>
    <div className="editable-timer-list">
        {props.timers.map(timer => 
            <EditableTimer
                key={timer.id}
                id={timer.id}
                time={timer.time}
                runningSince={timer.runningSince}
                title={timer.title}
                category={timer.category}
                onEditHandler={props.onEditHandler}
                onDeleteHandler={props.onDeleteHandler}
                onStartHandler={props.onStartHandler}
                onStopHandler={props.onStopHandler}/>)}
    </div>

export default editableTimerList