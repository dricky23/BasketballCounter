let Hscore = document.getElementById("home-score")
let Gscore = document.getElementById("guest-score")
let PlusH = 0
let PlusG = 0

function add1H() {
    PlusH += 1
    Hscore.innerText = PlusH 
    Winning()
}

function add2H() {
    add1H()
    add1H()
    Winning()
}

function add3H() {
    add1H()
    add2H()
    Winning()
}

function add1G() {
    PlusG += 1
    Gscore.innerText = PlusG 
    Winning()
}

function add2G() {
    add1G()
    add1G()
    Winning()
}

function add3G() {
    add1G()
    add2G()
    Winning()
}

function Winning() {
    if (PlusH > PlusG) {
           document.getElementById("SBH").style.borderColor = "green";
           document.getElementById("SBG").style.borderColor = "red";
    } else
    if (PlusG > PlusH) {
           document.getElementById("SBH").style.borderColor = "red";
           document.getElementById("SBG").style.borderColor = "green";        
    } else
    if (PlusG = PlusH) {
           document.getElementById("SBH").style.borderColor = "red";
           document.getElementById("SBG").style.borderColor = "red";        
    } 
}

function restart() {
    Gscore.textContent = 0
    Hscore.textContent = 0
    PlusG = 0
    PlusH = 0
    document.getElementById("SBH").style.borderColor = "red";
    document.getElementById("SBG").style.borderColor = "red";        
}