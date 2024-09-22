let tasks = []; 

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTaskList();
    }
};

const updateTaskList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("task-item");
        
     
        listItem.innerHTML = task.editMode
            ? `
                <input type="text" value="${task.text}" onblur="saveTask(${index}, this.value)">
                <button onclick="saveTask(${index}, this.previousElementSibling.value)"><i class="ri-check-line"></i></button>
              `
            : `
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button onclick="editTask(${index})"><i class="ri-edit-2-line"></i></button>
                <button onclick="deleteTask(${index})"><i class="ri-delete-bin-line"></i></button>
              `;

        taskList.appendChild(listItem);
    });

    updateProgress();
};

const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
};

const editTask = (index) => {
    tasks[index].editMode = true;
    updateTaskList();
};

const saveTask = (index, newText) => {
    tasks[index].text = newText;
    tasks[index].editMode = false;
    updateTaskList();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskList();
};

const updateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    const progressBar = document.getElementById('progress');
    progressBar.style.width = progressPercentage + '%';

    const numbers = document.getElementById('numbers');
    numbers.textContent = `${completedTasks} / ${totalTasks}`;
};

document.getElementById('newTask').addEventListener('click', function(e) {
    e.preventDefault();
    addTask();
});
