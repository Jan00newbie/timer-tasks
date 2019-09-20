export class GQL {
    constructor() {
        this.timerSchema = `id: _id, title, category, time, runningSince`;
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }

    async sendRequest(query) {

        return await fetch('http://localhost:3001/graphql', {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    query: query
                })
            })
            .then(r => r.json())
            .then(result => result.data)
            .catch(err => {throw err})
    }

    async fetchAll() {
        const {timers} = await this.sendRequest(`
            query{
                timers{${this.timerSchema}}
            }`);
        return timers;
    }

    async editTimer(editedTimer) {
        const {updateTimer} = await this.sendRequest(`
            mutation{
                updateTimer(
                    updateTimerInput:{ _id: "${editedTimer.id}", title: "${editedTimer.title}", category: "${editedTimer.category}"}){
                        ${this.timerSchema}
                    }
            }`);
        return updateTimer;
    }

    async createTimer(timer) {
        const {createTimer} = await this.sendRequest(`
            mutation{
                createTimer(
                    createTimerInput:{title: "${timer.title}", category: "${timer.category}"}){
                        ${this.timerSchema}
                    }
                }`);
        return createTimer;
    }

    async deleteTimer(timerId) {
        const {deleteTimer} = await this.sendRequest(`
            mutation{
                deleteTimer( _id: "${timerId}" )
                }`);
        return deleteTimer;
    }

    async startTimer(timerId) {
        const {startTimer} = await this.sendRequest(`
            mutation{
                startTimer( _id: "${timerId}" ){
                    ${this.timerSchema}
                }
            }`)
        
        return startTimer
    }
    async stopTimer(timerId) {
        const {stopTimer} = await this.sendRequest(`
            mutation{
                stopTimer( _id: "${timerId}" ){
                    ${this.timerSchema}
                }
            }`);
        return stopTimer
    }
}
