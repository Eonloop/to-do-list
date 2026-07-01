import Project from "./project.js";
import mainProjectList from "./projectlist.js";
import { renderTasks, selectProject } from "./ui.js";
import Task from "./task.js";
import mainTaskList from "./tasklist.js";
import { saveTasksToStorage } from "./storage.js";

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

function taskDetailsModal(index) {
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
    const taskDetailsModalDescriptionText = document.createElement("p");
    taskDetailsModalDescription.textContent = "Description";
    taskDetailsModalDescriptionText.textContent = mainTaskList.getTask(index).getDescription();
    taskDetailsModalContent.appendChild(taskDetailsModalDescription);
    taskDetailsModalContent.appendChild(taskDetailsModalDescriptionText);

    const taskDetailsModalDueDate = document.createElement("p");
    const taskDetailsModalDueDateText = document.createElement("p");
    taskDetailsModalDueDate.textContent = "Due Date";
    taskDetailsModalDueDateText.textContent = mainTaskList.getTask(index).getDueDate();
    taskDetailsModalContent.appendChild(taskDetailsModalDueDate);
    taskDetailsModalContent.appendChild(taskDetailsModalDueDateText);

    const taskDetailsModalPriority = document.createElement("p");
    const taskDetailsModalPriorityText = document.createElement("p");
    taskDetailsModalPriority.textContent = "Priority";
    taskDetailsModalPriorityText.textContent = mainTaskList.getTask(index).getPriority();
    taskDetailsModalContent.appendChild(taskDetailsModalPriority);
    taskDetailsModalContent.appendChild(taskDetailsModalPriorityText);

    const taskDetailsModalButton = document.createElement("button");
    taskDetailsModalButton.textContent = "Edit Task";
    taskDetailsModalButton.classList.add("task-details-modal-button");
    taskDetailsModalContent.appendChild(taskDetailsModalButton);

    taskDetailsModalButton.onclick = () => {
        editTaskModal(index);
        taskDetailsModal.remove();
    };
    
}

function editTaskModal(index) {
    const editTaskModal = document.createElement("div");
    editTaskModal.classList.add("edit-task-modal");
    document.body.appendChild(editTaskModal);

    const editTaskModalContent = document.createElement("div");
    editTaskModalContent.classList.add("edit-task-modal-content");
    editTaskModal.appendChild(editTaskModalContent);

    const editTaskModalCloseButton = document.createElement("button");
    editTaskModalCloseButton.textContent = "X";
    editTaskModalCloseButton.classList.add("edit-task-modal-close-button");
    editTaskModalContent.appendChild(editTaskModalCloseButton);

    editTaskModalCloseButton.onclick = () => {
        editTaskModal.remove();
    };
    
    const editTaskModalHeader = document.createElement("h2");
    editTaskModalHeader.textContent = "Edit Task";
    editTaskModalContent.appendChild(editTaskModalHeader);

    const editTaskModalInput = document.createElement("input");
    editTaskModalInput.type = "text";
    editTaskModalInput.placeholder = "Task Name";
    editTaskModalInput.value = mainTaskList.getTask(index).getTitle();
    editTaskModalContent.appendChild(editTaskModalInput);
    
    const editTaskModalDescription = document.createElement("input");
    editTaskModalDescription.type = "text";
    editTaskModalDescription.placeholder = "Task Description";
    editTaskModalDescription.value = mainTaskList.getTask(index).getDescription();
    editTaskModalContent.appendChild(editTaskModalDescription);

    const editTaskModalDueDate = document.createElement("input");
    editTaskModalDueDate.type = "date";
    editTaskModalDueDate.placeholder = "Task Due Date";
    editTaskModalDueDate.value = mainTaskList.getTask(index).getDueDate();
    editTaskModalContent.appendChild(editTaskModalDueDate);

    const editTaskModalPriority = document.createElement("select");
    editTaskModalPriority.id = "edit-task-priority";
    editTaskModalPriority.innerHTML = `
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
    `;
    editTaskModalPriority.value = mainTaskList.getTask(index).getPriority();
    editTaskModalContent.appendChild(editTaskModalPriority);

    const editTaskModalButton = document.createElement("button");
    editTaskModalButton.textContent = "Edit Task";
    editTaskModalButton.classList.add("edit-task-modal-button");
    editTaskModalContent.appendChild(editTaskModalButton);
    
    editTaskModalButton.onclick = () => {
        mainTaskList.getTask(index).setTitle(editTaskModalInput.value.trim());
        mainTaskList.getTask(index).setDescription(editTaskModalDescription.value.trim());
        mainTaskList.getTask(index).setDueDate(editTaskModalDueDate.value.trim());
        mainTaskList.getTask(index).setPriority(editTaskModalPriority.value.trim());
        editTaskModal.remove();
        // Refresh the UI to show the new task

        renderTasks();
        saveTasksToStorage(mainTaskList.getCurrentProjectName(), mainTaskList.getAllTasks());
    };
}

export default createProjectModal;
export { createTaskModal, taskDetailsModal };
