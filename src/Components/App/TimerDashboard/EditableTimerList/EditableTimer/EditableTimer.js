import React, { Component } from 'react'
import Timer from './Timer/Timer'
import TimerForm from './TimerForm/TimerForm'

class EditableTimer extends Component {
    
    state={isFormOpen:false}

    closeFormHandle = () =>{
        this.setState({
            isFormOpen: false
        })
    }

    openFormHandle = () =>{
        this.setState({
            isFormOpen: true
        })
    }

    submitHandle = timerData =>{
        this.props.onEditHandler(timerData)
        this.closeFormHandle()
    }

    render() {

        const child = (this.state.isFormOpen) 
            ? <TimerForm 
                id={this.props.id}
                title={this.props.title} 
                category={this.props.category} 
                onFormSubmit={this.submitHandle}
                onCancelClick={this.closeFormHandle}/> 

            : <Timer
                id={this.props.id}
                time={this.props.time}
                title={this.props.title} 
                category={this.props.category} 
                onEditClick={this.openFormHandle}
                onDeleteClick={this.props.onDeleteHandler}/>

        return (
            <div className="container">
                {child}
            </div>
        )
    }
}

export default EditableTimer
