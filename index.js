
window.addEventListener("submit", selection);


function selection(evt) {
    evt.preventDefault();
    
 
    const choiceCarbs = document.getElementById("carbs").value;
    const choiceIngredient = document.getElementById("ingredient").value;


    if (choiceCarbs == 0 && choiceIngredient == 0) {
        return alert("Please choose carb & ingredient.");
    }
    else if (choiceCarbs == 0) {
        return alert("Please choose a carb.");
    }
    else if (choiceIngredient == 0) {
        return alert("Please choose an ingredient.");
    }
    else {
        return alert(`Your carbs: ${choiceCarbs}\nYour ingredient: ${choiceIngredient}`); 
    }
    
}

// class Cook {
//     cookTheRice() {
//         document.getElementById("printCook").innerHTML = "Put in cooker for about 40 minutes.";
        
//     }
//     final() {
//         this.cookTheRice();
//     }
// }
// const cook1 = new Cook();
// if (this.choiceCarbs === "brownRice") {
//     cook1.final();
// }



// const selection = {
//     choiceCarbs: document.getElementById("carbs"),
//     choiceIngredient: document.getElementById("ingredient")
// };