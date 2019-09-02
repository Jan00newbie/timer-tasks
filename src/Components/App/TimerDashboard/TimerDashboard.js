import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'

class TimerDashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            timers:[
                {"id":1,"title":"Recruiting Manager","category":"n/a","time":"57300"},
                {"id":2,"title":"Statistician I","category":"n/a","time":"7332"},
                {"id":3,"title":"Administrative Officer","category":"Capital Goods","time":"0"},
                {"id":4,"title":"Analog Circuit Design manager","category":"n/a","time":"27156"},
                {"id":5,"title":"Paralegal","category":"Health Care","time":"49330"},
                {"id":6,"title":"Biostatistician III","category":"Consumer Services","time":"11641"},
                {"id":7,"title":"Account Representative I","category":"Basic Industries","time":"5"},
                {"id":8,"title":"Sales Associate","category":"Consumer Services","time":"288"},
            ]}
    }

    onEditHandler


    onCreateHandler = (timer) => {
        this.createTimer(timer)
    }

    createTimer(timer){
        this.setState({timers: this.state.timers.concat( new Timer(timer))})
    }

    render() {
        return (
            <div className="timer-dashboard">
                <EditableTimerList timers={this.state.timers}/>
                <ToggleableTimerForm />
            </div>
        )
    }
}

class Timer {
    constructor(timer) {
        this.title = timer.title
        this.category = timer.category
        this.id = Math.floor(Math.random() * 1000)
    }
}

export default TimerDashboard