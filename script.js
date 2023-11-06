let todoInput = document.getElementById('todoInput');
let addButton = document.querySelector('.add-button');
let list = document.querySelector('.list');
let addInputButton = document.querySelector('.input-icon');
let sort = document.querySelector('.sort');
let sort1 = document.querySelector('.sort1');
let sort2 = document.querySelector('.sort2');
let isSorted = false;

addButton.addEventListener('click',  (event) => {
    event.preventDefault();
    toggleListVisibility();
    let text = todoInput.value.trim();
    if (text !== '') {
        addItem(text);
        todoInput.value = '';
    }
});

addInputButton.addEventListener('click',  (event) => {
    event.preventDefault();
    todoInput.value = '';
});

todoInput.addEventListener('keyup',  (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        toggleListVisibility();
        let text = todoInput.value.trim();
        if (text !== '') {
            addItem(text);
            todoInput.value = '';
        }
    }
});

sort.addEventListener('click',  (event) => {
    event.preventDefault();
    toggleListSorting();
    swapSortIcons();
});

function toggleListVisibility() {
    if (todoInput.value.trim() != '') {
        if (list.style.display == 'none' || list.style.display == '') {
            list.style.display = 'block';
            todoInput.style.display = 'none';
            addInputButton.style.display = 'none';
        } else {
            todoInput.style.display = 'block';
            addInputButton.style.display = 'block';
        }
    } else {
        todoInput.style.display = 'block';
        addInputButton.style.display = 'block';
    }
}

function toggleListSorting() {
    let items = Array.from(list.children);
    if (isSorted) {
        items.reverse();
    } else {
        items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    }
    items.forEach(item => list.appendChild(item));
    isSorted = !isSorted;
}

function swapSortIcons() {
    let sort1Content = sort1.innerHTML;
    sort1.innerHTML = sort2.innerHTML;
    sort2.innerHTML = sort1Content;
}

function addItem(text) {
    let listItem = document.createElement('div');
    listItem.className = 'list-item';

    let itemText = document.createElement('div');
    itemText.className = 'list-item-text';
    itemText.textContent = text;

    let deleteIcon = document.createElement('svg');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/><path d="M6 6L14 14" stroke="#C4C4C4"/><path d="M6 14L14 6" stroke="#C4C4C4"/></svg>';
    deleteIcon.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(itemText);
    listItem.appendChild(deleteIcon);
    list.appendChild(listItem);
};
