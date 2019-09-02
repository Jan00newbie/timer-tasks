import React from 'react'

const timer = props => {
    return (
        <div className="timer">
            <h3>{props.title}</h3>
            <p>{props.category}</p>
            
            <button>Start</button>
            <button onClick={props.onEditClick}>Edit</button>
            <button onClick={() => props.onDeleteClick(props.id)}>Delete</button>

        </div>
    )
}

export default timer
