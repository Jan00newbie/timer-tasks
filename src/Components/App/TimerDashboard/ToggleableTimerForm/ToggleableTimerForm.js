import React, { Component } from 'react'
import AddTimerButton from './AddTimerButton/AddTimerButton'
import TimerForm from '../EditableTimerList/EditableTimer/TimerForm/TimerForm'


export class ToggleableTimerForm extends Component {
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

    createHandler = (timerData) =>{
        this.props.onCreateHandler(timerData);
        this.closeFormHandle();
    }

    render() {
        const child = (this.state.isFormOpen) 
            ? <TimerForm 
                onFormSubmit={this.createHandler}
                onCancelClickHandler={this.closeFormHandle}/> 
            : <AddTimerButton onAddClickHandler={this.openFormHandle}/>

        return (
            <div className="toggleable-timer-form">
                {child}
            </div>
        )
    }
}

export default ToggleableTimerForm
