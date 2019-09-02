
import React, { Component } from 'react'

export class TimerForm extends Component {
    state = {
        title: this.props.title || ``,
        category: this.props.category || ``
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
    }

    handleProjectChange = e => {
        this.setState({ category: e.target.value });
    }

    handleSubmit = ()=>{
        this.props.onSubmitHandler({
            id:this.props.id,
            title:this.state.title,
            category: this.state.category
        })
    }

    render() {
        return (
            <div className="timer-form">
                <label>Title</label><input type="text" value={ this.state.title } onChange={this.handleTitleChange}/>
                <label>Category</label><input type="text" value={ this.state.category } onChange={this.handleCategoryChange}/>
                <button onClick={this.handleSubmit}>{ this.state.id ? `Update` : `Create` }</button>
                <button>cancel</button>
            </div>
        )
    }
}

export default TimerForm