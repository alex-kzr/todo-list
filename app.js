const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;
    return html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const todo = addForm.add.value.trim();
    if(todo.length){
        list.innerHTML += generateTemplate(todo);
        addForm.reset();    
    }
});