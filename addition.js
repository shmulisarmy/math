function generate(){
    // '-1)+1' is to make sure that the random number is between 1 and highest_num
    n1 = Math.round(Math.random() * highest_num-1)+1;
    n2 = Math.round(Math.random() * highest_num-1)+1;

    display_bird_1.innerHTML = '';
    for (let i = 0; i < n1; i++){
        display_bird_1.innerHTML += '<img height=100px width=100px src="static/images/angry-birds-png-29.png">';
    }
    addition_visualization.appendChild(display_bird_1);

    display_bird_2.innerHTML = '';
    for (let i = 0; i < n2; i++){
        display_bird_2.innerHTML += '<img height=100px width=100px src="static/images/angry-birds-png-29.png">';
    }
    addition_visualization.appendChild(display_bird_2);

    num1.innerText = n1;
    num2.innerText = n2;

    input.value = '';
}

function submit(){
    const userNum = parseInt(input.value);
    if (userNum == n1 + n2){
        alert("Correct!");
    } else {
        alert("Incorrect");
    }
    generate();
}

const addition_visualization = document.getElementById("addition_visualization");
const display_bird_1 = document.createElement("div");
const display_bird_2 = document.createElement("div");

const highest_num = 5;


let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let n1, n2;

window.addEventListener('keydown', key => {
    if (key.code === 'Enter'){
        submit();
    }
})

generate();