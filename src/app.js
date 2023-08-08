
import {page} from "./lib.js";
import { showCatalog } from "./views/calcView.js";
import { closeModal } from "./modal.js";



page('/', () => console.log('home'))
page('/catalog', showCatalog)

page.start()


const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeModal');

closeModal(modal, closeBtn);