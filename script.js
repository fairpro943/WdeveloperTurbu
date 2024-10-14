    // تحميل المهام عند تحميل الصفحة
    window.onload = function() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            displayTask(task.name, task.description, task.dueDate);
        });
    };

    function addTask() {
        const name = document.getElementById('taskName').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;

        if (!name) {
            alert('Enter task name');
            return;
        }

        const task = { name, description, dueDate };
        saveTaskToLocal(task);
        displayTask(name, description, dueDate);

        // إعادة تعيين الحقول
        document.getElementById('taskName').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskDueDate').value = '';
    }

    function displayTask(name, description, dueDate) {
        const taskList = document.getElementById('taskList');
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <div>
                <strong>${name}</strong><br>
                <span>${description || 'لا يوجد وصف'}</span><br>
                <span>${dueDate ? 'date: ' + dueDate : 'dont date'}</span>
            </div>
            <button class="btn btn-danger" onclick="removeTask(this)">delete</button>
        `;
        taskList.appendChild(taskDiv);
    }

    function saveTaskToLocal(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function removeTask(button) {
        const taskDiv = button.parentElement;
        const name = taskDiv.querySelector('strong').innerText;
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(task => task.name !== name);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        taskDiv.remove();
    }