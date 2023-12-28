const display_ = document.getElementById('display_');
const question = document.getElementById('question');
const input = document.getElementById('input');
const button = document.getElementById('button');
const display_result = document.getElementById('display_result');
const times_table = document.getElementById('times_table');


const table_size = times_table.rows.length;
let row_upto = 1;
let col_upto = 1;
let hint;
let cur_cell;


function update_cur_table_index(){
    if (col_upto < table_size){
        col_upto ++;
    } else {
        col_upto = 1;
        row_upto++;
    }
}

function load_question(){
    cur_cell = times_table.rows[row_upto-1].cells[col_upto-1];
    cur_cell.style.color = 'orange'
    cur_cell.innerText = '-';
    question.innerText = `what is ${row_upto} * ${col_upto}? `;
    hint = [];
    for (i=1; i<=col_upto; i++){
        hint.push(row_upto);
    };
}

function submit(){
    users_answer = parseInt(input.value);
    if (users_answer == row_upto*col_upto){
        input.style.color='green';
        display_result.innerText = 'correct!!!';
        times_table.rows[row_upto-1].cells[col_upto-1].innerText = users_answer;
        input.value = '';
        display_result.style.color='green';
        cur_cell.style.color = 'green';
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

question.addEventListener('mouseout', function () {
    question.innerText = `what is ${row_upto} * ${col_upto}? `;
  });


question.addEventListener('mouseover', function () {
    question.innerText = hint.join(" + ");
    question.innerText += `\n${row_upto*(col_upto-1)} + ${row_upto}`;
  });


load_question();