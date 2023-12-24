const question = document.getElementById('question');
const hint = document.getElementById('hint');
const input = document.getElementById('input');
const answer_display = document.getElementById('answer_display');
const next_question = document.getElementById('next_question');

const operaters = ['-', '+'];
const max_num = 10;
const answer_count = 0;
let q_right_side;
let q_left_side;
let x;
let num1;
let num2;
let h_a;
let answer;
let operater_index;

function submit(){
    let user_ans = input.value;
    if (user_ans == 'h'){
        display_hint();    
    } else {
        if (parseInt(user_ans) == x){
            answer_display.innerText = 'correct!!!';
        } else {
            answer_display.innerText = `incorrect the answer is ${x}`;
        }
        next_question.style.display = 'block';

    }
}
function display_hint(){
    if (operater_index){
        h_a = q_right_side - num2;
    } else {
        h_a =  q_right_side + num2;
    }
    hint.innerText = `first cancel out the ${num2} by applying ${operaters[1 - operater_index]}${num2} to ${num2}\n`;
    hint.innerText += `now that ${num2} ${operaters[1 - operater_index]} ${num2} = 0,\n anything that happens to one side must happend to the other side,\n and since ${q_right_side} ${operaters[1 - operater_index]} ${num2} = `;
    hint.innerText += `$ {h_a} `;
    hint.innerText += `we are now left with ${num1}x = ${num1*x}`;
}

function load_question() {
    next_question.style.display = 'none';
    num1 = Math.round(Math.random()*max_num);
    num2 = Math.round(Math.random()*max_num);
    x = Math.round(Math.random()*max_num);
    operater_index = Math.round(Math.random());


    q_left_side = `${num1}x ${operaters[operater_index]} ${num2}`;
    if (operater_index){
        q_right_side = num1*x + num2;
    } else {
        q_right_side = num1*x - num2;
    }
    question.innerText = "solve for x: \n";
    question.innerText += `${q_left_side} = ${q_right_side}`;

    answer_display.innerText = '';
}
window.addEventListener('keydown', key => {
    if (key.key == 'Enter'){
        submit();
    }
})

load_question();