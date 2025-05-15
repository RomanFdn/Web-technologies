// Завантаження завдань із LocalStorage при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

// Функція для додавання нового завдання
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Е ну введи завдання а потім зберігай!");
        return;
    }

    const tasks = getTasksFromStorage();
    tasks.push(taskText);
    saveTasksToStorage(tasks);
    taskInput.value = "";
    loadTasks();
}

// Функція для завантаження завдань
function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const tasks = getTasksFromStorage();
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const taskTextElement = document.createElement("span");
        taskTextElement.className = "task-text";
        taskTextElement.textContent = task;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Редагувати💂‍♀️";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editTask(index, li, taskTextElement);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Видалити😶‍🌫️";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(taskTextElement);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Функція для редагування завдання
function editTask(index, li, taskTextElement) {
    const tasks = getTasksFromStorage();
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = tasks[index];

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Зберегти😁";
    saveBtn.onclick = () => {
        const newText = editInput.value.trim();
        if (newText) {
            tasks[index] = newText;
            saveTasksToStorage(tasks);
            loadTasks();
        } else {
            alert("Ну ти і хитрун давай пиши завдання і лягай спати!");
        }
    };

    li.replaceChild(editInput, taskTextElement);
    li.replaceChild(saveBtn, li.querySelector(".edit-btn"));
}

// Функція для видалення завдання
function deleteTask(index) {
    const tasks = getTasksFromStorage();
    tasks.splice(index, 1);
    saveTasksToStorage(tasks);
    loadTasks();
}

// Функція для сортування завдань за алфавітом
function sortTasks() {
    const tasks = getTasksFromStorage();
    tasks.sort((a, b) => a.localeCompare(b));
    saveTasksToStorage(tasks);
    loadTasks();
}

// Функція для очищення всіх завдань
function clearTasks() {
    localStorage.removeItem("tasks");
    loadTasks();
}

// Функція для отримання завдань із LocalStorage
function getTasksFromStorage() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Функція для збереження завдань у LocalStorage
function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}