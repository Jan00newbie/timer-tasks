import React from 'react'

const addTimerButton = props => {
    return (
        <div className="container">
            Add new task
            <button onClick={props.onAddClickHandler}>+</button>
        </div>
    )
}

export default addTimerButton
