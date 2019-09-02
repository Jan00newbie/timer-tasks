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

    submitHandle = (timerData) =>{
        this.props.onEditFormSubmit(timerData);
        this.closeFormHandle();
    }

    render() {
        const child = (this.state.isFormOpen) 
            ? <TimerForm 
                title={this.props.title} 
                category={this.props.category} 
                onSubmitClickHandler={this.submitHandle}
                onCancelClickHandler={this.closeFormHandle}/> 

            : <Timer 
                title={this.props.title} 
                category={this.props.category} 
                onEditClickHandler={this.openFormHandle}/>

        return (
            <div className="container">
                {child}
            </div>
        )
    }
}

export default EditableTimer
