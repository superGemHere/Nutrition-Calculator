import {html, render} from "../lib.js";

{/* <img src="${food.imgUrl}"></img> */}

const catalogTemplate = (data) => html`
${data.length > 0 
? data.map( food => html`<div class="card">
            <div>
            <h1>${food.description}</h1>
            <p style="text-transform: capitalize;"><strong>Calories :</strong> 24 g <strong>Fat :</strong> 13 g <Strong>Protein</Strong> 14 g <Strong>Carbs</Strong> 14 g</p>
            <div>
            <button class="add-btn">Calculate</button>
            </div>
        </div>
        </div>`) 
: html`<h1>There is no data to show.</h1>`}`;



export const showCatalog = async () => {
    const data = await getData();
    console.log(data)
    render(catalogTemplate(data), document.querySelector('main div.container'));
}

async function getData () {
    const url = 'https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY';
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