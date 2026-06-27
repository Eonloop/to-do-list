import { loadTasksFromStorage, saveTasksToStorage } from "./storage.js";

class TaskList {
    constructor() {
        this.tasks = [];
        this.currentProjectName = null;
    }

    selectProject(projectName) {
        if (this.currentProjectName) {
            saveTasksToStorage(this.currentProjectName, this.tasks);
        }
        this.currentProjectName = projectName;
        this.tasks = loadTasksFromStorage(projectName);
    }

    getCurrentProjectName() {
        return this.currentProjectName;
    }

    addTask(task) {
        this.tasks.push(task);
        saveTasksToStorage(this.currentProjectName, this.tasks);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        saveTasksToStorage(this.currentProjectName, this.tasks);
    }

    getTask(index) {
        return this.tasks[index];
    }

    getAllTasks() {
        return this.tasks;
    }

    getTaskCount() {
        return this.tasks.length;
    }

    clearTasks() {
        this.tasks = [];
        saveTasksToStorage(this.currentProjectName, this.tasks);
    }
}

const mainTaskList = new TaskList();

export default mainTaskList;
export { TaskList };
