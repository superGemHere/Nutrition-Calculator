export const closeModal = (el, btn) =>{
  btn.addEventListener("click", () => {
    el.close();
  });
}

const library = {
    "protein": 0,
    "fat": 0,
    "carbohydrate": 0,
    "calories": 0
}
export const addNutrients = (btn) => {
    if(sessionStorage.getItem('myNutrients') == null){
        sessionStorage.setItem('myNutrients', JSON.stringify(library));
    }

    btn.addEventListener('click', nutrientAdd)

}

function nutrientAdd(e){
    
    let parent = e.target.parentNode;
    const protein = parent.querySelector('#protein').textContent;
    const fat = parent.querySelector('#fat').textContent;
    const carbs = parent.querySelector('#carbs').textContent;
    const calories = parent.querySelector('#calories').textContent;
    
    const sessionLib = JSON.parse(sessionStorage.getItem('myNutrients'));
    
        sessionLib.protein += Number(protein);
        sessionLib.fat += Number(fat);
        sessionLib.carbs += Number(carbs);
        sessionLib.calories += Number(calories);

        sessionStorage.removeItem('myNutrients');
        sessionStorage.setItem('myNutrients',JSON.stringify(sessionLib));

}
