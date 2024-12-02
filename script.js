/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

const addItem = function () {
    const itemText = sendInput.value;

    const newItem = document.createElement('div');
    newItem.textContent = itemText;

    if (itemText != '') {
        itemsContainer.append(newItem);
    }

    sendInput.value = '';

    newItem.addEventListener('click', function () {
        newItem.classList.toggle('done');
    })
}

sendInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        addItem();
    }
});

