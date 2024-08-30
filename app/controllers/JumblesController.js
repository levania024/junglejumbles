import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class JumblesController {
    constructor() {
        console.log('load the jungle jumble to the console');
        AppState.on('activeJumble', this.drawActiveJumble)
        this.drawList()
    }

    drawList() {
        const jumbles = AppState.jumbles
        console.log('load list to the page', jumbles)
        let listHTML = ''
        jumbles.forEach(jumble => listHTML += jumble.ListTemplate)
        const jumbleElm = document.getElementById('list-template')
        jumbleElm.innerHTML = listHTML
    }

    drawActiveJumble() {
        const jumble = AppState.activeJumble
        console.log(jumble);
        setHTML('Active-jumble', jumble.activeJumbleTemplate)
    }

    setActiveJumble(jumbleId) {
        console.log(`load jumble to the page ${jumbleId}`);
        jumblesService.setActiveJumble(jumbleId)
    }

    createJumble() {
        event.preventDefault()
        const form = event.target
        const jumbleDataFromForm = getFormData(form)
        console.log(jumbleDataFromForm);
        jumblesService.createJumble(jumbleDataFromForm)
    }

    updateJumbleFile() {
        console.log('win');

    }




}