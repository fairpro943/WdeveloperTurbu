function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
        <span>${taskValue}</span>
        <button onclick="removeTask(this)" style='background-color: #ff0000;border-radius: 12%;border: 0;'>delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    localStorage.setItem(task,taskItem);
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}