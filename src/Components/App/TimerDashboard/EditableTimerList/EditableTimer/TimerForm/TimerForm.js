
import React, { Component } from 'react'

export class TimerForm extends Component {
    state = {
        title: this.props.title || ``,
        category: this.props.category || ''
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
    }

    hangleCategoryChange = e => {
        this.setState({ category: e.target.value });
    }

    handleSubmit = () =>{
        this.props.onFormSubmit({
            id:this.props.id,
            title:this.state.title,
            category: this.state.category
        })
    }

    render() {
        return (
            <div className="timer-form">
                <label>Title</label>
                <input type="text" value={ this.state.title } onChange={this.handleTitleChange}/>
                
                <label>Category</label>
                <input type="text" value={ this.state.category } onChange={this.hangleCategoryChange}/>
                
                <button onClick={this.handleSubmit}>{ this.props.id ? `Update` : `Create` }</button>
                <button onClick={this.props.onCancelClick}>cancel</button>
            </div>
        )
    }
}

export default TimerForm