import React from 'react'
import EditableTimer from "./EditableTimer/EditableTimer";

const editableTimerList = props => {
    return (
        <div className="editable-timer-list">
            {props.timers.map(timer => 
                <EditableTimer
                    key={timer.id}
                    id={timer.id}
                    title={timer.title}
                    category={timer.category}
                    onEditHandler={props.onEditHandler}
                    onDeleteHandler={props.onEditHandler}/>)}
        </div>
    )
}

export default editableTimerList