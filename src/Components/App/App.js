import React, { Component } from 'react'
import TimerDasboard from './TimerDashboard/TimerDashboard'

export class App extends Component {
    render() {
        return (
            <div className="app">
                <TimerDasboard />
            </div>
        )
    }
}

export default App
