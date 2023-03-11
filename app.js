
let counts = 0


function increase() {
    counts = counts + 1
    document.getElementById("count-el").textContent = counts
}

function save(){
    document.getElementById("previuos-counts").textContent += counts + " - "
    counts = 0
    document.getElementById("count-el").textContent = 0
}