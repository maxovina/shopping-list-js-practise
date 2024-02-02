const shopList = document.querySelector('ul');
const listInput = document.querySelector('input');
const addButton = document.querySelector('button');

addButton.addEventListener('click', function () {
    let newItem = listInput.value;
    listInput.value = "";
    console.log(newItem);
    let li = document.createElement('li');
    let span = document.createElement('span');
    let button = document.createElement('button');

    li.appendChild(span);
    li.appendChild(button);

    span.textContent = newItem;
    button.textContent = "Delete";
    button.addEventListener('click', function () {
        shopList.removeChild(button.parentElement);
        listInput.focus();
    })
    shopList.appendChild(li);

    listInput.focus();
})