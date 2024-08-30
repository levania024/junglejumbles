import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { loadState, saveState } from "../utils/Store.js"

class JumblesService {
    createJumble(jumbleFormData) {
        const jumbles = AppState.jumbles
        const newJumble = new Jumble(jumbleFormData)
        jumbles.push(newJumble)

        this.saveJumbleFile()
    }
    setActiveJumble(jumbleId) {
        const jumbles = AppState.jumbles
        const foundJumbles = jumbles.find(jumbles => jumbles.id == jumbleId)
        AppState.activeJumble = foundJumbles
    }

    saveJumbleFile() {
        saveState('jumbles', AppState.activeJumble)
    }
    loadJumbleFile() {

        const JumbleFileFromLocalStorage = loadState('jumbles', [Jumble])
        AppState.activeJumble = JumbleFileFromLocalStorage

    }

}

export const jumblesService = new JumblesService()