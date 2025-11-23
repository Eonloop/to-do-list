import createTask from "./tasks";

function createTaskList() {
    const taskListDiv = document.createElement("div");
    taskListDiv.classList.add("task-list");
    taskListDiv.textContent = "Placeholder Project";
    document.body.appendChild(taskListDiv);

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task";
    addTaskButton.classList.add("add-task-button");
    taskListDiv.appendChild(addTaskButton);

    addTaskButton.onclick = () => {
       createTask();
    };
}

export default createTaskList;

