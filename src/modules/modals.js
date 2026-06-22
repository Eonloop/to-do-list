import Project from "./project.js";
import mainProjectList from "./projectlist.js";
import { renderTasks, selectProject } from "./ui.js";
import Task from "./task.js";
import mainTaskList from "./tasklist.js";


function createProjectModal() {
    const projectModal = document.createElement("div");
    projectModal.classList.add("project-modal");
    document.body.appendChild(projectModal);

    const projectModalContent = document.createElement("div");
    projectModalContent.classList.add("project-modal-content");
    projectModal.appendChild(projectModalContent);

    const projectCloseButton = document.createElement("button");
    projectCloseButton.textContent = "X";
    projectCloseButton.classList.add("project-close-button");
    projectModalContent.appendChild(projectCloseButton);

    projectCloseButton.onclick = () => {
        projectModal.remove();
    };

    const projectModalHeader = document.createElement("h2");
    projectModalHeader.textContent = "Add Project";
    projectModalContent.appendChild(projectModalHeader);

    const projectModalInput = document.createElement("input");
    projectModalInput.type = "text";
    projectModalInput.placeholder = "Project Name";
    projectModalContent.appendChild(projectModalInput);

    const projectModalButton = document.createElement("button");
    projectModalButton.textContent = "Add Project";
    projectModalButton.classList.add("project-modal-button");
    projectModalContent.appendChild(projectModalButton);

    projectModalButton.onclick = () => {
        const projectName = projectModalInput.value.trim();
        if (projectName) {
            const project = new Project(projectName);
            mainProjectList.addProject(project);
            projectModal.remove();
            selectProject(project);
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

    const taskCloseButton = document.createElement("button");
    taskCloseButton.textContent = "X";
    taskCloseButton.classList.add("task-close-button");
    taskModalContent.appendChild(taskCloseButton);

    taskCloseButton.onclick = () => {
        taskModal.remove();
    };

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

    const taskModalPriority = document.createElement("select");
    taskModalPriority.id = "task-priority";
    taskModalPriority.innerHTML = `
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
    `;
    taskModalContent.appendChild(taskModalPriority);

    const taskModalButton = document.createElement("button");
    taskModalButton.textContent = "Add Task";
    taskModalButton.classList.add("task-modal-button");
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
    const taskDetailsModal = document.createElement("div");
    taskDetailsModal.classList.add("task-details-modal");
    document.body.appendChild(taskDetailsModal);

    const taskDetailsModalContent = document.createElement("div");
    taskDetailsModalContent.classList.add("task-details-modal-content");
    taskDetailsModal.appendChild(taskDetailsModalContent);

    const taskDetailsModalCloseButton = document.createElement("button");
    taskDetailsModalCloseButton.textContent = "X";
    taskDetailsModalCloseButton.classList.add("task-details-modal-close-button");
    taskDetailsModalContent.appendChild(taskDetailsModalCloseButton);

    taskDetailsModalCloseButton.onclick = () => {
        taskDetailsModal.remove();
    };

    const taskDetailsModalHeader = document.createElement("h2");
    taskDetailsModalHeader.textContent = "Task Details";
    taskDetailsModalContent.appendChild(taskDetailsModalHeader);

    const taskDetailsModalDescription = document.createElement("p");
    taskDetailsModalDescription.textContent = "Description";
    taskDetailsModalContent.appendChild(taskDetailsModalDescription);

    const taskDetailsModalDueDate = document.createElement("p");
    taskDetailsModalDueDate.textContent = "Due Date";
    taskDetailsModalContent.appendChild(taskDetailsModalDueDate);

    const taskDetailsModalPriority = document.createElement("p");
    taskDetailsModalPriority.textContent = "Priority";
    taskDetailsModalContent.appendChild(taskDetailsModalPriority);

    const taskDetailsModalButton = document.createElement("button");
    taskDetailsModalButton.textContent = "Edit Task";
    taskDetailsModalButton.classList.add("task-details-modal-button");
    taskDetailsModalContent.appendChild(taskDetailsModalButton);

    taskDetailsModalButton.onclick = () => {
        taskDetailsModal.remove();
    };
    
}

export default createProjectModal;
export { createTaskModal, taskDetailsModal };
