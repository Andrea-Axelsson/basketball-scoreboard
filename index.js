let homeScoreLbl = document.getElementById("home-score")
let guestScoreLbl = document.getElementById("guest-score")
let resetScore = document.getElementById("reset-btn")
let homeScore = 0
let guestScore = 0


/* HOME */

function home1(){
    homeScore += 1
    homeScoreLbl.textContent = homeScore
}

function home2(){
    homeScore += 2
    homeScoreLbl.textContent = homeScore
}

function home3(){
    homeScore += 3
    homeScoreLbl.textContent = homeScore
}

/* GUEST */

function guest1(){
    guestScore += 1
    guestScoreLbl.textContent = guestScore
}

function guest2(){
    guestScore += 2
    guestScoreLbl.textContent = guestScore
}

function guest3(){
    guestScore += 3
    guestScoreLbl.textContent = guestScore
}


/* RESET */

function reset(){
    homeScoreLbl.textContent = 0
    guestScoreLbl.textContent = 0
    guestScore = 0
    homeScore = 0
    
}