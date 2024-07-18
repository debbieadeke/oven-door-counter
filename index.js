//document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0 //sets the count to 0 when incremented and saved
    countEl.textContent = 0 //sets the count to 0 when incremented and saved


}

