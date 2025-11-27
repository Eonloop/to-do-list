import '../styles.css';
import mainProjectList from './projectlist.js';
import mainTaskList from './tasklist.js';
import createProjectModal from './modals.js';
import { createTaskModal } from './modals.js';

let projectListUl = null; // Reference to the UL element for updates
let taskListUl = null; 

export default function createUI() {
    createHeader();
    createFooter();
    createSidebar();
    createProjectList();
    createTaskList();
}



// Basic UI elements for setup
function createHeader() {
    const headerDiv = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = "Todoloo";
    headerDiv.appendChild(header);
    headerDiv.classList.add("header");
    document.body.appendChild(headerDiv);
}

function createFooter() {
    const footerDiv = document.createElement("div");
    const footer = document.createElement("p");
    footerDiv.appendChild(footer);
    footer.classList.add("footer");
    document.body.appendChild(footerDiv);
}

function createSidebar() {
    //Create sidebar div
    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.add("sidebar");
    document.body.appendChild(sidebarDiv);


    const sidebarTitle = document.createElement("h2");
    sidebarTitle.textContent = "Projects";
    sidebarDiv.appendChild(sidebarTitle);

    projectListUl = document.createElement("ul");
    projectListUl.classList.add("project-list-ul");
    sidebarDiv.appendChild(projectListUl);

    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add Project";
    addProjectButton.classList.add("add-project-button");
    addProjectButton.onclick = () => {
        createProjectModal();
    };
    sidebarDiv.appendChild(addProjectButton);

    // Initial render
    renderProjects();

}

// Function to render projects in the list
function renderProjects() {
    if (!projectListUl) return;
    
    // Clear existing items
    projectListUl.innerHTML = '';
    
    // Debug: Check what we're getting
    const projects = mainProjectList.getAllProjects();
    console.log('Projects array:', projects);
    console.log('Number of projects:', projects.length);
    
    // Render each project
    projects.forEach(project => {
        console.log('Rendering project:', project);
        const projectItem = document.createElement("li");
        projectItem.classList.add("project-item");
        projectItem.textContent = project.getName();
        projectListUl.appendChild(projectItem);
        projectItem.onclick = () => {
            // Remove active class from all project items
            Array.from(projectListUl.children).forEach(item => {
                item.classList.remove("project-item-active");
            });
            // Add active class to the clicked item
            projectItem.classList.add("project-item-active");
        };
    });
}

function renderTasks() {
    if (!taskListUl) return;
    
    // Clear existing items
    taskListUl.innerHTML = '';
    
    // Debug: Check what we're getting
    const tasks = mainTaskList.getAllTasks();
    console.log('Tasks array:', tasks);
    console.log('Number of tasks:', tasks.length);
    
    // Render each task
    tasks.forEach(task => {
        console.log('Rendering task:', task);
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
        taskItem.textContent = task.getTitle();
        taskListUl.appendChild(taskItem);
    });
}



function createTaskList() {
    const taskListDiv = document.createElement("div");
    taskListDiv.classList.add("task-list");
    document.body.appendChild(taskListDiv);

    const taskListHeader = document.createElement("h2");
    taskListHeader.textContent = mainProjectList.getProject(0);
    taskListDiv.appendChild(taskListHeader);

    taskListUl = document.createElement("ul");
    taskListDiv.appendChild(taskListUl);

    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task";
    addTaskButton.classList.add("add-task-button");
    addTaskButton.onclick = () => {
        createTaskModal();
    };
    taskListDiv.appendChild(addTaskButton);

    // Initial render
    renderTasks();
}

// Export renderProjects so modals can call it directly
export { renderProjects, renderTasks };