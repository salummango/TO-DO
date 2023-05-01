// const addBtn = document.querySelector('#add-btn');
// const listContainer = document.querySelector('#list-container');
// const inputText = document.querySelector('#input-box');
// const resetButton = document.querySelector('#reset-button');

// addBtn.addEventListener('click', function() {
//     if (inputText.value === "") {
//         alert("Please Add Task on input box to be added");
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = inputText.value;
//         listContainer.appendChild(li);
//         let deleteBtn = document.createElement('button');
//         deleteBtn.innerHTML = "X";
//         li.appendChild(deleteBtn);
//     };
//     inputText.value = "";
//     saveToLocalStorage();

// });

// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('checked');
//         saveToLocalStorage();
//     } else if (e.target.tagName === 'BUTTON') {
//         e.target.parentElement.remove();
//         saveToLocalStorage();
//     };
// }, false);

// const saveToLocalStorage = () => {
//     localStorage.setItem("task", listContainer.innerHTML);
// }

// const renderTasks = () => {
//     listContainer.innerHTML = localStorage.getItem("task");
// }

// renderTasks();

// resetButton.addEventListener('click', () => {
//     localStorage.clear();
//     listContainer.innerHTML = "";
// });

const addBtn = document.querySelector('#add-btn');
const listContainer = document.querySelector('#list-container');
const inputText = document.querySelector('#input-box');
const resetButton = document.querySelector('#reset-button');

addBtn.addEventListener('click', function() {
    if (inputText.value === "") {
        alert("Please Add Task on input box to be added");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = "X";
        li.appendChild(deleteBtn);
    };
    inputText.value = "";
    saveToLocalStorage();

});

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveToLocalStorage();
    } else if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        saveToLocalStorage();
    };
}, false);

const saveToLocalStorage = () => {
    localStorage.setItem("task", listContainer.innerHTML);
}

const renderTasks = () => {
    listContainer.innerHTML = localStorage.getItem("task");
}

renderTasks();

resetButton.addEventListener('click', () => {
    localStorage.clear();
    listContainer.innerHTML = "";
});