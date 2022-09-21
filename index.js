

let counterOne = document.getElementById("score-counter-one")
let counterTwo = document.getElementById("score-counter-two")
var count1 = 0
var count2 = 0

function addOne(id){
    if(id == "add-one-1"){
        count1++
        counterOne.textContent = count1
    }else if(id == "add-one-2"){
        count2++
        counterTwo.textContent = count2
    }
}


function addTwo(id){
    if(id == "add-two-1"){
        count1 += 2
        counterOne.textContent = count1
    }else if(id == "add-two-2"){
        count2 += 2
        counterTwo.textContent = count2
    }
}


function addThree(id){
    if(id == "add-three-1"){
        count1 += 3
        counterOne.textContent = count1
    }else if(id == "add-three-2"){
        count2 += 3
        counterTwo.textContent = count2
    }
}


function cleanDasboard(){
    counterOne.textContent = 0
    counterTwo.textContent = 0
}

