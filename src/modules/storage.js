import Project from './project.js';
import Task from './task.js';

function saveProjectsToStorage(projectList) {
    const names = projectList.getAllProjects().map(project => project.getName());
    localStorage.setItem('projects', JSON.stringify(names));
}

function loadProjectsFromStorage() {
    const projectsJSON = localStorage.getItem('projects');
    if (projectsJSON) {
        try {
            const projectsArray = JSON.parse(projectsJSON);
            return projectsArray.map(item => {
                const name = typeof item === 'string' ? item : item.name;
                return new Project(name);
            });
        } catch (e) {
            console.error('Error parsing projects from storage:', e);
            return [];
        }
    }
    return [];
}

function saveTasksToStorage(projectName, tasks) {
    if (!projectName) return;
    const data = tasks.map(task => ({
        title: task.getTitle(),
        description: task.getDescription(),
        dueDate: task.getDueDate(),
        priority: task.getPriority(),
    }));
    localStorage.setItem(`tasks_${projectName}`, JSON.stringify(data));
}

function loadTasksFromStorage(projectName) {
    if (!projectName) return [];
    const tasksJSON = localStorage.getItem(`tasks_${projectName}`);
    if (tasksJSON) {
        try {
            const tasksArray = JSON.parse(tasksJSON);
            return tasksArray.map(taskData => new Task(
                taskData.title,
                taskData.description,
                taskData.dueDate,
                taskData.priority,
            ));
        } catch (e) {
            console.error('Error parsing tasks from storage:', e);
            return [];
        }
    }
    return [];
}

export {
    saveProjectsToStorage,
    loadProjectsFromStorage,
    saveTasksToStorage,
    loadTasksFromStorage,
};
