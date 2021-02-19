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

        // ADD TASK TO LOCAL STORAGE 
        storeTask(taskInput.value);
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
            ele.remove(); 
            // console.log(ele);

            removeFromLocalStorage(ele);
        }
    }
}


// REMOVE ALL TASK
clerBtn.addEventListener('click', removeAllTask);

function removeAllTask(e) {
    // console.log("clicked");
    // slower
    // taskList.innerHTML = "";

    // faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}


// FILTER TASK
filter.addEventListener('keyup', taskFilter);

function taskFilter(e) {
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) === -1) {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    });
}

// ADD TASK TO LOCAL STORAGE 
function storeTask(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// SHOW LOCAL STOGARE DATA
document.addEventListener('DOMContentLoaded', getTasks);

function getTasks(e) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = "X";

        li.appendChild(link);
        taskList.appendChild(li);
    })
}

// REMOVE_FROM_LOCAL_STORAGE
function removeFromLocalStorage(takskElement){

    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = takskElement;
    li.removeChild(li.lastChild);

    tasks.forEach((task, index) => {
        if(li.textContent.trim()===task){
            task.splice(index, 1);
        }
    });
}

localStorage.setItem('tasks', JSON.stringify(tasks));