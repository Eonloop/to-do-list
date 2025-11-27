export default class Render {
    static renderProjects(projectList, projectListUl) {
        // Clear existing list
        projectListUl.innerHTML = '';

        // Render each project
        projectList.getAllProjects().forEach((project, index) => {
            const projectLi = document.createElement('li');
            projectLi.textContent = project.name;
            projectLi.onclick = () => {
                // Handle project selection
                console.log(`Project ${project.name} selected`);
            };
            projectListUl.appendChild(projectLi);
        });
}
    static renderTasks(taskList, taskListUl) {
        // Clear existing list
        taskListUl.innerHTML = '';
        
        // Render each task 
        taskList.forEach((task, index) => {
            const taskLi = document.createElement('li');
            taskLi.textContent = task.title;
            taskLi.onclick = () => {
                // Handle task selection
                console.log(`Task ${task.title} selected`);
            };
            taskListUl.appendChild(taskLi);
        });
    }
}