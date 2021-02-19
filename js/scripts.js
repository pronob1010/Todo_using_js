let form  = document.getElementById('task_form');
let taskList = document.querySelector('ul');
let clerBtn = document.getElementById('clearBtn');
let filter = document.getElementById("task_filter");
let taskInput = document.getElementById("new_task");

form.addEventListener('submit', addtask);

function addtask(e){
    if(taskInput.value === ""){
        alert('Add Task first...');
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        taskList.appendChild(li);
        // console.log("dfsd");
        taskInput.value = " "
    }
    e.preventDefault();
}