import React, {
    Component
} from 'react'
import EditableTimerList from './EditableTimerList/EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm/ToggleableTimerForm'
import {
    GQL
} from '../../Utils/GQL'

const gql = new GQL()

class TimerDashboard extends Component {

    state = {
        timers: []
    }

    async componentDidMount() {
        this.setState({
            timers: await gql.fetchAll()
        })
    }

    editTimer = async editedTimer => {
        const updatedTimer = await gql.editTimer(editedTimer)

        this.setState({
            timers: this.state.timers.map(timer =>
                (timer.id === editedTimer.id) 
                    ?updatedTimer 
                    :timer
            )
        })
    }

    createTimer = async timer => {
        const createdTimer = gql.createTimer(timer)

        this.setState({
            timers: this.state.timers.concat(createdTimer)
        })
    }

    deleteTimer = timerId => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== timerId)
        })
    }

    startTimer = async timerId => {
        const now = Date.now()

        this.setState({
            timers: this.state.timers.map(timer =>
                (timer.id === timerId) 
                    ? Object.assign(timer, {runningSince: now}) 
                    : timer
            )
        })
    }

    stopTimer = async timerId => {
        const now = Date.now()

        this.setState({
            timers: this.state.timers.map(timer =>
                (timer.id === timerId) ?
                Object.assign(timer, {
                    runningSince: null,
                    time: timer.time + (now - timer.runningSince)
                }) :
                timer
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

export default TimerDashboard