// Array para armazenar as tarefas
let tasks = [];
let taskId = 0;

// Função para adicionar ou atualizar uma tarefa
$('#taskForm').on('submit', function(e) {
    e.preventDefault();

    const id = $('#taskId').val();
    const title = $('#taskTitle').val();
    const description = $('#taskDescription').val();
    const date = $('#taskDate').val();
    const time = $('#taskTime').val();
    const status = $('#taskStatus').val();

    // Atualizar tarefa existente
    if (id) {
        const task = tasks.find(t => t.id == id);
        task.title = title;
        task.description = description;
        task.date = date;
        task.time = time;
        task.status = status;
        alert("Tarefa atualizada com sucesso!");
    } 
    // Adicionar nova tarefa
    else {
        taskId++;
        tasks.push({
            id: taskId,
            title: title,
            description: description,
            date: date,
            time: time,
            status: status
        });
        alert("Tarefa adicionada com sucesso!");
    }

    // Limpa o formulário
    $('#taskForm')[0].reset();

    // Atualiza a exibição de tarefas
    renderTasks();
});

// Função para renderizar (exibir) as tarefas
function renderTasks() {
    const taskList = $('#taskList');
    taskList.empty(); // Limpa a lista atual

    tasks.forEach(task => {
        const row = $(`
            <tr>
                <td>${task.id}</td>
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.date}</td>
                <td>${task.time}</td>
                <td>${task.status}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editTask(${task.id})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Excluir</button>
                </td>
            </tr>
        `);
        taskList.append(row);
    });
}

// Função para editar uma tarefa
function editTask(id) {
    const task = tasks.find(t => t.id == id);
    $('#taskId').val(task.id);
    $('#taskTitle').val(task.title);
    $('#taskDescription').val(task.description);
    $('#taskDate').val(task.date);
    $('#taskTime').val(task.time);
    $('#taskStatus').val(task.status);
}

// Função para excluir uma tarefa
function deleteTask(id) {
    tasks = tasks.filter(task => task.id != id);
    alert("Tarefa excluída com sucesso!");
    renderTasks();
}
