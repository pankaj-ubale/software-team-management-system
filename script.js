let tasks = [];

function addTask(){

let taskName = document.getElementById("taskName").value;
let member = document.getElementById("memberName").value;
let status = document.getElementById("status").value;

if(taskName === "" || member === ""){
alert("Please fill all fields");
return;
}

let task = {
name: taskName,
member: member,
status: status
};

tasks.push(task);

displayTasks();
updateProgress();

document.getElementById("taskName").value="";
document.getElementById("memberName").value="";
}

function displayTasks(){

let table = document.getElementById("taskTable");

table.innerHTML="";

tasks.forEach((task,index)=>{

let row = `
<tr>
<td>${task.name}</td>
<td>${task.member}</td>

<td>
<select onchange="changeStatus(${index},this.value)">
<option ${task.status=="Pending"?"selected":""}>Pending</option>
<option ${task.status=="In Progress"?"selected":""}>In Progress</option>
<option ${task.status=="Completed"?"selected":""}>Completed</option>
</select>
</td>

<td>
<button onclick="deleteTask(${index})">Delete</button>
</td>
</tr>
`;

table.innerHTML += row;

});

}

function deleteTask(index){

tasks.splice(index,1);

displayTasks();
updateProgress();

}

function changeStatus(index,newStatus){

tasks[index].status=newStatus;

updateProgress();

}

function updateProgress(){

let completed = tasks.filter(t => t.status=="Completed").length;

let total = tasks.length;

let percent = total===0 ? 0 : Math.round((completed/total)*100);

document.getElementById("progress").style.width = percent + "%";

document.getElementById("progressText").innerText = percent + "% Completed";

}