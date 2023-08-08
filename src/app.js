
import {page} from "./lib.js";
import { showCatalog } from "./views/calcView.js";
import { addNutrients, closeModal } from "./modal.js";



page('/', () => console.log('home'))
page('/catalog', showCatalog)

page.start()


const modal = document.querySelector('#modal');
const addBtn = document.querySelector('#modalAddBtn');
const closeBtn = document.querySelector('#closeModal');

closeModal(modal, closeBtn);
addNutrients(addBtn)