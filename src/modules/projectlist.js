import createProject from "./projects";
import createProjectModal from "./modals";

function createProjectList() {
    const projectListDiv = document.createElement("div");
    projectListDiv.classList.add("project-list");
    document.querySelector(".sidebar").appendChild(projectListDiv);

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    projectListDiv.appendChild(projectContainer);

    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add Project";
    addProjectButton.classList.add("add-project-button");
    projectListDiv.appendChild(addProjectButton);

    addProjectButton.onclick = () => {
        createProjectModal();
    };
}

export default createProjectList;