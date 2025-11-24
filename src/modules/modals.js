import Project from "./project"

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
        const project = new Project(projectModalInput.value.trim());
        
    };
}

function createTaskModal() {
    //Todo: Create task modal
}


function projectDetailsModal() {
    //Todo: Create project details modal
}

function taskDetailsModal() {
    //Todo: Create task details modal
}

export default createProjectModal;
