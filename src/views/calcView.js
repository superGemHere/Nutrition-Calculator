import {html, render} from "../lib.js";


const catalogTemplate = (data) => html`
${data.length > 0 
    ? html`<div class="container">
        ${data.map(food => html`<div class="card">
            <div>
            <img src="${food.imgUrl}" alt="foodImage">
             <h1>${food.description}</h1>
             <input type="number" name="protein"value="24" disabled style="display: none">
             <input type="number" name="calories"value="343" disabled style="display: none">
             <input type="number" name="fat"value="13" disabled style="display: none">
             <input type="number" name="carbs"value="24" disabled style="display: none">
             <div>
             <button class="add-btn" @click="${onClick}">Calculate</button>
             </div>
         </div>
         </div>`)}
    </div>`
// ? data.map( food => html`<div class="container">
//             <div class="card">
//             <div>
//             <h1>${food.description}</h1>
//             <input type="number" name="protein"value="24" disabled style="display: none">
//             <input type="number" name="calories"value="343" disabled style="display: none">
//             <input type="number" name="fat"value="13" disabled style="display: none">
//             <input type="number" name="carbs"value="24" disabled style="display: none">
//             <div>
//             <button class="add-btn" @click="${onClick}">Calculate</button>
//             </div>
//         </div>
//         </div>
//         </div>`) 
: html`<h1>There is no data to show.</h1>`}`;



export const showCatalog = async () => {
    const data = await getData();
    console.log(data)
    render(catalogTemplate(data), document.querySelector('main'));
}

async function getData () {
    const url = 'http://simple-grocery-store-api.online/products';
    try {
        const response = await fetch(url);
        if (!response.ok){
            const error = await response.json();
            throw new Error(error)
        }
        const data = await response.json();
        return data;
        
    } catch (err) {
        alert(err.message)
        throw err;
    }
}

const modal = document.querySelector('#modal');
function onClick(e){
    let parent = e.target.parentNode.parentNode;
    const modalName = modal.querySelector('#modalName');
    const protein = modal.querySelector('#protein');
    const fat = modal.querySelector('#fat');
    const carbs = modal.querySelector('#carbs');
    const calories = modal.querySelector('#calories');

    let targProt = parent.querySelector('[name="protein"]')
    let targCalories = parent.querySelector('[name="calories"]')
    let targFats = parent.querySelector('[name="fat"]')
    let targCarbs = parent.querySelector('[name="carbs"]')

    // modalName.textContent = 
    protein.textContent = targProt.value;
    fat.textContent = targCalories.value;
    carbs.textContent = targFats.value;
    calories.textContent = targCarbs.value;
    modal.showModal();
}