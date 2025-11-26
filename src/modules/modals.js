import Project from "./project.js";
import mainProjectList from "./projectlist.js";
import { renderProjects } from "./ui.js";
import Task from "./task.js";
import mainTaskList from "./tasklist.js";
import { renderTasks } from "./ui.js";


function createProjectModal() {
    const projectModal = document.createElement("div");
    projectModal.classList.add("project-modal");
    document.body.appendChild(projectModal);

    const projectModalContent = document.createElement("div");
    projectModalContent.classList.add("project-modal-content");
    projectModal.appendChild(projectModalContent);

    const projectModalHeader = document.createElement("h2");
    projectModalHeader.textContent = "Add Project";
    projectModalContent.appendChild(projectModalHeader);

    const projectModalInput = document.createElement("input");
    projectModalInput.type = "text";
    projectModalInput.placeholder = "Project Name";
    projectModalContent.appendChild(projectModalInput);

    const projectModalButton = document.createElement("button");
    projectModalButton.textContent = "Add Project";
    projectModalContent.appendChild(projectModalButton);

    projectModalButton.onclick = () => {
        const projectName = projectModalInput.value.trim();
        if (projectName) {
            const project = new Project(projectName);
            mainProjectList.addProject(project);
            console.log('Project added. Total projects:', mainProjectList.getAllProjects().length);
            projectModal.remove();
            // Refresh the UI to show the new project
            renderProjects();
        }
    };
}

function createTaskModal() {
    //Todo: Create task modal
    const taskModal = document.createElement("div");
    taskModal.classList.add("task-modal");
    document.body.appendChild(taskModal);

    const taskModalContent = document.createElement("div");
    taskModalContent.classList.add("task-modal-content");
    taskModal.appendChild(taskModalContent);

    const taskModalHeader = document.createElement("h2");
    taskModalHeader.textContent = "Task Details";
    taskModalContent.appendChild(taskModalHeader);

    const taskModalInput = document.createElement("input");
    taskModalInput.type = "text";
    taskModalInput.placeholder = "Task Name";
    taskModalContent.appendChild(taskModalInput);

    const taskModalDescription = document.createElement("input");
    taskModalDescription.type = "text";
    taskModalDescription.placeholder = "Task Description";
    taskModalContent.appendChild(taskModalDescription);

    const taskModalDueDate = document.createElement("input");
    taskModalDueDate.type = "date";
    taskModalDueDate.placeholder = "Task Due Date";
    taskModalContent.appendChild(taskModalDueDate);

    const taskModalPriority = document.createElement("input");
    taskModalPriority.type = "number";
    taskModalPriority.placeholder = "Task Priority";
    taskModalContent.appendChild(taskModalPriority);

    const taskModalButton = document.createElement("button");
    taskModalButton.textContent = "Add Task";
    taskModalContent.appendChild(taskModalButton);

    taskModalButton.onclick = () => {
        const task = new Task(taskModalInput.value.trim(), taskModalDescription.value.trim(), taskModalDueDate.value.trim(), taskModalPriority.value.trim());
        mainTaskList.addTask(task);
        taskModal.remove();
        // Refresh the UI to show the new task
        renderTasks();
    };
}


function projectDetailsModal() {
    //Todo: Create project details modal
}

function taskDetailsModal() {
    //Todo: Create task details modal
}

export default createProjectModal;
export { createTaskModal };
