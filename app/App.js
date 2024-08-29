import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { JumblesController } from './controllers/JumblesController.js';
const USE_ROUTER = false

class App {

  HomeController = new HomeController()
  JumblesController = new JumblesController

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
