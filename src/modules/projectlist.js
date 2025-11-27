class ProjectList {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(index) {
        this.projects.splice(index, 1);
    }

    getProject(index) {
        return this.projects[index];
    }

    getAllProjects() {
        return this.projects;
    }

    getProjectCount() {
        return this.projects.length;
    }
}

const mainProjectList = new ProjectList();
export default mainProjectList;