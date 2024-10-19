const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);

    }
    inputBox.value="";
    saveData();
}


listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();

        }
    }, false);

    

    function saveData(){
        localStorage.setItem("data" ,listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML=localStorage.getItem("data");

    }
    showTask();

    

    //Edit Task 
    
// function editTask(listItem) {
//     const taskDescription = listItem.querySelector(".task-text");
//     const newDescription = prompt("Edit the task description:", taskDescription.innerText);

//     if (newDescription && newDescription.trim() !== "") {
//         taskDescription.innerText = newDescription;
//     } else {
//         alert("Please enter a valid task description.");
//     }
// }

// // Add Edit button to each task
// function addEditButtonToTask(listItem) {
//     const editButton = document.createElement("button");
//     editButton.innerText = "Edit";
//     editButton.onclick = function() {
//         editTask(listItem);
//     };

//     listItem.appendChild(editButton);
// }


    
    //Filtering

    // function filterTasks() {
    //     const searchInput = document.getElementById("search-box").value.toLowerCase();
    //     const tasks = document.querySelectorAll("#list-container li");
    
    //     tasks.forEach(function(task) {
    //         const taskText = task.querySelector(".task-text").innerText.toLowerCase();
    //         if (taskText.startsWith(searchInput)) {
    //             task.style.display = "";
    //         } else {
    //             task.style.display = "none";
    //         }
    //     });
    // }
    
    
    
