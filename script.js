let todoName = document.getElementById('todo-name');
let btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', function () {
    if (todoName.value == '') {
        alert("Todo cann't be empty");
    } else {
        let todoContainer = document.querySelector('.list-group')
        let todoHTML = todoContainer.innerHTML;
        todoHTML += `
            <li class="list-group-item d-flex justify-content-between">
                <div>
                    <input class="form-check-input me-1" type="checkbox">
                    <span>${todoName.value}</span>
                </div>
                <button class="badge border-0 bg-danger btn-hapus">Delete</button>
            </li>`;
        
        todoContainer.innerHTML = todoHTML;
        todoName.value = '';
        todoName.focus();

        let checkTodo = document.querySelectorAll('.form-check-input');
        for(let i = 0; i < checkTodo.length; i++){
            const input = checkTodo[i];
            input.addEventListener('change', function(){
                let todoSpan = input.nextElementSibling; // element span dan input jadi sibling
                todoSpan.classList.toggle("text-decoration-line-through"); // untuk menambahkan dekorasi jadi kalau diklik checkboxnya tulisannya kecoret
            });
        }

        let btnHapus = document.querySelectorAll('.btn-hapus');
        for (let j = 0; j < btnHapus.length; j++) {
            const hapus = btnHapus[j]; 
            hapus.addEventListener('click', function(){
                this.parentElement.remove(); // untuk menghapus dari element parent
            })
        }
    }
});
