import React from 'react'
import EditableTimer from "./EditableTimer/EditableTimer";

const editableTimerList = props =>
    <div className="editable-timer-list">
        {props.timers.map(timer => 
            <EditableTimer
                key={timer.id}
                id={timer.id}
                time={timer.time}
                title={timer.title}
                category={timer.category}
                onEditHandler={props.onEditHandler}
                onDeleteHandler={props.onDeleteHandler}/>)}
    </div>

export default editableTimerList