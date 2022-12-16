//Define UI Vars

const form = document.querySelector("#task-form");
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

//Load all event listeners 
loadEventListeners();

// Load all event Listeners 
function loadEventListeners(){
  
  //add task event 
  
  form.addEventListener('submit', addTask);
}

//add Task

function addTask(e){
if(taskInput.value === ''){
  alert('Add a Task')
}

// create li element 

const li= document.createElement('li');

//add class
li.className = 'collection-item';

// create text node and append to li


li.appendChild(document.createTextNode(taskInput.value));

//create new link element 

const link = document.createElement('a');

//add class

link.className = 'delete-item secondary-content';

// add icon html

link.innerHTML= '<i class="fa fa-remove"></i>'

e.preventDefault();

}