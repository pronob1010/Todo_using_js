let form = document.getElementById('task_form');
let taskList = document.querySelector('ul');
let clerBtn = document.getElementById('clearBtn');
let filter = document.getElementById("task_filter");
let taskInput = document.getElementById("new_task");


// ADD TASK
form.addEventListener('submit', addtask);
function addtask(e) {
    if (taskInput.value === "") {
        alert('Add Task first...');
    } else {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = "X";

        li.appendChild(link);
        taskList.appendChild(li);
        // console.log("dfsd");
        taskInput.value = "";
    }
    e.preventDefault();
}


// REMOVE SINGLE TASK
taskList.addEventListener('click', removeTask);
function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure ? ")) {
            let ele = e.target.parentElement; 
            ele.remove();// console.log(ele);
            }
        }
    }


// REMOVE ALL TASK
clerBtn.addEventListener('click', removeAllTask);

function removeAllTask(e){
    // console.log("clicked");
    // slower
    // taskList.innerHTML = "";

    // faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}


