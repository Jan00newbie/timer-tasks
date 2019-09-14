export class GQL {
    constructor() {
        this.timerSchema = `id: _id, title, category, time`;
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
            .then(result => result.data);
    }
    async fetchAll() {
        const {
            timers
        } = await this.sendRequest(`query{
        timers{${this.timerSchema}}
    }`);
        return timers;
    }
    async editTimer(editedTimer) {
        const {
            updateTimer
        } = await this.sendRequest(`
        mutation{
            updateTimer(
                updateTimerInput:{ _id: "${editedTimer.id}", title: "${editedTimer.title}", category: "${editedTimer.category}"}){
                    ${this.timerSchema}
                }
            }`);
        return updateTimer;
    }
    async createTimer(timer) {
        const {
            createTimer
        } = await this.sendRequest(`
        mutation{
            createTimer(
                createTimerInput:{title: "${timer.title}", category: "${timer.category}"}){
                    ${this.timerSchema}
                }
            }`);
        return createTimer;
    }
}
