// Passenger counter
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let counterSave = "Previous entries: ";
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let counterSave = count + " - ";
    saveEl.textContent += counterSave;
    count = 0;
    countEl.textContent = 0;
}