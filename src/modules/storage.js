import Project from './project.js';
import Task from './task.js';

function saveProjectsToStorage(projectList) {
    const projectsJSON = JSON.stringify(projectList.getAllProjects());
    localStorage.setItem('projects', projectsJSON);
};


function loadProjectsFromStorage() {
    const projectsJSON = localStorage.getItem('projects');
    if (projectsJSON) {
      try {
        const projectsArray = JSON.parse(projectsJSON);
      return projectsArray.map(projectName => new Project(projectName));
    } catch (e) {
      console.error('Error parsing projects from storage:', e);
      return [];
    }
  }
  return [];
};


function saveTasksToStorage(projectName, tasks) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem(`tasks_${projectName}`, tasksJSON);
};


function loadTasksFromStorage(projectName) {
    const tasksJSON = localStorage.getItem(`tasks_${projectName}`);
    if (tasksJSON) {
      try {
        const tasksArray = JSON.parse(tasksJSON);
      return tasksArray.map(taskData => new Task(taskData));
    } catch (e) {
      console.error('Error parsing tasks from storage:', e);
      return [];
    }
  }
  return [];
};


export {
    saveProjectsToStorage,
    loadProjectsFromStorage,
    saveTasksToStorage,
    loadTasksFromStorage
};








