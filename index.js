
window.addEventListener("submit", selection);
function selection(evt) {  // function to check for input
    evt.preventDefault();
    
    const choiceCarbs = document.getElementById("carbs").value;
    const choiceProtein = document.getElementById("protein").value;

    if (choiceCarbs == 0 && choiceProtein == 0) {
        return alert("Please choose carb & protein.");
    }
    else if (choiceCarbs == 0) {
        return alert("Please choose a carb.");
    }
    else if (choiceProtein == 0) {
        return alert("Please choose an protein.");
    }
    else {
        return alert(`Your carbs: ${choiceCarbs}\nYour protein: ${choiceProtein}`); 
    }
    
}

window.addEventListener("submit", listOfInstructions);
function listOfInstructions(evt) {    // function to print out instructions after checking input
    evt.preventDefault();
    
    const choiceCarbs = document.getElementById("carbs").value;
    const choiceProtein = document.getElementById("protein").value;
    const stepsForRiceChicken = ["Put rice in cooker for about 30 minutes.", "Marinate chicken breast with salt & pepper.", "Pan sear over medium heat for 5 mins on each side."];
    const stepsForRiceEgg = ["Put rice in cooker for about 30 minutes.", ""];

    if (choiceCarbs == "brownrice" && choiceProtein == "chicken") {
        for (let i = 0; i < stepsForRiceChicken.length; i++) {
            const textNode = document.createTextNode(stepsForRiceChicken[i]);
            const liNode = document.createElement("li");
            liNode.appendChild(textNode);
            document.getElementById("list").appendChild(liNode);      
        }
        return true;
    }
    else if (choiceCarbs == "brownrice" && choiceProtein == "egg") {
        for (let i = 0; i < stepsForRiceEgg.length; i++) {
            const textNode = document.createTextNode(stepsForRiceEgg[i]);
            const liNode = document.createElement("li");
            liNode.appendChild(textNode);
            document.getElementById("list").appendChild(liNode);      
        }
        return true;
    }
}

window.addEventListener("submit", header);
function header(evt) {      // function to print header
    evt.preventDefault();
    
    const choiceCarbs = document.getElementById("carbs").value;
    const choiceProtein = document.getElementById("protein").value;

    if (choiceCarbs !== 0 && choiceProtein !== 0) {
        return document.getElementById("CookingInstructions").innerHTML = "Cooking Instructions";
    }
}

// function haha(evt) {
//     evt.preventDefault();

//     class Cook {
//         constructor (choiceCarbs, choiceIngredient) {
//             choiceCarbs = document.getElementById("carbs").value,
//             choiceProtein = document.getElementById("protein").value
//         };
//         send() {
//         if (this.choiceCarbs == "brownrice") {
//         return document.getElementById("printCook").innerHTML = "Put in cooker for about 40 minutes.";
//         }
//         }
//     }
//     const hehe = new Cook();
//     hehe.send();
// }