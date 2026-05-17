import Project from './project.js';
import Task from './task.js';

const defaultProject = new Project("Mes tâches");

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
savedTasks.forEach(taskData => {
  const task = new Task(taskData.title, taskData.dueDate, taskData.completed);
  defaultProject.addTask(task);
});

function renderTasks(project) {
  const list = document.querySelector('#task-list');
  list.innerHTML = "";

  project.tasks.forEach((task, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      localStorage.setItem('tasks', JSON.stringify(project.tasks));
    });

    const info = document.createElement('span');
    info.textContent = `${task.title} - ${task.description} (Priorité: ${task.priority})`;

    if (task.dueDate) {
      const due = document.createElement('small');
      due.textContent = `Échéance: ${task.dueDate}`;
      li.appendChild(due);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener('click', () => {
      project.removeTask(index);
      localStorage.setItem('tasks', JSON.stringify(project.tasks));
      renderTasks(project);
    });

    li.appendChild(checkbox);
    li.appendChild(info);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}




document.querySelector('#task-form').addEventListener('submit', (e) => {
  e.preventDefault(); 
  const title = document.querySelector('#task-title').value;
  const desc = document.querySelector('#task-desc').value;
  const date = document.querySelector('#task-date').value;
  const priority = document.querySelector('#task-priority').value;
  
  const newTask = new Task(title, desc, date, priority);
  defaultProject.addTask(newTask);

  localStorage.setItem('tasks', JSON.stringify(defaultProject.tasks));
  
  renderTasks(defaultProject); 
  e.target.reset();
});



renderTasks(defaultProject);
