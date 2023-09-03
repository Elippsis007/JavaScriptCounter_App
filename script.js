// Initialize count as 0
// Listen for clicks on increment button
// Increment the count variable when the button is clicked
// Change the "count-el" in the html file to reflect the new count

// Hey HTML document, I want to get an element, and I want to get it by and ID is "count-el"
// document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

// Assigning 0 to count
let count = 0;

// created function called increment linked to "on-click" called "increment"
function increment() {
    // count(0) is now.... 0 + 1 = 1 --> each time the button is clicked it will add one
    count += 1;
    countEl.textContent = count;
}



// a function which logs out the count when it's called/invoked
function save() {
    let countStr = count + " - ";
    // "textContent" is used for returning every element in html
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

