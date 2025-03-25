document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });
  
  function addTask(taskText) {
    const taskList = document.getElementById('taskList');
  

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
  

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
      taskList.removeChild(li);
    });
  
    const editBtn = li.querySelector('.edit-btn');
    editBtn.addEventListener('click', function () {
      const span = li.querySelector('span');
      const newText = prompt('Edit your task:', span.textContent);
      if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.trim();
      }
    });
  
    taskList.appendChild(li);
  }