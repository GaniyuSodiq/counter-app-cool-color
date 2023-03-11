
let counts = 0
let countEl = document.getElementById("count-el")
let previousCounts = document.getElementById("previuos-counts")

function increase() {
    counts = counts + 1
    countEl.textContent = counts
}

function save(){
    previousCounts.textContent += counts + " - "
    counts = 0
    countEl.textContent = 0
}