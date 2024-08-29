import { generateId } from "../utils/GenerateId.js"

//Jumble.js
export class Jumble {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = null
        this.startTime = null
        this.endTime = null
    }

    get ListTemplate() {
        return `
        <div class="d-flex justify-content-end">
            <button onclick="app.JumblesController.setActiveJumble('${this.id}')">Start</button>
            <label>${this.name}</label>
          </div>
          `
    }

    get activeJumbleTemplate() {
        return `
        <div class="col-8 bg-light shadow">
          <h4>${this.name}</h4>
          <div>
            <text name="">${this.body}</text>
            </div>
        </div>
          `
    }
}