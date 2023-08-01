import {html, render} from "../lib.js";


const catalogTemplate = (food) => html`<div class="card">
<img src="${food.imgUrl}">
<h1>${food.name}</h1>
<p style="text-transform: capitalize;"><strong>Calories :</strong> ${food.calories} g <strong>Fat :</strong> ${food.fat} g <Strong>Protein</Strong> ${food.protein} g <Strong>Carbs</Strong> ${food.carbohydrates} g</p>
<!-- <p><button class="details-btn">Details</button></p> -->
<button class="add-btn">Calculate</button>
</div>`;



export const showCatalog = async () => {
    const data = await getData();
    render(catalogTemplate(data), document.querySelector('main'));
}

async function getData () {
    const url = 'http://localhost:3030/data/foods/catalog';
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