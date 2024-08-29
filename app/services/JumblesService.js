import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"

class JumblesService {
    createJumble(jumbleFormData) {
        const jumbles = AppState.jumbles
        const newJumble = new Jumble(jumbleFormData)

        jumbles.push(newJumble)
    }
    setActiveJumble(jumbleId) {
        const jumbles = AppState.jumbles
        const foundJumbles = jumbles.find(jumbles => jumbles.id == jumbleId)
        AppState.activeJumble = foundJumbles
    }

}

export const jumblesService = new JumblesService()