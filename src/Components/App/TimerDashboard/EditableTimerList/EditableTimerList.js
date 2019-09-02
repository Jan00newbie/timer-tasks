import React from 'react'
import EditableTimer from "./EditableTimer/EditableTimer";

const editableTimerList = props => {
    return (
        <div className="editable-timer-list">
        {props.timers.map(timer => 
            <EditableTimer
                key={timer.id}
                title={timer.title}
                category={timer.category}
                onEditFormSubmit={this.props.onEditFormSubmit}/>)}
    </div>
    )
}

export default editableTimerList