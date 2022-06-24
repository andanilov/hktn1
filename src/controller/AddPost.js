// View import
import { render } from '../view/AddPost';

// Main controller import
import * as mainController from '../mainController.js';

const controller = ($but) => {
  $but.addEventListener('click', (e) => { 
    mainController.addPost(Math.random());    
  });
}

// --- Initialisation (View + Controller) ---
export function init() { controller(render()); }
