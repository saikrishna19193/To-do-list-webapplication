function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = task + " <span onclick=\"removeTask(this)\">&times;</span>";
    ul.appendChild(li);
    input.value = "";
}

function removeTask(taskItem) {
    var li = taskItem.parentElement;
    li.remove();
}
