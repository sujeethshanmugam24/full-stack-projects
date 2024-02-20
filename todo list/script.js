document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        createTaskElement(task);
    });
}

function createTaskElement(task) {
    const taskList = document.getElementById('task-list');

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskText = document.createElement('div');
    taskText.textContent = task.text;

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(task.id));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(task.id));

    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    taskElement.appendChild(taskText);
    taskElement.appendChild(taskActions);

    taskList.appendChild(taskElement);
}

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newTaskText = newTaskInput.value.trim();

    if (newTaskText === '') return;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const newTask = {
        id: Date.now(),
        text: newTaskText,
    };

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    createTaskElement(newTask);

    newTaskInput.value = '';
}

function editTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskToEdit = tasks.find(task => task.id === taskId);

    if (!taskToEdit) return;

    const editedText = prompt('Edit task:', taskToEdit.text);

    if (editedText !== null) {
        taskToEdit.text = editedText;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
}

function deleteTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const updatedTasks = tasks.filter(task => task.id !== taskId);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    loadTasks();
}
