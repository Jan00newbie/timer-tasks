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

    submitHandle = (timerData) =>{
        this.props.onFormSubmit(timerData);
        this.closeFormHandle();
    }

    render() {
        const child = (this.state.isFormOpen) 
            ? <TimerForm 
                onSubmitClickHandler={this.submitHandle} 
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
