const display_ = document.getElementById('display_');
const question = document.getElementById('question');
const input = document.getElementById('input');
const button = document.getElementById('button');
const display_result = document.getElementById('display_result');
const times_table = document.getElementById('times_table');


const table_size = times_table.rows.length;
let row_upto = 1;
let col_upto = 1;


function update_cur_table_index(){
    if (col_upto < table_size){
        col_upto ++;
    } else {
        col_upto = 1;
        row_upto++;
    }
}

function load_question(){
    question.innerText = `what is ${row_upto} * ${col_upto}? `;
}

function submit(){
    users_answer = parseInt(input.value);
    if (users_answer == row_upto*col_upto){
        input.style.color='green';
        display_result.innerText = 'correct!!!';
        times_table.rows[row_upto-1].cells[col_upto-1].innerText = users_answer;
        input.value = '';
        display_result.style.color='green';
        update_cur_table_index();
        load_question();
    } else {
        input.style.color='red';
        display_result.innerText = 'incorrect';
        display_result.style.color='red';
    }
}
window.addEventListener('keydown', key => {
    if (key.key == 'Enter'){
        submit();
    }
})

load_question();