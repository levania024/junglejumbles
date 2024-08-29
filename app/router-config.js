import { HomeController } from "./controllers/HomeController.js";
import { JumblesController } from "./controllers/JumblesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: 'app/views/HomeView.html'

  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },


])