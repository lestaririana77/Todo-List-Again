let todoName = document.getElementById('todo-name');
let btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', function () {
    if (todoName.value == '') {
        alert("Todo cann't be empty");
    } else {
        let todoContainer = document.querySelector('.list-group')
        let todoHTML = todoContainer.innerHTML;
        todoHTML += `
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox">
                <span>${todoName.value}</span>
            </li>`;
        
        todoContainer.innerHTML = todoHTML;
        todoName.value = '';
        todoName.focus();

        let checkTodo = document/this.querySelectorAll('.form-check-input');
        for(let i = 0; Array.length; i++){
            const input = checkTodo[i];
        }
    }
});

