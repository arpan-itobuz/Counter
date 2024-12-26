const count = document.getElementById('count');
let counter = Number(count.textContent);

function decrement(){
    counter -= 1;
    count.innerText = counter;
    giveColor(counter);
}

function increment(){
    counter +=1
    count.innerText = counter;
    giveColor(counter)
}

function reset(){
    counter = 0;
    count.innerText = counter;
    giveColor(counter);

}

function giveColor(counter){
    if (counter < 0){
        count.style.color = "red";
    }

    else if (counter > 0){
        count.style.color = "green";
    }

    else {
        count.style.color = "black";
    }

}


