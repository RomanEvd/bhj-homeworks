let dropDownList = document.querySelector('.dropdown__value');
let listOfItems = document.querySelectorAll('.dropdown__item');
let selectedItem = document.querySelector('ul.dropdown__list');
let listLength = listOfItems.length;

dropDownList.onclick = function() {
    selectedItem.classList.add('dropdown__list_active');
    for (i = 0; i < listLength; i++) {
        listOfItems[i].addEventListener('click', function(event) {
            event.preventDefault();
            dropDownList.textContent = event.target.textContent;
            selectedItem.classList.remove('dropdown__list_active');
            return;
        });
    }
}