import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'

class TimerDashboard extends Component {
    constructor(props){
        
        super(props)
        this.state={
            timers:[
                {"id":1,"title":"Recruiting Manager","category":"n/a","time":0, runningSince:false},
                // {"id":2,"title":"Statistician I","category":"n/a","time":0, runningSince:null},
                // {"id":3,"title":"Administrative Officer","category":"Capital Goods","time":0, runningSince:null},
                // {"id":4,"title":"Analog Circuit Design manager","category":"n/a","time":0, runningSince:null},
                // {"id":5,"title":"Paralegal","category":"Health Care","time":0, runningSince:null},
                // {"id":6,"title":"Biostatistician III","category":"Consumer Services","time":0, runningSince:null},
                // {"id":7,"title":"Account Representative I","category":"Basic Industries","time":0, runningSince:null},
                // {"id":8,"title":"Sales Associate","category":"Consumer Services","time":0, runningSince:null},
            ]}
    }

    editTimer = editedTimer => {
        this.setState({
            timers: this.state.timers.map( timer =>
                (timer.id === editedTimer.id) 
                ? Object.assign(timer, {
                    title: editedTimer.title,
                    category: editedTimer.category
                  }) 
                : timer
            )
        })
    }

    createTimer(timer) {
        this.setState({
            timers: this.state.timers.concat(new Timer(timer))
        })
    }

    deleteTimer = timerId => {
        this.setState({timers: this.state.timers.filter(timer => timer.id !== timerId)})
    }

    startTimer = timerId => {
        const now = Date.now()

        this.setState({
            timers: this.state.timers.map( timer =>
                (timer.id === timerId) 
                    ? Object.assign(timer, {
                        runningSince: now
                    }) 
                    : timer
            )
        })
    }

    stopTimer = timerId => {
        const now = Date.now()
        
        this.setState({
            timers: this.state.timers.map( timer =>
                (timer.id === timerId) 
                    ? Object.assign(timer, {
                        runningSince: null,
                        time: timer.time + (now - timer.runningSince)
                    }) 
                    : timer
            )
        })
    }


    onCreateHandler = timer => {
        this.createTimer(timer)
    }

    onEditHandler = editedTimer => {
        this.editTimer(editedTimer)
    }

    onDeleteHandler = timerId => {
        this.deleteTimer(timerId)
    }

    onStartHandler = timerId => {
        this.startTimer(timerId)
    }

    onStopHandler = timerId => {
        this.stopTimer(timerId)
    }

    render() {
        return (
            <div className="timer-dashboard">
                <EditableTimerList 
                    timers={this.state.timers} 
                    onDeleteHandler={this.onDeleteHandler}
                    onEditHandler={this.onEditHandler}
                    onStartHandler={this.onStartHandler}
                    onStopHandler={this.onStopHandler}
                    />
                <ToggleableTimerForm 
                    onCreateHandler={this.onCreateHandler}
                    />
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