const STORAGE_KEY = 'todo-list-items';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');
const emptyState = document.getElementById('empty-state');

let todos = loadTodos();

// 讀取 localStorage 中的待辦資料，若錯誤則回傳空陣列
function loadTodos() {
  try {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch (error) {
    console.error('讀取待辦事項失敗：', error);
    return [];
  }
}

// 將待辦資料存回 localStorage
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 更新底部未完成數量
function updateTodoCount() {
  const remainingCount = todos.filter((todo) => !todo.completed).length;
  todoCount.textContent = `未完成: ${remainingCount} 項`;
}

// 渲染清單內容，並依照是否為空顯示提示文字
function renderTodos() {
  todoList.innerHTML = '';

  if (todos.length === 0) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
  }

  todos.forEach((todo) => {
    const item = document.createElement('li');
    item.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    const content = document.createElement('label');
    content.className = 'todo-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.setAttribute('aria-label', `完成待辦：${todo.text}`);

    const text = document.createElement('span');
    text.className = 'todo-text';
    text.textContent = todo.text;

    content.appendChild(checkbox);
    content.appendChild(text);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = '刪除';
    deleteButton.setAttribute('aria-label', `刪除待辦：${todo.text}`);

    item.appendChild(content);
    item.appendChild(deleteButton);

    item.dataset.id = String(todo.id);
    checkbox.dataset.id = String(todo.id);
    deleteButton.dataset.id = String(todo.id);

    todoList.appendChild(item);
  });

  updateTodoCount();
}

// 新增待辦事項
function addTodo() {
  const text = todoInput.value.trim();

  // 若輸入為空白則不新增
  if (!text) {
    todoInput.focus();
    return;
  }

  todos.push({
    id: Date.now() + Math.random(),
    text,
    completed: false,
  });

  saveTodos();
  renderTodos();
  todoForm.reset();
  todoInput.focus();
}

// 切換完成狀態
function toggleTodo(id) {
  todos = todos.map((todo) => {
    if (String(todo.id) === String(id)) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  saveTodos();
  renderTodos();
}

// 刪除待辦事項
function deleteTodo(id) {
  todos = todos.filter((todo) => String(todo.id) !== String(id));
  saveTodos();
  renderTodos();
}

// 監聽新增表單提交事件
 todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});

// 監聽勾選框變更事件
 todoList.addEventListener('change', (event) => {
  const target = event.target;

  if (target.matches('input[type="checkbox"]')) {
    toggleTodo(target.dataset.id);
  }
});

// 監聽刪除按鈕點擊事件
 todoList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.matches('.delete-btn')) {
    deleteTodo(target.dataset.id);
  }
});

renderTodos();
