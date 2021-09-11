// select choices
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
    const stepsForRiceEgg = ["Put rice in cooker for about 30 minutes.", "Simmer water and cook eggs for 7 minutes.", "Peel eggs and place them in zip-lock bag with soy sauce, mirin and water."];
    const stepsForCaliChicken = [];
    const stepsForCaliEgg = [];

    if (choiceCarbs == "brownrice" && choiceProtein == "chicken") {
        for (let i = 0; i < stepsForRiceChicken.length; i++) {
            const liNode = document.createElement("li");
            const textNode = document.createTextNode(stepsForRiceChicken[i]);
            liNode.appendChild(textNode);
            document.getElementById("list").appendChild(liNode);     
        }
        return true;
    }
    else if (choiceCarbs == "brownrice" && choiceProtein == "egg") {
        for (let i = 0; i < stepsForRiceEgg.length; i++) {
            const liNode = document.createElement("li");
            const textNode = document.createTextNode(stepsForRiceEgg[i]);           
            liNode.appendChild(textNode);
            document.getElementById("list").appendChild(liNode);      
        }
        return true;
    }
    else if (choiceCarbs == "califlowerrice" && choiceProtein == "chicken") {
        for (let i = 0; i < stepsForCaliChicken.length; i++) {
            const liNode = document.createElement("li");
            const textNode = document.createTextNode(stepsForCaliChicken[i]);            
            liNode.appendChild(textNode);
            document.getElementById("list").appendChild(liNode);      
        }
        return true;
    }
    else if (choiceCarbs == "califlowerrice" && choiceProtein == "egg") {
        for (let i = 0; i < stepsForCaliEgg.length; i++) {
            const liNode = document.createElement("li");
            const textNode = document.createTextNode(stepsForCaliEgg[i]);
            liNode.appendChild(textNode);
            document.getElementById("list").appendChild(liNode);      
        }     
        return true;
    }   
    form.button.disabled = true;
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

// random selection
window.addEventListener("click", random);
function random(evt) {  
    evt.preventDefault();
    
    generateCarbs = ["brownrice", "califlowerrice"];
    const haha = generateCarbs[Math.floor(Math.random()*2)];
    const inputNode = document.createElement("INPUT");
    inputNode.setAttribute("type", "text");
    inputNode.setAttribute("value", haha);
    document.getElementById("ppp").appendChild(inputNode);
    form.button.disabled = true;
}


// window.addEventListener("submit", haha);
// function haha(evt) {
//     evt.preventDefault();

//     class Cook {
//         constructor (choiceCarbs, choiceProtein) {
//             choiceCarbs = document.getElementById("carbs").value,
//             choiceProtein = document.getElementById("protein").value
//         };
//         send() {
//         if (this.choiceCarbs == "brownrice" && this.choiceProtein == "chicken") {
//         return document.getElementById("cookCarbs").innerHTML = "Put in cooker for about 40 minutes.";
//         }
//         }
//     }
//     const hehe = new Cook();
//     hehe.send();
// }