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
                Ngoding
            </li>`;
        
        todoContainer.innerHTML = todoHTML;
    }
});