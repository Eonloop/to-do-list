import "../styles.css";
import Project from "./project.js";
import mainProjectList from "./projectlist.js";
import mainTaskList from "./tasklist.js";
import createProjectModal from "./modals.js";
import { createTaskModal } from "./modals.js";
import { taskDetailsModal } from "./modals.js";

let projectListUl = null;
let taskListUl = null;
let taskListHeader = null;

export default function createUI() {
  mainProjectList.loadProjectsFromStorage();

  if (mainProjectList.getProjectCount() === 0) {
    mainProjectList.addProject(new Project("Inbox"));
  }

  mainTaskList.selectProject(mainProjectList.getProject(0).getName());

  createHeader();
  createFooter();
  createSidebar();
  createTaskList();
}

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

  renderProjects();
}

function updateTaskListHeader(projectName) {
  if (taskListHeader) {
    taskListHeader.textContent = projectName;
  }
}

function selectProject(project) {
  mainTaskList.selectProject(project.getName());
  updateTaskListHeader(project.getName());
  renderProjects();
  renderTasks();
}

function createTaskList() {
  const taskListDiv = document.createElement("div");
  taskListDiv.classList.add("task-list");
  document.body.appendChild(taskListDiv);

  taskListHeader = document.createElement("h2");
  taskListHeader.textContent = mainTaskList.getCurrentProjectName();
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

  renderTasks();
}

function deleteProject(index) {
  mainProjectList.removeProject(index);
  mainTaskList.clearTasks();
  const inbox = mainProjectList.getProjectByName("Inbox");
  if (inbox) {
    selectProject(inbox);
  }
}

function deleteTask(index) {
  mainTaskList.removeTask(index);
  renderTasks();
}

function renderProjects() {
  if (!projectListUl) return;

  projectListUl.innerHTML = "";

  const currentProjectName = mainTaskList.getCurrentProjectName();
  const projects = mainProjectList.getAllProjects();

  projects.forEach((project, index) => {
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-item");
    projectItem.textContent = project.getName();

    if (project.getName() !== "Inbox") {
      const projectDeleteButton = document.createElement("button");
      projectDeleteButton.textContent = "X";
      projectDeleteButton.classList.add("project-delete-button");
      projectDeleteButton.onclick = (event) => {
        event.stopPropagation();
        deleteProject(index);
      };
      projectItem.appendChild(projectDeleteButton);
    }

    if (project.getName() === currentProjectName) {
      projectItem.classList.add("project-item-active");
    }

    projectItem.onclick = () => {
      selectProject(project);
    };

    projectListUl.appendChild(projectItem);
  });
}

function renderTasks() {
  if (!taskListUl) return;

  taskListUl.innerHTML = "";

  const tasks = mainTaskList.getAllTasks();

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.textContent = task.getTitle();

    taskItem.onclick = () => {
      taskDetailsModal(index);
    };

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.textContent = "X";
    taskDeleteButton.classList.add("task-delete-button");
    taskDeleteButton.onclick = (event) => {
      event.stopPropagation();
      deleteTask(index);
    };
    
    taskItem.appendChild(taskDeleteButton);
    taskListUl.appendChild(taskItem);
  });
}

export { renderProjects, renderTasks, selectProject };
