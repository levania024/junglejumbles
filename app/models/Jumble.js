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
         <div class="col-8 bg-light shadow">
          <div class="d-flex flex-row-reverse justify-content-around my-3 fs-3">
            <label>${this.name}</label>
            <button onclick="app.JumblesController.setActiveJumble('${this.id}')">Start</button>
          </div>
        </div>
          `
  }

  get activeJumbleTemplate() {
    return `
      <div class="col-8 bg-light shadow">
      <div class="d-flex flex-column mb-3 justify-content-center">
      <h4>${this.name}</h4>
      <div">
        <text name="">${this.body}</text>
        </div>
      </div>
      </div>
      </div>

        <div class="col-8 bg-light shadow p-2 mt-3 mb-3">
        <div class="d-flex flex-column mb-3 text-center">
        <form onsubmit="app.JumblesController.createJumble()">
        <textarea name="body" id="body"></textarea>
        <div class="">
            <button class="">Submit</button>
          </div>
        </form>
      </div>
        </div>
          `
  }
}