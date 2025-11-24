export default class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
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
}

