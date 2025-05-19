let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();

  if (text) {
    todos.push({
      id: Date.now(),
      text,
      completed: false
    });

    input.value = '';
    saveTodos();
  }
}

function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  saveTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
}

function renderTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = todos
    .map(
      todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
          <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="toggleTodo(${todo.id})">
          <span>${todo.text}</span>
          <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        </li>
      `
    )
    .join('');
}

document.getElementById('todoInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});

renderTodos();
