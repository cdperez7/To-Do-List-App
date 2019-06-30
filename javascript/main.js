


// Add button in header to add activity to list
document.getElementById('add').addEventListener('click', function () {
    var value = document.getElementById('item').value;
    if (value)
        addItemTodo(value);
    document.getElementById('item').value = '';

});

// Function to remove items added to list
function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    // Check if the item should be listed under completed or re-added to the to do list
    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

// Adds new todo item to list
function addItemTodo(text) {

    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');






    var remove = document.createElement('button');
    remove.classList.add('remove');

    // Add click for removing items from list
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    remove.classList.add('compelte');

    // Add click for completing items from list
    complete.addEventListener('click', completeItem);


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);


    // Inserting most recent item on top of list
    list.insertBefore(item, list.childNodes[0]);
}