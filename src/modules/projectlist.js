import { loadProjectsFromStorage, saveProjectsToStorage } from './storage.js';

class ProjectList {
    constructor() {
        this.projects = [];
    }

    getProjectByName(name) {
        return this.projects.find(p => p.getName() === name);
    }

    loadProjectsFromStorage() {
        this.projects = loadProjectsFromStorage();
    }

    saveProjectsToStorage() {
        saveProjectsToStorage(this);
    }

    addProject(project) {
        this.projects.push(project);
        this.saveProjectsToStorage();
    }

    removeProject(index) {
        this.projects.splice(index, 1);
        this.saveProjectsToStorage();
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
