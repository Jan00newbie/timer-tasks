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

    updateTimer(updatedTimerId, updatedTimer){
        this.setState({
            timers: this.state.timers.map(timer =>
                (timer.id === updatedTimerId)
                    ? updatedTimer
                    : timer
            )
        })
    }

    editTimer = async editedTimer => {
        const updatedTimer = await gql.editTimer(editedTimer)

        this.updateTimer(editedTimer.id, updatedTimer)
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
        const updatedTimer = await gql.startTimer(timerId)

        this.updateTimer(timerId, updatedTimer)
    }

    stopTimer = async timerId => {
        const updatedTimer = await gql.stopTimer(timerId)

        this.updateTimer(timerId, updatedTimer)
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