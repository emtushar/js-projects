const body = document.querySelector("body")
const tasks = document.querySelector(".tasks")
const addTaskBtn = document.querySelector("#addTaskBtn")
addTaskBtn.addEventListener("click",()=>{
   let input = document.querySelector(".input")
// console.log(input)

    if(input.value){
        // console.log(input.value)
    addTask(input.value)   
    setTimeout(() => {
        input.value=""
    }, 0);


    } 


})
const addTask = function (task){
const taskDiv = document.createElement("div");
const taskData = document.createElement("p");
const taskBtnParent = document.createElement("div");
// const updateTaskBtn = document.createElement("span");
// const checkTaskBtn = document.createElement("span");
// deleteTaskBtn.innerHTML="<button>Delete</button>"
// updateTaskBtn.innerHTML="<button>Edit</button>"
taskBtnParent.setAttribute("class","taskBtnParent")
taskBtnParent.innerHTML=`<button class="editBtn">🖊</button>
<button class="deleteBtn">✖</button>`
taskData.textContent = task;
taskDiv.appendChild(taskData)
// taskDiv.appendChild(deleteTaskBtn)
// taskDiv.appendChild(updateTaskBtn)
taskDiv.appendChild(taskBtnParent)
taskDiv.setAttribute("class","task-container")
tasks.appendChild(taskDiv)

// const deleteBtn = document.querySelector(".deleteBtn")
// console.log(deleteBtn)
// deleteBtn.addEventListener("click",deleteTask)
taskBtnParent.addEventListener("click",handleTask,false)

}

const handleTask = function(e){
 
if(e.target.className === "deleteBtn"){
deleteIem(e)
}
else if(e.target.className === "editBtn"){
console.log(e.target)
console.log(e.target.parentNode.previousSibling)
e.target.parentNode.previousSibling.setAttribute("contenteditable","true")
    console.log("edit data")
}
}

function deleteIem(e){
    const deletedItem =  e.target.parentNode.parentNode;
    deletedItem.remove()
    console.log(deletedItem);
}